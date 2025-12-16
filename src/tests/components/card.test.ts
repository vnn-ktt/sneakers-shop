// import { describe, it, expect } from 'bun:test'
// import { mount } from '@vue/test-utils'
// import Card from '@/components/Card.vue'
//
// describe('Card Component', () => {
//     const baseProps = {
//         id: 1,
//         title: 'Nike Air Max',
//         price: 12990,
//         imageUrl: '/sneakers/sneakers-1.jpg',
//         isCarted: false,
//         isLiked: false
//     }
//
//     describe('Catalog type', () => {
//         it('renders catalog card with correct content', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog'
//                 }
//             })
//
//             expect(wrapper.find('p').text()).toBe('Nike Air Max')
//             expect(wrapper.find('span').text()).toBe('12990')
//             expect(wrapper.find('img[alt="Sneaker"]').attributes('src')).toBe('/sneakers/sneakers-1.jpg')
//
//             expect(wrapper.find('img[alt="Like"]').exists()).toBe(true)
//             expect(wrapper.find('img[alt="Plus"]').exists()).toBe(true)
//         })
//
//         it('shows like-1.svg when not liked', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog',
//                     isLiked: false
//                 }
//             })
//
//             const likeImg = wrapper.find('img[alt="Like"]')
//             expect(likeImg.attributes('src')).toBe('public/like-1.svg')
//         })
//
//         it('shows like-2.svg when liked', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog',
//                     isLiked: true
//                 }
//             })
//
//             const likeImg = wrapper.find('img[alt="Like"]')
//             expect(likeImg.attributes('src')).toBe('public/like-2.svg')
//         })
//
//         it('shows plus.svg when not in cart', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog',
//                     isCarted: false
//                 }
//             })
//
//             const addImg = wrapper.find('img[alt="Plus"]')
//             expect(addImg.attributes('src')).toBe('public/plus.svg')
//         })
//
//         it('shows checked.svg when in cart', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog',
//                     isCarted: true
//                 }
//             })
//
//             const addImg = wrapper.find('img[alt="Plus"]')
//             expect(addImg.attributes('src')).toBe('public/checked.svg')
//         })
//
//         it('emits click event when add button is clicked', async () => {
//             const onClickAdd = () => console.log('add clicked')
//
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'catalog',
//                     onClickAdd
//                 }
//             })
//
//             const addButton = wrapper.findAll('div').find(d => {
//                 return d.find('img[alt="Plus"]').exists()
//             })
//
//             if (addButton) {
//                 await addButton.trigger('click')
//             }
//         })
//     })
//
//     describe('Cart type', () => {
//         it('renders cart card with correct content', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'cart'
//                 }
//             })
//
//             expect(wrapper.find('p').text()).toBe('Nike Air Max')
//             expect(wrapper.find('span').text()).toBe('12990')
//             expect(wrapper.find('img[alt="Close"]').exists()).toBe(true)
//             expect(wrapper.find('img[alt="Close"]').attributes('src')).toBe('public/close.svg')
//         })
//
//         it('does not show like or add buttons in cart mode', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     ...baseProps,
//                     type: 'cart'
//                 }
//             })
//
//             expect(wrapper.find('img[alt="Like"]').exists()).toBe(false)
//             expect(wrapper.find('img[alt="Plus"]').exists()).toBe(false)
//         })
//     })
//
//     describe('Edge cases', () => {
//         it('renders with minimal props', () => {
//             const wrapper = mount(Card, {
//                 props: {
//                     title: 'Minimal Product',
//                     price: 0,
//                     imageUrl: '',
//                     isCarted: false,
//                     isLiked: false,
//                     type: 'catalog'
//                 }
//             })
//
//             expect(wrapper.find('p').text()).toBe('Minimal Product')
//             expect(wrapper.find('span').text()).toBe('0')
//         })
//     })
//
// })