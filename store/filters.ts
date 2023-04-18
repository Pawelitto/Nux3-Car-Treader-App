import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filterStore", () => {
  const filtersList = ref([
    { id: 1, isLiked: true },
    { id: 2, isLiked: false },
    { id: 3, isLiked: false },
    { id: 4, isLiked: true },
    { id: 5, isLiked: true },
    { id: 6, isLiked: false },
  ]);

  function addValueToFilterList(value: string) {
    filtersList.value.push(value);
  }

  return { addValueToFilterList, filtersList };
});
