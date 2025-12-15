<script setup lang="ts">
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col flex-1 gap-4 mb-4">
      <Card
          type="cart"
          title="Nike Blazer Mid Suede FDSLj lkfdsjfosdj fdskl fjds iodfjaioijsdfjiosdj"
          imageUrl="public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="false"
      />
      <Card
          type="cart"
          title="Nike Blazer Mid Suede FDSLj lkfdsjfosdj fdskl fjds iodfjaioijsdfjiosdj"
          imageUrl="public/sneakers/sneakers-1.jpg"
          :price="5000"
          :isCarted="false"
          :isLiked="false"
      />
    </div>
    <div class="flex gap-2">
      <span> Итого: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> 12900 руб </b>
    </div>
    <div class="flex gap-2">
      <span> Налог: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> 900 руб </b>
    </div>
    <button
        class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:"
        disabled
    > Оформить заказ </button>
  </div>
</template>