<script setup lang="ts">
  import {RouterView} from "vue-router";
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
        <li class="flex items-center gap-3 hover:text-black cursor-pointer">
          <img src="public/cart.svg" alt="Cart">
          1200 rub
        </li>
        <li class="flex items-center gap-3 hover:text-black cursor-pointer">
          <img src="public/heart.svg" alt="Heart">
          Закладки
        </li>
        <li class="flex items-center gap-3 hover:text-black cursor-pointer">
          <img src="public/profile.svg" alt="Profile">
          Профиль
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