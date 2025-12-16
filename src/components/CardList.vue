<script setup lang="ts">
  import { inject } from "vue";
  import Card from "@/components/Card.vue";
  import type {
    IProduct, TProductCardType
  } from "@/types/product";

  const onLikeProduct =
      inject<(item: IProduct) => void>('onLikeProduct', () => {
        console.warn('onLikeProduct not provided')
      });
  const onCartProduct =
      inject<(item: IProduct) => void>('onCartProduct', () => {
        console.warn('onCartProduct not provided')
      });

  defineProps<{
    items: IProduct[];
  }>();
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
      <Card
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          type="catalog"
          :title="item.title"
          :imageUrl="item.imageUrl"
          :price="item.price"
          :isCarted="item.isCarted"
          :isLiked="item.isLiked"
          :onClickLike="() => onLikeProduct(item)"
          :onClickAdd="() => onCartProduct(item)"
      />
  </div>
</template>