<script setup>
const { data: carsApi } = await useFetch('/api/cars');
</script>
<template>
  <div class="w-full">
    <CarApicard v-for="car in carsApi.cars" :key="car.id" :car="car" />
  </div>
</template>
