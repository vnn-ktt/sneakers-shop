<script setup lang="ts">
import IconArrow from "@/components/icons/IconArrow.vue";
import type { IAsideComponentProps } from "@/types/asidePanel";
import { ref } from "vue";
import Cart from "./Cart.vue";
import Liked from "./Liked.vue";

const emit = defineEmits(
    ["close"]
);

defineProps<IAsideComponentProps>();
</script>
<template>
  <aside>
    <div
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
      @click="() => emit('close')"
    ></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 overflow-y-scroll">
      <div class="flex items-center mb-8 gap-4">
        <IconArrow
            @click="() => emit('close')"
            class="opacity-30 cursor-pointer rotate-180 hover:opacity-90 transition hover:-translate-x-1"
        ></IconArrow>
        <h2 class="text-2xl font-bold">
          {{ title }} 
        </h2>
      </div>
      <div v-if="content === 'cart'">
        <Cart />
      </div>
      <div v-else-if="content === 'liked'">
        <Liked />
      </div>
    </div>
  </aside>
</template>