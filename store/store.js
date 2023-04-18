// store/filters.ts
import { defineStore } from "pinia";

export const useFiltersStore = defineStore({
  id: "filterStore",
  state: () => ({
    filtersList: [],
  }),
  actions: {
    addValueToFilterList(obj) {
      this.filtersList.push(obj);
    },
    changeIsLike(id) {
      console.log(id);
    },
  },
  getters: {
    filtersList: (state) => state.filtersList,
  },
});
