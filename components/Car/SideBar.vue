<script setup>
import { useLikedCar } from '@/store/store';
import { storeToRefs } from 'pinia';

const likesStore = useLikedCar();

const { cars } = useCars();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const route = useRoute();
const filterObj = ref(likesStore.allFilters);
const city = ref(route.params.city);
const make = ref(filterObj.value.make);
const price = ref(filterObj.value.price);

const makes = cars.map((item) => item.make);

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Ivalid city format',
    });
  }
  filterObj.value = {
    location: city.value,
    make: make.value,
    price: price.value,
  };
  likesStore.changeFilter(filterObj.value);
  updateModal('location');
  navigateTo(`/city/${city.value}/car/${make.value}`);
};

const onChangeMake = () => {
  filterObj.value = {
    location: city.value,
    make: make.value,
    price: price.value,
  };
  likesStore.changeFilter(filterObj.value);
  updateModal('make');
};

const onChangePrice = () => {
  filterObj.value = {
    location: city.value,
    make: make.value,
    price: price.value,
  };
  likesStore.changeFilter(filterObj.value);
  updateModal('price');
};
</script>
<template>
  <div class="shadow border w-64 mr-10 z-30 h-[195px]">
    <!-- Location Modal Start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow rounded left-56 p-5 top-1 -m-1 bg-white z-50">
        <input
          type="text"
          class="border p-1 rounded text-black"
          :placeholder="`e.g. ${route.params.city}`"
          v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation">
          Apply
        </button>
      </div>
    </div>
    <!-- Location Modal END -->
    <!-- Make Modal Start-->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
        {{ make }}
      </h3>
      <div
        v-if="modal.make"
        class="absolute text-center border rounded shadow left-56 p-5 top-1 -m-1 bg-white z-50 w-[227px] h-[130px]">
        <select
          class="text-center border rounded p-1 mb-4 text-black"
          v-model="make">
          <option value="all">all</option>
          <option v-for="make in makes">{{ make }}</option>
        </select>
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeMake()">
          Apply
        </button>
      </div>
    </div>
    <!-- Make Modal END -->
    <!-- Price Modal Start-->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize mb-2" @click="updateModal('price')">
        {{ price }}
      </h3>
      <div
        v-if="modal.price"
        class="absolute text-center border rounded shadow left-56 p-5 top-1 -m-1 bg-white z-50 w-[227px] h-[125px]">
        <select
          class="text-center border rounded text-black p-1 mb-4"
          v-model="price">
          <option value="set">set</option>
          <option value="lowest">Lowest price</option>
          <option value="highest">Highest price</option>
        </select>
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangePrice()">
          Apply
        </button>
      </div>
    </div>
    <!-- Price Modal END-->
    <!-- Debug info about active filters-->
    {{ filterObj }}
  </div>
</template>
