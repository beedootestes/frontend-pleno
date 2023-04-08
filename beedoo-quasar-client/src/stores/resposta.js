import { defineStore } from 'pinia'
import respostasData from '../assets/data/respostas.json'

export const respostaStore = defineStore({
  id: 'respostas',
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    getData: state => state.data
  },
  actions: {
    loadData () {
      try {
        this.loading = true
        this.data = respostasData;
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`)
      } finally {
        this.loading = false
      }
    }
  }
})
