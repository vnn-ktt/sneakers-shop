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
  <div class="p-8">
    <p class="text-3xl font-bold mb-10">Все кроссовки</p>
    <div class="grid grid-cols-3 gap-5">
      <Card
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="true"
          :isLiked="true"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
      <Card
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="false"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
      <Card
          title="Мужские кроссовки Nike Blazer Mid Suede"
          imageUrl="./src/public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="true"
          :onClickAdd="onClickAdd"
          :onClickLike="onClickLike"
      />
    </div>
  </div>
</template>

<style scoped>

</style>