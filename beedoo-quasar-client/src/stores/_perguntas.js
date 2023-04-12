import { defineStore } from "pinia";
import data from './perguntas.json';

export const usePerguntaStore = defineStore({
    id: 'pergunta',
    state: () => ({
        perguntas: [],
        perguntasFiltradas: [],
        loading: null,
        error: null,
    }),
    actions: {
        async fetchPerguntas () {
            this.loading = true;
            this.perguntas = [];
            this.error = null;
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.perguntas = data;
                this.loading = false;
            } catch (error) {
                this.error = error;
                this.loading = false;
            }
        },
        async fetchPerguntasFiltradas (parentId) {
            console.log("_perguntas.js: ", parentId);
            this.loading = true;
            await this.fetchPerguntas();
            this.error = null;
            try {
                this.perguntasFiltradas = this.perguntas.filter(pergunta => pergunta.parent_id == parentId);
                this.loading = false;
            } catch (error) {
                this.error = error;
                this.loading = false;
            }
        }
    }
})