<script setup lang="ts">
  import { onMounted, ref, watch, reactive, provide } from "vue";
  import CardList from "@/components/CardList.vue";
  import Cart from "@/components/Cart.vue";
  import {
    getProducts
  } from "@/api/product";
  import {
    IProduct
  } from "@/types/product";
  import { IQueryParams } from "@/types/api";

  const items = ref<IProduct[]>([]);
  const filters = reactive<IQueryParams>({
    sortBy: 'title',
    title: '*'
  });
  const isCartOpen = ref(false);
  const onSortBy = (evt: Event) => {
    if (!evt.target) return;
    filters.sortBy =
        `*${(evt.target as HTMLSelectElement)?.value}*` || '';
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
  const openCart = () => {
    isCartOpen.value = true;
  };

  provide("openCart", openCart);
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
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
      <div class="flex gap-4">
        <select
            name="select"
            id="select"
            class="h-max py-2 px-3 border rounded-md outline-none"
            @change="onSortBy"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <img class="absolute left-4 top-3" src="public/search.svg" alt="Search"/>
          <input 
            @input="onFindTitle"
            class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400" 
            placeholder="Поиск..." 
            type="text"
          />
        </div>
      </div>
    </div>
    <CardList :items="items" />
    <Cart
        v-if="isCartOpen"
        ref="cartRef"
        @close="isCartOpen = false"
    />
  </div>
</template>