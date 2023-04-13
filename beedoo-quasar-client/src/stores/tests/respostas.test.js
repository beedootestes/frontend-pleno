
import { createPinia, PiniaVuePlugin } from 'pinia';
import { createApp } from 'vue';
import { useRespostaStore } from '../_respostas.js';
import data from './respostas.json';

describe('useRespostaStore', () => {
    let respostaStore;

    beforeEach(() => {
        const app = createApp({});

        app.use(createPinia());
        app.use(PiniaVuePlugin);

        respostaStore = useRespostaStore();
    });

    it('1 - should initialize with empty state', () => {
        expect(respostaStore.respostas).toEqual([]);
        expect(respostaStore.loading).toBe(false);
        expect(respostaStore.error).toBeNull();
    });

    it('2 - should have correct initial state', () => {
        expect(respostaStore.respostas).toEqual([]);
        expect(respostaStore.respostasFiltradas).toEqual([]);
        expect(respostaStore.loading).toBeFalsy();
        expect(respostaStore.error).toBeNull();
    });

    it('3 - should fetch responses correctly from JSON data', async () => {
        await respostaStore.fetchRespostas();

        expect(respostaStore.respostas).toEqual(data);
        expect(respostaStore.loading).toBe(false);
        expect(respostaStore.error).toBeNull();
    });

    test('4 - should fetch filtered responses correctly', async () => {
        const respostaStore = useRespostaStore();
        const questionId = 42031;

        jest.useFakeTimers();
        const fetchPromise = respostaStore.fetchRespostasFiltradas(questionId);
        jest.advanceTimersByTime(1000);
        jest.useRealTimers();

        expect(respostaStore.loading).toBe(true);
        expect(respostaStore.error).toBeNull();
        expect(respostaStore.respostasFiltradas).toEqual([]);

        await fetchPromise;

        expect(respostaStore.loading).toBe(false);
        expect(respostaStore.error).toBeNull();
        expect(respostaStore.respostasFiltradas).toEqual(
            data.filter((resposta) => resposta.question_id == questionId)
        );
        expect(respostaStore.loading).toBe(false);
    });
});