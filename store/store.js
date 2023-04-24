import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useLikedCar = defineStore('isLikedCar', {
  state: () => {
    return {
      likes: useLocalStorage('likes', []),
      filters: useLocalStorage('filters', {
        location: '',
        make: 'All',
        price: 'set',
      }),
    };
  },
  actions: {
    // likes actions
    addCarStatus(obj) {
      const wyniki = this.likes.filter((item) => item.id === obj.id);
      if (wyniki.length === 0) {
        this.likes.push(obj);
      } else {
        this.deleteCarStatus(obj.id);
      }
    },
    deleteCarStatus(id) {
      this.likes = this.likes.filter((like) => {
        return like.id !== id;
      });
    },
    getSingleLike(id) {
      return this.likes.find((like) => like.id === id);
    },

    // filters actions
    changeFilter(obj) {
      this.filters = obj;
    },
  },

  getters: {
    // likes getters
    totalLikes: (state) => {
      return state.likes.length;
    },
    allLikes: (state) => {
      return state.likes;
    },

    // filters getters
    allFilters: (state) => {
      return state.filters;
    },
  },

  persist: true,
});
