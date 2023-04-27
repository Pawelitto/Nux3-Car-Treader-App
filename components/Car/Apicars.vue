<script setup>
import {
  totalPages,
  getPageItems,
  getDistance,
} from '~/composables/usePagination';
import json from '~/data/apiCars.json';

// const { data: carsApi } = await useFetch('/api/cars');

const carsApi = ref(json);

const itemsPerPage = ref(10);
const activePage = ref(1);

const pagesTotal = ref(
  totalPages(Object.entries(carsApi.value).length, itemsPerPage.value)
);

const page = ref({
  rows: Object.entries(carsApi.value).length,
  pagesTotal: pagesTotal.value,
});

const distance = ref({
  from: 1,
  to: 10,
});

const itemsActive = ref(
  getPageItems(
    Object.entries(carsApi.value),
    activePage.value,
    itemsPerPage.value
  )
);

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
