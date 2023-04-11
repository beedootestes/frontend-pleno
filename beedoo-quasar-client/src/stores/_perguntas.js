import { defineStore } from "pinia";
import data from './perguntas.json';

export const usePerguntaStore = defineStore({
    id: 'pergunta',
    state: () => ({
        perguntas: [],
        pergunta: null,
        loading: false,
        error: null,
        id: null,
    }),
    actions: {
        async fetchPerguntas () {
            this.perguntas = [];
            this.loading = true;
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.perguntas = data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async fetchPergunta (id) {
            this.pergunta = {};
            this.loading = true;
            try {
                // await this.fetchPerguntas();
                this.pergunta = this.perguntas.find((pergunta) => pergunta.id === id);
                this.loading = false;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    }
})