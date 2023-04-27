<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';

const likesStore = useLikedCar();

const props = defineProps({ car: Object });
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <div
      class="flex h-full"
      @click="navigateTo(`/car/${car[1].make}-${car[1].id}`)">
      <div class="p-4 flex flex-col w-[600px]">
        <div>
          <h2 class="text-2xl text-blue-700">{{ car[1].model }}</h2>
          <p class="text-gray-700">
            {{ car[1].make }}
          </p>
          <!-- <h4>{{ car[1].id }}</h4> -->
        </div>
        <h2 class="mt-auto text-xl">${{ car[1].price }}</h2>
      </div>
    </div>
  </div>
</template>
