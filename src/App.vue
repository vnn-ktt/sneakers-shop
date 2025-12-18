<script setup lang="ts">
  import { onMounted } from "vue";
  import { useShopStore } from "./stores/shop";
  import MainLayout from "./layouts/MainLayout.vue";

  const shopStore = useShopStore();

  onMounted(async () => {
    await shopStore.setupProducts()
  });
</script>

<template>
  <MainLayout />
</template>
