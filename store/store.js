import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useLikedCar = defineStore("isLikedCar", {
  state: () => ({
    likes: useLocalStorage("likes", []),
  }),
  actions: {
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
  },

  getters: {
    totalLikes: (state) => {
      return state.likes.length;
    },
    allLikes: (state) => {
      return state.likes;
    },
  },

  persist: true,
});
