<script setup lang="ts">
  import Card from "@/components/Card.vue";
  import { IProduct } from "@/types/product";

  defineProps<{
    items: IProduct[]
  }>();
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
      <Card
          v-for="item in items"
          :key="item.id"
          type="catalog"
          :title="item.title"
          :imageUrl="'public' + item.imageUrl"
          :price="item.price"
          :isCarted="item.isCarted"
          :isLiked="item.isLiked"
          :onClickAdd="undefined"
          :onClickLike="undefined"
      />
  </div>
</template>