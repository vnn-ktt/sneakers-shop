<script setup lang="ts">
  defineProps<{
    type: string,
    imageUrl: string,
    title: string,
    price: number,
    isLiked: boolean,
    isCarted: boolean,
    onClickLike?: (e: MouseEvent) => void,
    onClickAdd?: (e: MouseEvent) => void,
    onClickDelete?: (e: MouseEvent) => void,
  }>();
</script>

<template>
  <div
      v-if="type === 'catalog'"
      class="relative border border-slate-100 rounded-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
  >
    <div @click="onClickLike">
      <img
          :src="isLiked ? './src/public/like-2.svg' : './src/public/like-1.svg' "
          alt="Like"
      />
    </div>
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
      <div @click="onClickAdd">
        <img
            :src="isCarted ? './src/public/plus.svg' : './src/public/checked.svg' "
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
        <div @click="onClickDelete">
          <img
              src="../public/close.svg"
              alt="Close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>