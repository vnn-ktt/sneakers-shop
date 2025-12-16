import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IProduct } from "@/types/product.ts";

export const useShopStore = defineStore('shop', () => {
    const totalSum = ref<number>(0)
    const products = ref<IProduct[]>([])

    const getTotalSum = computed(() => totalSum.value)
    const getProductCount = computed(() => products.value.length)

    function likeProduct (product: IProduct) {

    }

    return { totalSum, products, getTotalSum, getProductCount }
});