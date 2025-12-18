<script setup lang="ts">
import IconArrow from "@/components/icons/IconArrow.vue";
import Card from "@/components/Card.vue";
import type { IAsideComponentProps } from "@/types/asidePanel";
import { ref } from "vue";

const emit = defineEmits(
    ["close"]
);

const totalSum = ref<number>(0);

defineProps<IAsideComponentProps>();

</script>
<template>
  <aside>
    <div
        class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
        @click="() => emit('close')"
    ></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <div v-if="content === 'cart'">
        <div class="flex items-center mb-8 gap-4">
          <IconArrow
              @click="() => emit('close')"
              class="opacity-30 cursor-pointer rotate-180 hover:opacity-90 transition hover:-translate-x-1"
          ></IconArrow>
          <h2 class="text-2xl font-bold">
            your cart
          </h2>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col flex-1 gap-4 mb-4">
            <Card
                
                type="cart"
                title="Nike Blazer Mid Suede FDSLj lkfdsjfosdj fdskl fjds iodfjaioijsdfjiosdj"
                imageUrl="sneakers/sneakers-1.jpg"
                :price="5000"
                :isCarted="false"
                :isLiked="false"
                :onClickDelete="undefined"
            />
          </div>
          <div class="flex gap-2">
            <span> tax: </span>
            <div class="flex-1 border-b border-dashed"></div>
            <b> {{ totalSum * 0.05 }} $ </b>
          </div>
          <div class="flex gap-2">
            <span> total: </span>
            <div class="flex-1 border-b border-dashed"></div>
            <b> {{ totalSum }} $ </b>
          </div>
          <button
              class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:"
              disabled
          > create an order </button>
        </div>
      </div>
      <div v-else-if="content === 'liked'">
      </div>
    </div>
  </aside>
</template>