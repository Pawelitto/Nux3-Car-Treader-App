<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';

const likesStore = useLikedCar();
const { cars } = useCars();

const filters = ref(likesStore.allFilters);

if (filters.value.price === 'lowest') {
  cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
} else if (filters.value.price === 'highest') {
  cars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
}
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>
