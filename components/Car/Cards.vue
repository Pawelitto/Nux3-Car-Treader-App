<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';
import { byFilters, byMake } from '~/composables/useFilters';

const likesStore = useLikedCar();
const { cars } = useCars();

const filteredCars = ref(
  likesStore?.allFilters?.price
    ? byFilters(cars, likesStore.allFilters.price)
    : cars
);

watch(
  () => likesStore.allFilters,
  () => {
    filteredCars.value = byFilters(
      filteredCars.value,
      likesStore.allFilters.price
    );
    filteredCars.value = byMake(cars, likesStore.allFilters.make);
  }
);
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
  </div>
</template>
