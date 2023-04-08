import { defineStore } from 'pinia'
import testeData from '../assets/data/testes.json'

export const testeStore = defineStore({
  id: 'teste',
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    getData: state => state.data,
  },
  actions: {
    loadData () {
      try {
        this.loading = true
        this.data = testeData;
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`)
      } finally {
        this.loading = false
      }
    }

  }
})