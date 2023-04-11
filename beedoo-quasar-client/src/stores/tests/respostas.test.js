
import { createPinia, PiniaVuePlugin } from 'pinia';
import { createApp } from 'vue';
import { useRespostaStore } from '../_respostas.js';
import data from './respostas.json';

describe('useRespostaStore', () => {
    let respostaStore; // Declare a variable to hold the store instance

    beforeEach(() => {
        const app = createApp({}); // Create an instance of Vue app

        app.use(createPinia()); // Install Pinia in the Vue app
        app.use(PiniaVuePlugin); // Use the Pinia Vue plugin

        respostaStore = useRespostaStore(); // Initialize the store before each test
    });

    test('should initialize with empty state', () => {
        expect(respostaStore.respostas).toEqual([]); // Verify if the initial state of 'respostas' is an empty array
        expect(respostaStore.loading).toBe(false); // Verify if the initial state of 'loading' is false
        expect(respostaStore.error).toBeNull(); // Verify if the initial state of 'error' is null
    });

    test('should fetch responses correctly from JSON data', async () => {
        await respostaStore.fetchRespostas(); // Call the 'fetchRespostas' action

        // Verify if the data from the JSON is loaded correctly into the store
        expect(respostaStore.respostas).toEqual(data); // Verify if 'respostas' is equal to the 'data' imported from the JSON
        expect(respostaStore.loading).toBe(false); // Verify if 'loading' is false after the data is fetched
        expect(respostaStore.error).toBeNull(); // Verify if 'error' is null after the data is fetched
    });
});