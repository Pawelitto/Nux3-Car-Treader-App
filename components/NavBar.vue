<script setup>
import heartOutline from '@/assets/heartOutline.png';
import { Icon } from '@iconify/vue';
import { useLikedCar } from '@/store/store';

const likesStore = useLikedCar();
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
    <NuxtLink class="text-3xl font-mono" to="/">carTreader</NuxtLink>

    <div class="flex relative text-center">
      <NuxtLink
        class="serce absolute top-2/4 left-2/4 text-1xl font-mono"
        to="/car/fav">
        <Transition mode="out-in">
          <span class="text-red-600 font-mono" :key="likesStore.totalLikes">
            {{ likesStore.totalLikes }}
          </span>
        </Transition>
      </NuxtLink>
      <Icon
        class="cursor-pointer"
        icon="mdi:cards-heart-outline"
        width="45"
        height="45"
        @click="navigateTo('/car/fav')" />
    </div>
    <Icon
      class="absolute right-20 cursor-pointer"
      icon="mdi:user-outline"
      width="45"
      height="45"
      @click="navigateTo('/login')" />
  </header>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
