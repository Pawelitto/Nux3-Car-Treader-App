<script setup>
import { totalPages, getPageItems } from '~/composables/usePagination';

const { data: carsApi } = await useFetch('/api/cars');

const page = ref({
  rows: Object.entries(carsApi.value.cars).length,
  pagesTotal: 0,
});

const pagesTotal = ref(
  totalPages(Object.entries(carsApi.value.cars).length, 10)
);

const first = getPageItems(Object.entries(carsApi.value.cars), 1, 10);

page.value.pagesTotal = pagesTotal.value;

const info = ref({
  i: pagesTotal.value,
});
</script>
<template>
  <div class="w-full">
    <CarApicard v-for="car in first" :key="car.id" :car="car" />
    <CarPagination :page="page" :info="info" :key="page.rows" />
  </div>
</template>
