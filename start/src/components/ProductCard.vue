<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="flex flex-1">
    <img
      :src="product.imgUrl"
      class="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
    />
  </div>
  <div class="flex flex-col divide-y divide-black">
    <b class="mt-5">{{ product.name }}</b>
    <span class="text-green-800">{{ rupiah }}</span>
    <p class="mt-5">
      {{
        product.description.length > 100
          ? product.description.substring(0, 100) + "..."
          : product.description
      }}
    </p>
  </div>
</template>
