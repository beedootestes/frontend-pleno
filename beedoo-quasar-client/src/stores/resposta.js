import { defineStore } from 'pinia'
import respostasData from '../assets/data/respostas.json'

export const respostaStore = defineStore({
  id: 'resposta',
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
        this.data = respostasData;
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`)
      } finally {
        this.loading = false
      }
    }
  }
})
