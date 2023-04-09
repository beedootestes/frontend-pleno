import { createPinia, PiniaVuePlugin } from 'pinia';
import { createApp } from 'vue';
import { usePerguntaStore } from '../_perguntas.js'; // Importe a store que será testada
import data from './perguntas.json'; // Importe os dados de teste

describe('usePerguntaStore', () => {
    let perguntaStore;

    beforeEach(() => {
        const app = createApp({}); // Crie uma instância do aplicativo Vue
        app.use(createPinia()); // Instale o Pinia no aplicativo Vue
        app.use(PiniaVuePlugin); // Use o plugin Vue do Pinia
        perguntaStore = usePerguntaStore(); // Inicialize a instância da store antes de cada teste
    });

    test('deve inicializar com estado vazio', () => {
        expect(perguntaStore.perguntas).toEqual([]); // Verifique se o estado inicial é um array vazio
        expect(perguntaStore.pergunta).toBeNull(); // Verifique se o estado inicial de pergunta é null
        expect(perguntaStore.loading).toBe(false); // Verifique se o estado inicial de loading é false
        expect(perguntaStore.error).toBeNull(); // Verifique se o estado inicial de error é null
    });

    test('deve buscar perguntas', () => {
        perguntaStore.fetchPerguntas(); // Chame a ação fetchPerguntas na store

        expect(perguntaStore.perguntas).toEqual(data); // Verifique se a ação atualizou corretamente o estado com os dados de teste
        expect(perguntaStore.error).toBeNull(); // Verifique se o estado de error está null
        expect(perguntaStore.loading).toBe(false); // Verifique se o estado de loading é false após a conclusão da ação
    });

    test('deve buscar pergunta por ID', async () => {
        const id = 18349;
        await perguntaStore.fetchPergunta(id); // Aguarda a conclusão da ação fetchPergunta na store com o ID da pergunta

        expect(perguntaStore.pergunta).toEqual(data.find(pergunta => pergunta.id === id)); // Verifica se a ação atualizou corretamente o estado de pergunta com a pergunta correspondente ao ID
        expect(perguntaStore.error).toBeNull(); // Verifica se o estado de error está null
        expect(perguntaStore.loading).toBe(false); // Verifica se o estado de loading é false após a conclusão da ação
    });
});