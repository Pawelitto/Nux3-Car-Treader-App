<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
import { useFiltersStore } from "../../store/filters";
import { storeToRefs } from "pinia";

const props = defineProps({
  car: Object,
});

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { changeIsLike } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

const handleHeartClick = (id) => {
  console.log(id);
};
</script>
<template>
  <div
    class="shadow border relative w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      class="absolute w-7 right-5 top-2 z-20"
      alt="serduszko"
      @click="handleHeartClick(car.id)"
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
            <!--            {{ car.description }}-->
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>
