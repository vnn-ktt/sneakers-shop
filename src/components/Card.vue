<script setup lang="ts">
  import type {
    IProduct,
    TProductCardType
  } from "@/types/product";
  interface IProductCardProps extends IProduct {
    type: TProductCardType;
    onClickLike?: (e: MouseEvent) => void,
    onClickAdd?: (e: MouseEvent) => void
  }
  defineProps<IProductCardProps>();
</script>

<template>
  <div
      v-if="type === 'catalog'"
      class="relative border flex justify-between flex-col border-slate-100 rounded-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <div @click="onClickLike">
      <img
          :src="isLiked ? 'like-2.svg' : 'like-1.svg' "
          alt="Like"
      />
    </div>
    <img
        class="w-30 h-30 mx-auto mt-2 mb-2"
        :src="imageUrl"
        alt="Sneaker"
    />
    <p
        class="mb-2">{{ title }}
    </p>
    <div class="flex justify-between items-end">
      <div class="flex flex-col">
        <span class="text-slate-400">
          Price ($)
        </span>
        <span>{{ price }}</span>
      </div>
      <div @click="onClickAdd">
        <img
            :src="isCarted ? 'checked.svg' : 'plus.svg' "
            alt="Plus"
        />
      </div>
    </div>
  </div>
  <div
    v-else-if="type === 'cart'"
    class="flex items-center gap-4 border border-slate-200 p-4 rounded-xl"
  >
    <img class="w-16 h-16" :src="imageUrl" alt="Sneaker"/>
    <div class="flex w-full flex-col">
      <p> {{title}} </p>
      <div class="flex justify-between mt-2">
        <span>{{ price }}</span>
      </div>
    </div>
  </div>
    <div
    v-else-if="type === 'liked'"
    class="flex items-center gap-4 border border-slate-200 p-4 rounded-xl"
  >
    <img class="w-16 h-16" :src="imageUrl" alt="Sneaker"/>
    <div class="flex w-full flex-col">
      <p> {{title}} </p>
      <div class="flex justify-between mt-2">
        <span>{{ price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>