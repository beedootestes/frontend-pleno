import { defineStore } from 'pinia'
import { usePerguntaStore } from './_perguntas'
import { data } from '../assets/data/perguntas.json'

export const useRespostaStore = defineStore({
    id: 'resposta',
    state: () => ({
        respostas: []
    }),
    getters: {
        getRespostas: (state) => {
            const perguntaStore = usePerguntaStore();
            if (perguntaStore.pergunta === null) {
                return [];
            }
            return state.respostas.filter((pergunta) => pergunta.question_id === perguntaStore.pergunta.id);
        }
    },
    actions: {
        async fetchRespostas () {
            try {
                const parsedData = JSON.parse(JSON.stringify(data));
                this.respostas = parsedData || []; // definir um valor padrão em caso de erro
            } catch (error) {
                console.error('Erro ao converter JSON:', error);
                this.respostas = []; // definir um valor padrão em caso de erro
            }
        }
    }
})