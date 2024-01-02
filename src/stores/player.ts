import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'player',
  state: () => ({
    isPlay: false
  }),
  getters: {
    set_play() {
      this.isPlay = !this.isPlay;
    },
  },
  actions: {
    increment() {

    },
  }
})
