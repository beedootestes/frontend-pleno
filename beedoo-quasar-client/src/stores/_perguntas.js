import { defineStore } from "pinia";
import { data } from '../assets/data/perguntas.json'

export const usePerguntaStore = defineStore({
    id: 'pergunta',
    state: () => ({
        perguntas: [],
        pergunta: null,
        loading: false,
        error: null,
        id: null,
    }),
    getters: {
        getPerguntasPorTeste: (state) => (testeId) => {
            return state.perguntas.filter((pergunta) => pergunta.parent_id == testeId);
        },
    },
    actions: {
        fetchPerguntas () {
            this.perguntas = []
            this.loading = true
            try {
                this.perguntas = JSON.parse(JSON.stringify(data));
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },

        async fetchPergunta (id) {
            this.pergunta = null;
            this.loading = true;
            try {
                await this.fetchPerguntas();
                this.pergunta = this.perguntas.find(pergunta => pergunta.id === id);
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
})