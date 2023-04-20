<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

import { useLikedCar } from "@/store/store";
import { storeToRefs } from "pinia";

const likesStore = useLikedCar();

const props = defineProps({
  car: Object,
});

const handleCardClick = () => {
  let obj = {
    id: props.car.id,
  };
  likesStore.addCarStatus(obj);
};
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <!--    <div class="absolute bg-red-500">{{ likesStore.totalLikes }}</div>-->
    <img
      :src="likesStore.getSingleLike(car.id) ? heartFilled : heartOutline"
      class="absolute w-7 right-5 top-2 z-20"
      alt="serduszko"
      @click="handleCardClick()"
    />
    <div class="flex h-full">
      <NuxtImg
        :src="car.url"
        alt=""
        class="w-[300px] h-full"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      />
      <div class="p-4 flex flex-col w-[600px]">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
            <!--            {{ likesStore.allLikes }}-->
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
