<script setup lang="ts">
  import Card from "@/components/Card.vue";
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
          type="catalog"
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="true"
          :isLiked="true"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
      <Card
          type="catalog"
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="false"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
      <Card
          type="catalog"
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="true"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
  </div>
</template>

<style scoped>

</style>