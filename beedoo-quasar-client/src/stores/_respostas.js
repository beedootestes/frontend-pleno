import { defineStore } from 'pinia'
import data from './respostas.json'

export const useRespostaStore = defineStore({
    id: 'resposta',
    state: () => ({
        respostas: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchRespostas () {
            this.respostas = [];
            this.loading = true;
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.respostas = data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
})