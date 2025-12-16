<script setup lang="ts">
  import {RouterView} from "vue-router";
  import { ref } from "vue";
  import AsidePanel from "@/components/AsidePanel.vue";

  const isCartOpen = ref<boolean>(false);
  const isLikedOpen = ref<boolean>(false);

  const toggleCartHeader = () => {
    isCartOpen.value = !isCartOpen.value;
  }
  const toggleLikedHeader = () => {
    isLikedOpen.value = !isLikedOpen.value;
  }
</script>

<template>
  <div class="header w-4/5 m-auto mt-14 bg-white rounded-xl shadow-xl">
    <header class="flex justify-between border-b border-slate-300 p-8">
      <div class="flex items-center gap-4">
        <img class="w-10" src="public/logo.png" alt="Logo">
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul class="flex items-center gap-10 text-gray-500 font-bold">
        <li>
          <button
              class="flex items-center gap-3 hover:text-black cursor-pointer"
              @click="toggleCartHeader"
          >
            <img src="public/cart.svg" alt="Cart">
            1200 rub
          </button>
          <AsidePanel
              v-if="isCartOpen"
              content="cart"
              @close="isCartOpen = false"
          />
        </li>
        <li class="flex items-center gap-3 hover:text-black cursor-pointer">
          <button
              class="flex items-center gap-3 hover:text-black cursor-pointer"
              @click="toggleLikedHeader"
          >
          <img src="public/heart.svg" alt="Heart">
            Закладки
          </button>
          <AsidePanel
              v-if="isLikedOpen"
              content="liked"
              @close="isLikedOpen = false"
          />
        </li>
      </ul>
    </header>
    <main class="h-auto">
      <RouterView />
    </main>
    <footer class="footer flex justify-center align-center border-t border-slate-300 bg-white p-8">This is footer</footer>
  </div>
</template>

<style scoped>

</style>