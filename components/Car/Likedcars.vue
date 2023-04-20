<script setup>
import { useLikedCar } from "@/store/store";
import { storeToRefs } from "pinia";
import { watch } from "../../.nuxt/imports";
const likesStore = useLikedCar();
const { cars } = useCars();

function filterCarsByLiked(cars, likes) {
  const likedCarIds = likes.map((car) => car.id);
  return cars.filter((car) => likedCarIds.includes(car.id));
}

const filteredCars = ref(filterCarsByLiked(cars, likesStore.allLikes));

watch(
  () => likesStore.allLikes,
  () => {
    filteredCars.value = filterCarsByLiked(cars, likesStore.allLikes);
  }
);
</script>
<template>
  <div class="w-full w-[602px]">
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
