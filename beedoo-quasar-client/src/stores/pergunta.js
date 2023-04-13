import { defineStore } from "pinia";
import perguntasData from "../assets/data/perguntas.json";

export const perguntaStore = defineStore({
  id: "perguntas",
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    getData: (state) => state.data,
  },
  actions: {
    async loadData() {
      try {
        this.loading = true;
        this.data = perguntasData;
      } catch (error) {
        console.log(`Error fetching testes: ${{ error }}`);
      } finally {
        this.loading = false;
      }
    },
  },
});
