import { defineStore } from 'pinia'

export const useitemId = defineStore('itemId', {
  state() {
    return {
      itemId: 0
    }
  },

  actions: {
    setItemId(itemId) {
      this.itemId = itemId
    }
  }
})
