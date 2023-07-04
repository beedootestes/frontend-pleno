<template>
  <section class="quetions-page">
    <ExamHeader
      :title-exam="examSelected.title"
      :beetcoins="examSelected.beetcoins"
      :beetcoinsAchieved="beetcoins" />

    <div class="questions-list">
        <Question
          v-for="question in questions"
          :key="question.id"
          :question="question"
          :correctAnswerId="correctedAnswers.corretions[question.id] || 0"
          @update:modelValue="responsesSelect" />
    </div>

    <button
      @click="finalize"
      class="btn-finalize">
      Finalizar
    </button>
  </section>
</template>

<script setup lang="ts">
  import ExamHeader from "../components/ExamHeader.vue";
  import { useExamsStore } from "../store/ExamsStore.ts";
  import { useRoute } from "vue-router";
  import { computed, reactive, ref } from "vue";
  import Question from "../components/Question.vue";

  const route = useRoute()
  const exameStore = useExamsStore()
  const examSelected = computed(() => exameStore.getExam(parseInt(route.params.examId)))
  const questions = computed(() => exameStore.getQuestionsList)
  const responses = reactive({})
  const correctedAnswers = reactive({corretions: {}})
  const beetcoins = ref<Number>(0)

  const responsesSelect = response => responses[response.questionId] = response.alternativeId

  const finalize = () => {
    correctedAnswers.corretions = questions.value.reduce((acc, question: Question) => {
      const correctAnswer = question.alternatives.find(alternative => alternative.is_correct)
        acc[question.id] = correctAnswer.id
        if (responses[question.id] === correctAnswer.id) {
          beetcoins.value = beetcoins.value + question.beetcoins
        }
        return acc
    }, {})

    exameStore.finalizeExam(examSelected.id)
  }
</script>

<style scoped lang="scss">
  .quetions-page {
    padding: 0 10px;
    box-sizing: border-box;

    .questions-list {
      width: 100%;
    }

    .btn-finalize {
      display: block;
      background-color: $color-active;
      border-radius: 3px;
      border: 1px solid $color-active;
      box-sizing: border-box;
      cursor: pointer;
      outline: none;
      text-align: center;
      text-decoration: none;
      margin: 50px auto 50px auto;
    }
  }
</style>