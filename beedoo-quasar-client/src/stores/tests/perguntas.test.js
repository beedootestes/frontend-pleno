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

    test('should initialize with empty state', () => {
        expect(perguntaStore.perguntas).toEqual([]); // Check if the initial state is an empty array
        expect(perguntaStore.pergunta).toBeNull(); // Check if the initial state of pergunta is null
        expect(perguntaStore.loading).toBe(false); // Check if the initial state of loading is false
        expect(perguntaStore.error).toBeNull(); // Check if the initial state of error is null
    });

    test('should have correct initial state', () => {
        expect(perguntaStore.perguntas).toEqual([]); // Check if the initial state of perguntas is empty
        expect(perguntaStore.pergunta).toBeNull(); // Check if the initial state of pergunta is null
        expect(perguntaStore.loading).toBeFalsy(); // Check if the initial state of loading is false
        expect(perguntaStore.error).toBeNull(); // Check if the initial state of error is null
        expect(perguntaStore.id).toBeNull(); // Check if the initial state of id is null
    });

    test('should fetch questions correctly', async () => {
        const perguntaStore = usePerguntaStore(); // Create an instance of the Store
        await perguntaStore.fetchPerguntas(); // Call the fetchPerguntas action and wait for completion

        // console.log(`Imported data from store: ${perguntaStore.perguntas}`); // Print the current data of perguntaStore.perguntas
        // console.log(data); // Print data from the json file

        // expect(perguntaStore.loading).toBeTruthy(); // Check if loading is true during fetching
        expect(perguntaStore.perguntas).toEqual(data); // Check if questions are loaded correctly
        expect(perguntaStore.loading).toBeFalsy(); // Check if loading is false after fetching
    });

    test('should fetch a question by ID correctly', async () => {
        await perguntaStore.fetchPergunta(72648); // Call the fetchPergunta action with a valid ID
        // console.log(perguntaStore.pergunta.id === 72648);

        // expect(perguntaStore.loading).toBeTruthy(); // Check if loading is true during fetching
        expect(perguntaStore.pergunta).not.toBeNull(); // Check if question is found correctly
        expect(perguntaStore.error).toBeNull(); // Check if error is null after fetching

        expect(perguntaStore.loading).toBeFalsy(); // Check if loading is false after fetching
    });
});