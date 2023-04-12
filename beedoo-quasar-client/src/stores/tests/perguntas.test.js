import { createPinia, PiniaVuePlugin } from 'pinia';
import { createApp } from 'vue';
import { usePerguntaStore } from '../_perguntas.js'; // Import the store to be tested
import data from './perguntas.json'; // Import test data

describe('usePerguntaStore', () => {
    let perguntaStore;

    beforeEach(() => {
        const app = createApp({}); // Create an instance of Vue app

        app.use(createPinia()); // Install Pinia in the Vue app
        app.use(PiniaVuePlugin); // Use the Pinia Vue plugin

        perguntaStore = usePerguntaStore(); // Initialize the store instance before each test
    });

    test('1 - should initialize with empty state', () => {
        // console.log(`perguntaStore.perguntas: ${perguntaStore.perguntas}`); // Print the current value of perguntaStore.perguntas
        // console.log(`perguntaStore.perguntasFiltradas: ${perguntaStore.perguntasFiltradas}`); // Print the current value of perguntaStore.perguntasFiltradas
        // console.log(`perguntaStore.loading: ${perguntaStore.loading}`); // Print the current value of perguntaStore.loading
        // console.log(`perguntaStore.error: ${perguntaStore.error}`); // Print the current value of perguntaStore.error

        expect(perguntaStore.perguntas).toEqual([]); // Check if the initial state is an empty array
        expect(perguntaStore.perguntasFiltradas).toEqual([]); // Check if the initial state of perguntasFiltradas is empty
        expect(perguntaStore.loading).toBeNull(); // Check if the initial state of loading is false
        expect(perguntaStore.error).toBeNull(); // Check if the initial state of error is null
    });

    test('2 - should have correct initial state', () => {
        // console.log(`perguntaStore.perguntas: ${perguntaStore.perguntas}`); // Print the current value of perguntaStore.perguntas
        // console.log(`perguntaStore.perguntasFiltradas: ${perguntaStore.perguntasFiltradas}`); // Print the current value of perguntaStore.perguntasFiltradas
        // console.log(`perguntaStore.loading: ${perguntaStore.loading}`); // Print the current value of perguntaStore.loading
        // console.log(`perguntaStore.error: ${perguntaStore.error}`); // Print the current value of perguntaStore.error

        expect(perguntaStore.perguntas).toEqual([]); // Check if the initial state of perguntas is empty
        expect(perguntaStore.perguntasFiltradas).toEqual([]); // Check if the initial state of perguntasFiltradas is empty
        expect(perguntaStore.loading).toBeFalsy(); // Check if the initial state of loading is false
        expect(perguntaStore.error).toBeNull(); // Check if the initial state of error is null
        expect(perguntaStore.parentId).toBeNull(); // Check if the initial state of id is null
    });

    test('3 - should fetch questions correctly', async () => {
        const perguntaStore = usePerguntaStore(); // Create an instance of the Store

        // Mock a delay for the fetch request
        jest.useFakeTimers();
        const fetchPromise = perguntaStore.fetchPerguntas(); // Call the fetchPerguntas action and store the promise
        jest.advanceTimersByTime(1000);
        jest.useRealTimers();

        // Assert initial loading state
        expect(perguntaStore.loading).toBe(true); // Check if loading is true during fetching
        expect(perguntaStore.error).toBeNull();
        expect(perguntaStore.perguntas).toEqual([]);

        // Resolve the fetch request
        await fetchPromise; // Wait for the fetch to complete

        // console.log(`perguntaStore.perguntas: ${perguntaStore.perguntas}`); // Print the current value of perguntaStore.perguntas
        // console.log(`data: ${data}`); // Print data from the json file

        // Assert updated state after fetch
        expect(perguntaStore.loading).toBe(false); // Check if loading is false after fetching
        expect(perguntaStore.error).toBeNull();
        expect(perguntaStore.perguntas).toEqual(data); // Check if questions are loaded correctly
    });

    test("4 - should fetch filtered questions by parentId correctly", async () => {
        const perguntaStore = usePerguntaStore(); // Create an instance of the Store
        const parentId = 77296;

        // Mock a delay for the fetch request
        jest.useFakeTimers();
        const fetchPromise = perguntaStore.fetchPerguntasFiltradas(parentId);
        jest.advanceTimersByTime(1000);
        jest.useRealTimers();

        // Assert initial loading state
        expect(perguntaStore.loading).toBe(true);
        expect(perguntaStore.error).toBeNull();
        expect(perguntaStore.perguntasFiltradas).toEqual([]);

        // Resolve the fetch request
        await fetchPromise;

        // Assert updated state after fetch
        expect(perguntaStore.loading).toBe(false);
        expect(perguntaStore.error).toBeNull();
        expect(perguntaStore.perguntasFiltradas).toEqual(
            data.filter((pergunta) => pergunta.parent_id === parentId)
        );
        expect(perguntaStore.loading).toBe(false); // Check if loading is false after fetching

        // Debug console.logs
        // console.log(`perguntaStore.loading: ${perguntaStore.loading}`);
        // console.log(`perguntaStore.error: ${perguntaStore.error}`);
        // console.log(`perguntaStore.perguntasFiltradas: ${perguntaStore.perguntasFiltradas}`);
    });

});