import { describe, it, expect } from 'bun:test'
import { mount } from '@vue/test-utils'
import CardList from '@/components/CardList.vue'
import type { IProduct } from '@/types/product'

describe('CardList Component', () => {
    const mockItems: IProduct[] = [
        {
            id: 1,
            title: 'Nike Air Max',
            price: 12990,
            imageUrl: '/sneakers/sneakers-1.jpg',
            isCarted: false,
            isLiked: false
        },
        {
            id: 2,
            title: 'Adidas Real',
            price: 6490,
            imageUrl: '/sneakers/sneakers-3.jpg',
            isCarted: false,
            isLiked: false
        }
    ]

    const mockOnLikeProduct = vi.fn()
    const mockOnCartProduct = vi.fn()

    const provideStubs = () => ({
        provide: {
            onLikeProduct: mockOnLikeProduct,
            onCartProduct: mockOnCartProduct
        }
    })

    describe('Default behavior', () => {
        it('renders correct number of Card components', () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })
            expect(cards).toHaveLength(2)
        })

        it('passes correct props to each Card component', () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })

            // Проверяем первый Card
            expect(cards[0].props()).toMatchObject({
                id: 1,
                title: 'Nike Air Max',
                price: 12990,
                imageUrl: 'public/sneakers/sneakers-1.jpg',
                type: 'catalog',
                isCarted: false,
                isLiked: false
            })

            // Проверяем второй Card
            expect(cards[1].props()).toMatchObject({
                id: 2,
                title: 'Adidas Real',
                price: 6490,
                imageUrl: 'public/sneakers/sneakers-3.jpg',
                type: 'catalog',
                isCarted: false,
                isLiked: false
            })
        })

        it('renders with correct grid layout', () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const grid = wrapper.find('div')
            expect(grid.classes()).toContain('grid')
            expect(grid.classes()).toContain('grid-cols-3')
            expect(grid.classes()).toContain('gap-5')
        })

        it('injects onClickLike handler that calls onLikeProduct', async () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const firstCard = wrapper.findComponent({ name: 'Card' })
            await firstCard.vm.$emit('click-like')

            expect(mockOnLikeProduct).toHaveBeenCalledTimes(1)
            expect(mockOnLikeProduct).toHaveBeenCalledWith(mockItems[0])
        })

        it('injects onClickAdd handler that calls onCartProduct', async () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const firstCard = wrapper.findComponent({ name: 'Card' })
            await firstCard.vm.$emit('click-add')

            expect(mockOnCartProduct).toHaveBeenCalledTimes(1)
            expect(mockOnCartProduct).toHaveBeenCalledWith(mockItems[0])
        })
    })

    describe('Injection handling', () => {
        it('uses default console.warn when onLikeProduct not provided', () => {
            const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

            mount(CardList, {
                props: {
                    items: mockItems
                },
                global: {
                    provide: {
                        onCartProduct: mockOnCartProduct
                        // onLikeProduct не предоставляем
                    }
                }
            })

            expect(consoleWarnSpy).toHaveBeenCalledWith('onLikeProduct not provided')
            consoleWarnSpy.mockRestore()
        })

        it('uses default console.warn when onCartProduct not provided', () => {
            const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

            mount(CardList, {
                props: {
                    items: mockItems
                },
                global: {
                    provide: {
                        onLikeProduct: mockOnLikeProduct
                        // onCartProduct не предоставляем
                    }
                }
            })

            expect(consoleWarnSpy).toHaveBeenCalledWith('onCartProduct not provided')
            consoleWarnSpy.mockRestore()
        })
    })

    describe('Edge cases', () => {
        it('renders empty grid when items array is empty', () => {
            const wrapper = mount(CardList, {
                props: {
                    items: []
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })
            expect(cards).toHaveLength(0)

            const grid = wrapper.find('div')
            expect(grid.classes()).toContain('grid')
        })

        it('handles items with missing optional properties', () => {
            const partialItems = [
                {
                    id: 3,
                    title: 'Partial Product',
                    price: 1000,
                    imageUrl: '/test.jpg'
                    // isCarted и isLiked могут быть опциональными в зависимости от IProduct
                }
            ] as IProduct[]

            const wrapper = mount(CardList, {
                props: {
                    items: partialItems
                },
                global: provideStubs()
            })

            const card = wrapper.findComponent({ name: 'Card' })
            expect(card.exists()).toBe(true)
            expect(card.props('title')).toBe('Partial Product')
        })

        it('renders correct image URLs with public prefix', () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })
            expect(cards[0].props('imageUrl')).toBe('public/sneakers/sneakers-1.jpg')
            expect(cards[1].props('imageUrl')).toBe('public/sneakers/sneakers-3.jpg')
        })
    })

    describe('Event propagation', () => {
        it('propagates click-like events from Card components', async () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })

            // Эмулируем клик на лайк у первого Card
            await cards[0].vm.$emit('click-like')
            expect(mockOnLikeProduct).toHaveBeenCalledWith(mockItems[0])

            // Эмулируем клик на лайк у второго Card
            await cards[1].vm.$emit('click-like')
            expect(mockOnLikeProduct).toHaveBeenCalledWith(mockItems[1])
        })

        it('propagates click-add events from Card components', async () => {
            const wrapper = mount(CardList, {
                props: {
                    items: mockItems
                },
                global: provideStubs()
            })

            const cards = wrapper.findAllComponents({ name: 'Card' })

            await cards[0].vm.$emit('click-add')
            expect(mockOnCartProduct).toHaveBeenCalledWith(mockItems[0])

            await cards[1].vm.$emit('click-add')
            expect(mockOnCartProduct).toHaveBeenCalledWith(mockItems[1])
        })
    })
})