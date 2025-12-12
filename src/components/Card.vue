<script setup lang="ts">
  defineProps({
    imageUrl: String,
    title: String,
    price: Number,
    isLiked: Boolean,
    isCarted: Boolean,
    onClickLike: Function,
    onClickAdd: Function
  });
</script>

<template>
  <div class="relative border border-slate-100 rounded-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
    <img
        @click="onClickLike"
        :src="isLiked ? './src/public/like-2.svg' : './src/public/like-1.svg' "
        alt="Like"
    />
    <img
        class="mt-2 mb-2"
        :src="imageUrl"
        alt="Sneaker"
    />
    <p
        class="mb-2">{{ title }}
    </p>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-slate-400">
          Цена
        </span>
        <span>{{ price }}</span>
      </div>
      <img
          @click="onClickAdd"
          :src="isCarted ? './src/public/plus.svg' : './src/public/checked.svg' "
          alt="Plus"
      />
    </div>
  </div>
</template>

<style scoped>

</style>