<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';
import { watch } from '../../.nuxt/imports';

const likesStore = useLikedCar();
const { cars } = useCars();

function filterCarsByPrice(cars, filter) {
  if (filter === 'lowest') {
    return cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (filter === 'highest') {
    return cars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === 'set') {
    console.log('set');
  }
}

const filteredCars = ref(filterCarsByPrice(cars, likesStore.allFilters.price));

watch(
  () => likesStore.allFilters,
  () => {
    filteredCars.value = filterCarsByPrice(
      filteredCars.value,
      likesStore.allFilters.price
    );
  }
);
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
  </div>
</template>
