import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
    getProducts
} from "@/api/product";
import type {
    IProduct
} from "@/types/product";
import type { IQueryParams } from "@/types/api";

export const useShopStore = defineStore('shop', () => {
    const products = ref<IProduct[]>([])
    const likedProducts = ref<IProduct[]>([])
    const cartedProducts = ref<IProduct[]>([])

    const getProductCount = computed(() => products.value.length)
    const getLikedCount = computed(() => likedProducts.value.length)
    const getCartCount = computed(() => cartedProducts.value.length)
    const getTotalSum = computed(() => {
        cartedProducts.value.reduce((a: number, p: IProduct): number => a += p.price, 0);
    })

    function toggleLikeProduct(product: IProduct): void {
        const idx: number = likedProducts.value.findIndex(p => p.id === product.id)
        
        if (idx === -1) {
            likedProducts.value.push(product)
        } else {
            likedProducts.value.splice(idx, 1)
        }
        
        const catalogProduct = products.value.find(p => p.id === product.id)
        if (catalogProduct) {
            catalogProduct.isLiked = idx === -1
        }
    }

    function toggleCartProduct(product: IProduct) {
        const idx: number = cartedProducts.value.findIndex(p => p.id === product.id)
        
        if (idx === -1) {
            cartedProducts.value.push(product)
        } else {
            cartedProducts.value.splice(idx, 1)
        }
        
        const catalogProduct = products.value.find(p => p.id === product.id)
        if (catalogProduct) {
            catalogProduct.isCarted = idx === -1
        }
    }

    async function setupProducts() {
        try {
            const data = await getProducts({
                sortBy: 'title',
                title: '*'
            });
            products.value = data;
        } catch (e) {
            return e
        }
    }

    async function fetchProducts(params: IQueryParams) {
        try {
            const data = await getProducts(params);
            products.value = data;
        } catch (e) {
            return e
        }
    }

    return { 
        products,
        likedProducts,
        cartedProducts,
        getProductCount,
        getLikedCount,
        getCartCount,
        getTotalSum,
        setupProducts,
        fetchProducts,
        toggleLikeProduct,
        toggleCartProduct
    }
});