import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useResultStore = defineStore({
  id: 'result',
  state: () => ({
    guessedIds: useLocalStorage('count', new Set()),
  }),
  getters: {

  },
  actions: {

  }
})
