import { defineStore } from "pinia";
import data from "./respostas.json";

export const useRespostaStore = defineStore({
  id: "resposta",
  state: () => ({
    respostas: [],
    respostasFiltradas: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchRespostas () {
      this.respostas = [];
      this.loading = true;
      try {
        this.respostas = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchRespostasFiltradas (questionId) {
      // console.log("1 - _respostas.js | question_id: ", questionId);
      this.loading = true;
      await this.fetchRespostas();
      this.error = null;
      try {
        this.respostasFiltradas = this.respostas.filter(
          (resposta) => resposta.question_id == questionId
        );
        // console.log("2 - _respostas.js | array.js: ", this.respostasFiltradas = this.respostas.filter(resposta => resposta.question_id == questionId));
        this.loading = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
  },
});
