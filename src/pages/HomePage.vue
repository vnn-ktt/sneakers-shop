<script setup lang="ts">
  import { onMounted, ref, watch, reactive, provide } from "vue";
  import CardList from "@/components/CardList.vue";
  import {
    getProducts
  } from "@/api/product";
  import type {
    IProduct
  } from "@/types/product";
  import type { IQueryParams } from "@/types/api";

  const items = ref<IProduct[]>([]);
  const filters = reactive<IQueryParams>({
    sortBy: 'title',
    title: '*'
  });

  const onSortBy = (evt: Event) => {
    if (!evt.target) return;
    filters.sortBy =
        `${(evt.target as HTMLSelectElement)?.value}` || '';
  };
  const onFindTitle = (evt: Event) => {
    if (!evt.target) return;
    filters.title =
        `*${(evt.target as HTMLSelectElement)?.value}*` || '';
  };
  const likeProduct = (item: IProduct) => {
    item.isLiked = !item.isLiked;
  };
  const cartProduct = (item: IProduct) => {
    item.isCarted = !item.isCarted;
  };

  provide("onLikeProduct", likeProduct);
  provide("onCartProduct", cartProduct);
  onMounted(async () => {
    items.value = await getProducts(filters);
  });
  watch(filters, async () => {
    items.value = await getProducts(filters)
  });
</script>
<template>
  <div class="p-10">
    <div class="flex flex-col items-center gap-4 mb-10">
        <div class="relative">
          <img class="absolute left-4 top-3" src="/search.svg" alt="Search"/>
          <input
            name="onFindTitle"
            @input="onFindTitle"
            class="border rounded-md w-50 py-2 pl-10 pr-4 outline-none border-gray-100 focus:border-black"
            placeholder="search..."
            type="text"
          />
        </div>
        <select
            name="select"
            id="select"
            class="w-50 py-2 pl-4 border rounded-md outline-none border-gray-100 focus:border-black"
            @change="onSortBy"
        >
          <option value="name">by title</option>
          <option value="price">by price (cheaper)</option>
          <option value="-price">by price (expensive)</option>
        </select>
    </div>
    <CardList :items="items" />
  </div>
</template>