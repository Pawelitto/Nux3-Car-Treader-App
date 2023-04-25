<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';

const likesStore = useLikedCar();

const props = defineProps({ car: Object });
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <div class="flex h-full" @click="navigateTo(`/car/${car.car}-${car.id}`)">
      <div class="p-4 flex flex-col w-[600px]">
        <div>
          <h2 class="text-2xl text-blue-700">{{ car.car }}</h2>
          <p class="text-gray-700">
            {{ car.car_model }}
          </p>
        </div>
        <h2 class="mt-auto text-xl">{{ car.price }}</h2>
      </div>
    </div>
  </div>
</template>
