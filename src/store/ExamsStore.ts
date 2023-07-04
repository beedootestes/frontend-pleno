import { defineStore, StoreDefinition } from "pinia"
import { Exam } from "../types/exam.ts";
import { Question } from "../types/question.ts";


type State = {
  allExams: Array<Exam>,
  answeredExams: Array<Exam>,
  unansweredExams: Array<Exam>,
  questions: Array<Question>
}
export const useExamsStore: StoreDefinition = defineStore('exams', {
  state: (): State => {
    return {
      allExams: [] as Array<Exam>,
      answeredExams: [] as Array<Exam>,
      unansweredExams: [] as Array<Exam>,
      questions: [] as Array<Question>
    }
  },

  getters: {
    getExam: (state: State) => (examId: Number) => state.allExams.find(exam => exam.id === examId),
    getAnsweredExams: (state: State) => state.answeredExams,
    getUnansweredExams: (state: State) => state.unansweredExams,
    getQuestionsList: (state: State) => state.questions
  },

  actions: {
    finalizeExam(examId: Number): void {
      const exam: Exam = this.$state.unansweredExams.find((exam: Exam) => exam.id === examId)

      this.$state.answeredExams.push(exam)
      this.$state.unansweredExams = this.$state.unansweredExams.filter((exam: Exam) => exam.id !== examId)
    },

    getExams(): void {
      fetch('http://localhost:8000/v1/exams', {
        method: 'GET',
      }).then(async res => {
        const exams = await res.json()
        this.$state.allExams = exams
        this.$state.answeredExams = exams.filter((exam: Exam) => exam.finishin)
        this.$state.unansweredExams = exams.filter((exam: Exam) => !exam.finishin)
      }).catch(err => {
        throw err
      })
    },

    getQuestions(examId: Number) {
      fetch(`http://localhost:8000/v1/questions/${examId}`, {
        method: 'GET',
      }).then(async res => {
        const exams = await res.json()
        this.$state.questions = exams
      }).catch(err => {
        throw err
      })
    }
  }
})