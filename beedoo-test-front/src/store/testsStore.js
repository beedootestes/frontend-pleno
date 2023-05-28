import { defineStore } from "pinia";
import * as TestsService from "@/services/quickTests.service";

export const useTestsStore = defineStore("tests", {
  state: () => ({
    tests: [],
    answers: [],
    questions: [],
  }),
  actions: {
    async getAnswers() {
      try {
        const response = await TestsService.answers();
        this.answers = response;
      } catch (error) {
        console.error(error);
      }
    },
    async getQuestions() {
      try {
        const response = await TestsService.questions();
        this.questions = response;
      } catch (error) {
        console.error(error);
      }
    },
    async getTests() {
      try {
        const response = await TestsService.tests();
        this.tests = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
