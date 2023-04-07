import { defineStore } from 'pinia'
import testesData from '../assets/data/testes.json'

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
        this.data = testesData;
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`)
      } finally {
        this.loading = false
      }
    }
  }
})
