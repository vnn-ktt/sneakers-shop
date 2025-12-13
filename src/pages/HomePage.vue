<script setup lang="ts">
  import CardList from "@/components/CardList.vue";
  import Cart from "@/components/Cart.vue";
</script>

<template>
  <div class="p-10">
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
      <div class="flex gap-4">
        <select name="select" id="select" class="h-max py-2 px-3 border rounded-md outline-none">
          <option value="">По названию</option>
          <option value="">По цене (дешевые)</option>
          <option value="">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <img class="absolute left-4 top-3" src="../public/search.svg" alt="Search"/>
          <input class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400" placeholder="Поиск..." type="text" />
        </div>
      </div>
    </div>
    <CardList/>
    <!--<Cart />-->
  </div>
</template>

<style scoped>

</style>