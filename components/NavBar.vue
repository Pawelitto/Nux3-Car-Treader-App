<script setup>
import { useLikedCar } from '@/store/store';

const likesStore = useLikedCar();
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
    <NuxtLink class="text-3xl font-mono" to="/">cartreader</NuxtLink>
    <NuxtLink class="text-1xl font-mono" to="/car/fav"
      >Favourites(<span class="text-red-600">{{ likesStore.totalLikes }}</span
      >)</NuxtLink
    >
  </header>
</template>
