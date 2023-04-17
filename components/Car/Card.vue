<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

const props = defineProps({
  car: Object,
});

const emit = defineEmits(["favor"]);
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer bg-[#f00] h-[200px]"
  >
    <img
      class="absolute w-7 right-5 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt="serduszko"
    />
    <div class="flex h-full">
      <NuxtImg
        :src="car.url"
        alt=""
        class="w-[300px] h-full"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
