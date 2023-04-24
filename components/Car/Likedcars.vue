<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';
import { byLikes, byMake, byFilters } from '~/composables/useFilters';

const likesStore = useLikedCar();
const { cars } = useCars();

const filteredCars = ref(byLikes(cars, likesStore.allLikes));

watch(
  () => likesStore.allLikes,
  () => {
    filteredCars.value = byLikes(filteredCars.value, likesStore.allLikes);
  }
);

watch(
  () => likesStore.allFilters,
  () => {
    filteredCars.value = byMake(cars, likesStore.allFilters.make);
    filteredCars.value = byLikes(filteredCars.value, likesStore.allLikes);
    filteredCars.value = byFilters(
      filteredCars.value,
      likesStore.allFilters.price
    );
  }
);
</script>
<template>
  <div class="w-full">
    <p class="text-center" v-if="likesStore.totalLikes !== 0">
      Aktualnie przeglądasz
      <i>{{ likesStore.totalLikes }} polubione</i>
      oferty
    </p>
    <hr class="mb-4 mt-2 text-black" />
    <p class="text-center" v-if="filteredCars.length === 0">
      Nie masz polubionych ofert
    </p>
    <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
  </div>
</template>
