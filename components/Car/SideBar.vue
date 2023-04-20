<script setup>
const { cars } = useCars();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const city = ref();
const make = ref("select");
const priceFrom = ref();
const priceTo = ref();
const route = useRoute();

const makes = cars.map((item) => item.make);

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Ivalid city format",
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
};
</script>
<template>
  <div class="shadow border w-64 mr-10 z-30 h-[220px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow rounded left-56 p-5 top-1 -m-1 bg-white z-50"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>
    <!--    227/140-->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
        {{ make }}
      </h3>
      <div
        v-if="modal.make"
        class="absolute text-center border rounded shadow left-56 p-5 top-1 -m-1 bg-white z-50 w-[227px] h-[130px]"
      >
        <!--        <input type="text" class="border p-1 rounded" v-model="city" />-->
        <select class="text-center border rounded p-1 mb-4" v-model="make">
          <option value="all">all</option>
          <option v-for="make in makes">{{ make }}</option>
        </select>
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="updateModal('make')"
        >
          Apply
        </button>
      </div>
    </div>

    <div
      class="p-5 flex flex-wrap justify-between relative cursor-pointer border-b"
    >
      <div class="flex flex-wrap w-full">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize mb-2">set</h3>
      </div>
      <div class="flex flex-wrap">
        <p>{{ priceFrom }}</p>
        -
        <p>{{ priceTo }}</p>
      </div>
    </div>
  </div>
</template>
