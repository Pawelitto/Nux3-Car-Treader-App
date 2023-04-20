<script setup>
import { useLikedCar } from "@/store/store";
const likesStore = useLikedCar();
const { cars } = useCars();

function filterCarsByLiked(cars, likes) {
  const likedCarIds = likes.map((car) => car.id);
  return cars.filter((car) => likedCarIds.includes(car.id));
}

const filteredCars = filterCarsByLiked(cars, likesStore.allLikes);
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
  </div>
</template>
