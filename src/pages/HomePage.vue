<script setup lang="ts">
  import CardList from "@/components/CardList.vue";
  import Cart from "@/components/Cart.vue";
  import axios from "axios";
  import { onMounted, ref, watch, reactive } from "vue";

  const items = ref([]);
  const filters = reactive({
    sortBy: 'title',
    searchQuery: ''
  });

  const onSortState = (evt) => {
    filters.sortBy = evt.target.value;
  };

  const onFindQueryChange = (evt) => {
    filters.searchQuery = evt.target.value;
  };

  const fetchItems = async () => {
    try {
      const params = {
        sortBy: filters.sortBy,
      }

      if(filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`
      }

      const { data } = await axios.get(
        `https://604781a0efa572c1.mokky.dev/items`,
        { params }
      );
      items.value = data.slice(0, 12);
    } catch (e) {
      console.error(e);
    }
  };

  onMounted(fetchItems);
  watch(filters, fetchItems);
</script>

<template>
  <div class="p-10">
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
      <div class="flex gap-4">
        <select name="select" id="select" class="h-max py-2 px-3 border rounded-md outline-none" @change="onSortState">
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <img class="absolute left-4 top-3" src="public/search.svg" alt="Search"/>
          <input 
            @input="onFindQueryChange"
            class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400" 
            placeholder="Поиск..." 
            type="text"
          />
        </div>
      </div>
    </div>
    <CardList :items="items" />
    <!--<Cart />-->
  </div>
</template>