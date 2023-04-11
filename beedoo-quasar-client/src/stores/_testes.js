import { defineStore } from 'pinia'
import data from './testes.json'

export const useTesteStore = defineStore({
    id: 'teste',
    state: () => ({
        testes: [],
        loading: false,
        error: null
    }),
    actions: {
        async fetchTestes () {
            this.testes = []
            this.loading = true
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.testes = data
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})