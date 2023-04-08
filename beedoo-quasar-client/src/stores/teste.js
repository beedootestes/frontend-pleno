import { defineStore } from 'pinia'
import localData from '../assets/data/testes.json'

export const testeStore = defineStore({
  id: 'teste',
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    getData: state => state.data
  },
  actions: {
    async loadData () {
      try {
        this.loading = true
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.data = localData;
        console.log(localData);
        this.loading = false
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`)
      }
    }
  }
})
