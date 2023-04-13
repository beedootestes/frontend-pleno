import { createPinia, PiniaVuePlugin } from "pinia";
import { createApp } from "vue";
import { useTesteStore } from "../_testes.js";
import data from "./testes.json";

describe("useTesteStore", () => {
  let testeStore;

  beforeEach(() => {
    const app = createApp({}); // Create a Vue app instance
    app.use(createPinia()); // Install Pinia in the Vue app
    app.use(PiniaVuePlugin); // Use the Pinia Vue plugin
    testeStore = useTesteStore(); // Initialize the store before each test
  });

  test("should initialize with empty state", () => {
    expect(testeStore.testes).toEqual([]); // Check if the initial state is an empty array
    expect(testeStore.loading).toBe(false); // Check if the initial loading state is false
    expect(testeStore.error).toBeNull(); // Check if the initial error state is null
  });

  test("should have correct initial state", () => {
    expect(testeStore.testes).toEqual([]); // Check if the initial state of testes is empty
    expect(testeStore.loading).toBeFalsy(); // Check if the initial loading state is false
    expect(testeStore.error).toBeNull(); // Check if the initial error state is null
  });

  test("should load data from JSON correctly", async () => {
    await testeStore.fetchTestes(); // Call the fetchTestes action

    expect(testeStore.testes).toEqual(data); // Check if the data from the JSON is loaded correctly in the store
    expect(testeStore.loading).toBe(false);
    expect(testeStore.error).toBeNull();
  });
});
