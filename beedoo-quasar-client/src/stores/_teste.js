import { defineStore } from 'pinia'
import testeData from '../assets/data/testes.json'

export const useTesteStore = defineStore({
    id: 'teste',
    state: () => ({
        testes: [],
        teste: null,
        loading: false,
        error: null
    }),
    getters: {
        getPerguntasPorTeste: (state) => {
            return (testeId) => state.testes.filter((teste) => teste.perguntaId === testeId)
        }
    },
    actions: {
        async fetchPerguntas () {
            this.testes = []
            this.loading = true
            try {
                this.testes = await testeData
            } catch (error) {

            }
        }
    }
})