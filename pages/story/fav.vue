<script setup>
import { useFiltersStore } from "~/store/filters";
import { storeToRefs } from "pinia";
const { cars } = useCars();

const inputVal = ref("");
const checked = ref(false);

const obj = {
  id: inputVal,
  isLike: checked,
};

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);
</script>

<template>
  <div>
    <input class="bg-blue-400" v-model="inputVal" />
    <button @click="addValueToFilterList(obj)">+</button>
    <input
      type="checkbox"
      :checked="checked"
      @input="(event) => $emit('update:checked', event.target.checked)"
    />

    {{ filtersList }}
  </div>
</template>
