<script setup lang="ts">
import Card from "@/components/Card.vue";
import { useShopStore } from "@/stores/shop";
const shopStore = useShopStore();
</script>

<template>
  <div 
    v-if="shopStore.getCartCount !== 0" 
    class="flex flex-col gap-4"
  >
    <div class="flex flex-col flex-1 gap-4 mb-4">
      <Card
        v-for="item in shopStore.cartedProducts"
        :key="item.id"
        :id="item.id"
        type="cart"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :price="item.price"
        :isCarted="item.isCarted"
        :isLiked="item.isLiked"
      />
    </div>
    <div class="flex gap-2">
      <span> total: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> {{ shopStore.getTotalSum }} $ </b>
    </div>
    <div class="flex gap-2">
      <span> tax 5%: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> {{ Math.ceil(shopStore.getTotalSum * 0.05) }} $ </b>
    </div>
    <button
        class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300"
        :disabled="shopStore.getTotalSum === 0"
    > ordering will be available in future releases :) </button>
  </div>
  <div v-else class="flex justify-center items-center">
    <span class="text-2xl font-bold">empty...</span>
  </div>
</template>