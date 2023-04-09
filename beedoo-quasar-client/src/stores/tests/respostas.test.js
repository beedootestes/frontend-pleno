
import { createPinia, PiniaVuePlugin } from 'pinia'; // Importe o createPinia do Pinia
import { createApp } from 'vue' // Importe a função createApp do Vue
import { useRespostaStore } from '../_respostas.js';
import data from './respostas.json';
import { perguntas } from '../_perguntas.js';

describe('useRespostaStore', () => {
    let respostaStore

    beforeEach(() => {
        const app = createApp({}) // Crie uma instância do aplicativo Vue
        app.use(createPinia()) // Instale o Pinia no aplicativo Vue
        app.use(PiniaVuePlugin) // Use o plugin Vue do Pinia
        respostaStore = useRespostaStore() // Inicialize a instância da store antes de cada teste
    })

    test('deve inicializar com estado vazio', () => {
        expect(respostaStore.respostas).toEqual([]) // Verifique se o estado inicial é um array vazio
    })

    test('deve buscar respostas', async () => {
        // Mock da função fetch para retornar os dados de teste
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(data)
        })

        await respostaStore.fetchRespostas() // Chame a ação fetchRespostas na store

        expect(respostaStore.respostas).toEqual(data) // Verifique se a ação atualizou corretamente o estado com os dados de teste
    })

    test('deve filtrar respostas com base no ID da pergunta', () => {
        respostaStore.respostas = [
            { perguntaId: 1, resposta: 'Resposta 1' },
            { perguntaId: 2, resposta: 'Resposta 2' },
            { perguntaId: 1, resposta: 'Resposta 3' }
        ]

        const perguntaStoreMock = {
            pergunta: { id: 1 }
        }

        // Mock da função usePerguntaStore para retornar a instância mockada de perguntaStore
        jest.mock(perguntas, () => ({
            usePerguntaStore: () => perguntaStoreMock
        }))

        const respostasFiltradas = respostaStore.getRespostas // Chame o getter getRespostas na store

        expect(respostasFiltradas).toEqual([
            { perguntaId: 1, resposta: 'Resposta 1' },
            { perguntaId: 1, resposta: 'Resposta 3' }
        ]) // Verifique se o getter retornou apenas as respostas com o ID da pergunta correspondente ao ID da pergunta na instância mockada de perguntaStore
    })
})