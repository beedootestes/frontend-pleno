import { createPinia, PiniaVuePlugin } from "pinia";
import { createApp } from "vue";
import { usePerguntaStore } from "../_perguntas.js";
import data from "./perguntas.json";

describe("usePerguntaStore", () => {
  let perguntaStore;

  beforeEach(() => {
    const app = createApp({});

    app.use(createPinia());
    app.use(PiniaVuePlugin);

    perguntaStore = usePerguntaStore();
  });

  it("1 - should initialize with empty state", () => {
    expect(perguntaStore.perguntas).toEqual([]);
    expect(perguntaStore.perguntasFiltradas).toEqual([]);
    expect(perguntaStore.loading).toBeNull();
    expect(perguntaStore.error).toBeNull();
  });

  it("2 - should have correct initial state", () => {
    expect(perguntaStore.perguntas).toEqual([]);
    expect(perguntaStore.perguntasFiltradas).toEqual([]);
    expect(perguntaStore.loading).toBeFalsy();
    expect(perguntaStore.error).toBeNull();
  });

  test("3 - should fetch questions correctly", async () => {
    const perguntaStore = usePerguntaStore();

    jest.useFakeTimers();
    const fetchPromise = perguntaStore.fetchPerguntas();
    jest.advanceTimersByTime(1000);
    jest.useRealTimers();

    expect(perguntaStore.loading).toBe(true);
    expect(perguntaStore.error).toBeNull();
    expect(perguntaStore.perguntas).toEqual([]);

    await fetchPromise;

    expect(perguntaStore.loading).toBe(false);
    expect(perguntaStore.error).toBeNull();
    expect(perguntaStore.perguntas).toEqual(data);
  });

  test("4 - should fetch filtered questions by parentId correctly", async () => {
    const perguntaStore = usePerguntaStore();
    const parentId = 77296;

    jest.useFakeTimers();
    const fetchPromise = perguntaStore.fetchPerguntasFiltradas(parentId);
    jest.advanceTimersByTime(1000);
    jest.useRealTimers();

    expect(perguntaStore.loading).toBe(true);
    expect(perguntaStore.error).toBeNull();
    expect(perguntaStore.perguntasFiltradas).toEqual([]);

    await fetchPromise;

    expect(perguntaStore.loading).toBe(false);
    expect(perguntaStore.error).toBeNull();
    expect(perguntaStore.perguntasFiltradas).toEqual(
      data.filter((pergunta) => pergunta.parent_id == parentId)
    );
    expect(perguntaStore.loading).toBe(false);
  });
});
