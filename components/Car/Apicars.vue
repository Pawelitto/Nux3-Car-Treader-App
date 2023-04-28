<script setup>
import {
  totalPages,
  getPageItems,
  getDistance,
} from '~/composables/usePagination';
import json from '~/data/apiCars.json';

const { data: carsApi, error, pending } = await useFetch('/api/cars');

// const carsApi = ref(json);

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

watch(
  () => activePage.value,
  () => {
    // console.log('Rodzic aktywna: ' + activePage.value);

    itemsActive.value = getPageItems(
      Object.entries(carsApi.value),
      activePage.value,
      itemsPerPage.value
    );

    const obj = getDistance(activePage.value, itemsPerPage.value);
    distance.value.from = obj.f;
    distance.value.to = obj.t;
  }
);

const nazwaFunkcji = (pageNumber) => {
  // console.log('test', pageNumber);
  activePage.value = pageNumber;
};
const wyswietlanieTestowe = (activeP, pageRows, pagesT, distance, itemsPP) => {
  console.log('=====');
  getDistance(activeP, itemsPP);
  console.log('Aktywna strona: ' + activeP);
  console.log('Ilosc items wszystkich: ' + pageRows);
  console.log('Ilosc stron: ' + pagesT);
  console.log('Pokazywanie wynikow od ' + distance.from + ' do ' + distance.to);
  console.log('=====');
};

// wyswietlanieTestowe(
//   activePage.value,
//   page.value.rows,
//   pagesTotal.value,
//   distance.value,
//   itemsPerPage.value
// );
</script>
<template>
  <div class="w-full">
    <CarSpinner v-if="pending" />
    <p v-if="error">{{ error }}</p>
    <CarApicard
      v-for="car in itemsActive"
      :key="car.id"
      :car="car"
      v-if="!error" />
    <CarPagination
      :page="page"
      :info="info"
      :totalPages="pagesTotal"
      :key="page.rows"
      :currPage="activePage"
      :distance="distance"
      v-if="!error"
      @nazwaEmita="(pageN) => nazwaFunkcji(pageN)" />
  </div>
</template>
