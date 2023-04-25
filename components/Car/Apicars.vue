<script setup>
const { error, data: carsApi } = await useFetch(useRuntimeConfig().api_uri, {
  token: useRuntimeConfig().api_secret_token,
});
// console.log(error.value.data);
// console.log(error.value.name, error.value.message);
</script>
<template>
  <div class="w-full">
    <CarApicard v-for="car in carsApi.cars" :key="car.id" :car="car" />
  </div>
</template>
