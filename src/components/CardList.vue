<script setup lang="ts">
  import Card from "@/components/Card.vue";

  interface IItem {
    id: number,
    title: string,
    price: number,
    imageUrl: string
  }

  defineProps<{
    items: IItem[]
  }>();

  const onClickLike = () => {
    alert("like clicked");
  };
  const onClickAdd = () => {
    alert("add clicked");
  };

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
          :isCarted="true"
          :isLiked="false"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
  </div>
</template>

<style scoped>

</style>