<script setup lang="ts">
import IconArrow from "@/components/icons/IconArrow.vue";
import Card from "@/components/Card.vue";
const onClickDelete = () => {
  alert("delete clicked");
};
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <div class="flex items-center mb-8 gap-4">
      <IconArrow
        class="opacity-30 cursor-pointer rotate-180 hover:opacity-90 transition hover:-translate-x-1"
      ></IconArrow>
      <h2 class="text-2xl font-bold">
        Корзина
      </h2>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col flex-1 gap-4 mb-4">
        <Card
            type="cart"
            title="Nike Blazer Mid Suede FDSLj lkfdsjfosdj fdskl fjds iodfjaioijsdfjiosdj"
            imageUrl="./src/public/sneakers/sneakers-1.jpg"
            :price="5000"
            :isCarted="false"
            :isLiked="false"
            :onClickDelete="onClickDelete"
        />
        <Card
            type="cart"
            title="Nike Blazer Mid Suede FDSLj lkfdsjfosdj fdskl fjds iodfjaioijsdfjiosdj"
            imageUrl="./src/public/sneakers/sneakers-1.jpg"
            :price="5000"
            :isCarted="false"
            :isLiked="false"
            :onClickDelete="onClickDelete"
        />
      </div>
      <div class="flex gap-2">
        <span> Итого: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b> 12900 руб </b>
      </div>
      <div class="flex gap-2">
        <span> Налог ебаный: </span>
        <div class="flex-1 border-b border-dashed"></div>
        <b> 900 руб </b>
      </div>
      <button
        class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:"
        disabled
      > Оформить заказ </button>
    </div>
  </div>
</template>

<style scoped>

</style>