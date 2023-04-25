<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';

const likesStore = useLikedCar();

const props = defineProps({ car: Object });
const handleCardClick = () => {
  let obj = {
    id: props.car.id,
  };
  likesStore.addCarStatus(obj);
};
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <div
      class="absolute right-5 top-2 z-20"
      :class="
        likesStore.getSingleLike(car.id)
          ? 'heart-like-button liked'
          : 'heart-like-button'
      "
      @click="handleCardClick()"></div>
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg :src="car.url" alt="" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col w-[600px]">
        <div>
          <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h2 class="mt-auto text-xl">${{ car.price }}</h2>
      </div>
    </div>
  </div>
</template>
