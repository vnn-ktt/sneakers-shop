<script setup lang="ts">
  import { RouterView } from "vue-router";
  import { ref } from "vue";
  import AsidePanel from "@/components/AsidePanel.vue";

  const totalSum = ref<number>(0);
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
  <div class="header w-4/5 m-auto mt-14 bg-white rounded-2xl shadow-2xl">
    <header class="flex justify-between border-b border-slate-300 p-8">
      <div class="flex items-center gap-4">
        <img class="w-10" src="/logo.png" alt="Logo">
        <div>
          <h2 class="text-xl font-bold uppercase">VUE-SNEAKERS-DEMO</h2>
          <p class="text-slate-400">powered by Vue 3.0, Pinia, Axios</p>
        </div>
      </div>

      <ul class="flex items-center gap-5 text-gray-500 font-bold">
        <li>
          <button
              class="flex items-center gap-2 hover:text-black cursor-pointer"
              @click="toggleCartHeader"
          >
            <img src="/cart.svg" alt="Cart">
            {{ totalSum }} rub
          </button>
          <AsidePanel
              v-if="isCartOpen"
              content="cart"
              @close="isCartOpen = false"
          />
        </li>
        <li>
          <button
              class="flex items-center gap-2 hover:text-black cursor-pointer"
              @click="toggleLikedHeader"
          >
          <img src="/heart.svg" alt="Heart">
            what did I like ?
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
    <footer class="footer flex justify-center align-center border-t border-slate-300 bg-white p-8">
      <div class="flex flex-col justify-center items-center">
        <span> version 0.0.1 </span>
        <span> mocked data: mokky.dev/projects/db8e4288b5ac21f4 </span>
      </div>
    </footer>
  </div>
</template>