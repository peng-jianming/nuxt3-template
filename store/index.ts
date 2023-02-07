import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter-store',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    countPlusOne() {
      this.count++
    },
  },
})
