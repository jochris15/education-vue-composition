<script setup>
import data from "../assets/data.json";
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";

const products = ref(data);

// Option API example
// export default {
//   components : {
//     ProductCard
//   },
//   data() {
//     return {
//       products: data,
//     }
//   }
// }
</script>

<template>
  <!-- product list -->
  <div id="PAGE-HOME" class="min-h-screen flex items-center justify-center">
    <main class="my-5 bg-white grid grid-cols-4 gap-5">
      <div
        class="h-full flex flex-col justify-center items-center bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </main>
  </div>
</template>
