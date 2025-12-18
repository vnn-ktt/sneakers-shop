<script setup lang="ts">
import Card from "@/components/Card.vue";
import { useShopStore } from "@/stores/shop";
import { inject } from "vue";
import type { IProduct } from "@/types/product";
const shopStore = useShopStore();

const onCartProduct = inject<(item: IProduct) => void>('onCartProduct', () => {
    console.warn('onCartProduct not provided')
});
</script>

<template>
  <div v-if="shopStore.getLikedCount != 0" class="flex flex-col gap-4">
    <div class="flex flex-col flex-1 gap-4 mb-4">
      <Card
        v-for="item in shopStore.likedProducts"
        :key="item.id"
        :id="item.id"
        type="liked"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :price="item.price"
        :isCarted="item.isCarted"
        :isLiked="item.isLiked"
      />
    </div>
  </div>
  <div v-else class="flex justify-center items-center">
    <span class="text-2xl font-bold">empty...</span>
  </div>
</template>