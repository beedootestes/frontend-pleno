<template>
  <div class="index">
    <questions
      v-if="currentQuestion"
      :question="currentQuestion"
      :responses="currentQuestionResponses"
      :selected-response="selectedResponse"
      @select-response="selectResponse"
      @check-answer="checkAnswer"
    />
    <quiz-complete v-else
      :score="score"
      :total-questions="totalQuestions"
      @restart-quiz="restartQuiz"
    />
  </div>
</template>
<script setup>
  import { ref, computed } from "vue";
  import perguntas from "../../support/data/perguntas.json";
  import resposta from "../../support/data/respostas.json";
  import Questions from "../../components/Questions/Questions.vue";
  import QuizComplete from "../../components/QuizComplete/QuizComplete.vue";

  const currentQuestionIndex = ref(0);
  const selectedResponse = ref(null);
  const score = ref(0);

  const currentQuestion = computed(() => {
    return perguntas[currentQuestionIndex.value];
  });

  const currentQuestionResponses = computed(() => {
    return resposta.filter(
      (response) => response.question_id === currentQuestion.value.id
    );
  });

  const totalQuestions = computed(() => {
    return perguntas.length;
  });

  const selectResponse = (response) => {
    selectedResponse.value = response;
  };

  const checkAnswer = () => {
    if (selectedResponse.value && selectedResponse.value.is_correct) {
      score.value++;
    }
    if (currentQuestionIndex.value === totalQuestions.value - 1) {
      currentQuestionIndex.value = null;
    } else {
      currentQuestionIndex.value++;
      selectedResponse.value = null;
    }
  };

  const restartQuiz = () => {
    currentQuestionIndex.value = 0;
    score.value = 0;
    selectedResponse.value = null;
  }
</script>
<style lang="scss" scoped>
@import './IndexQuestion-style.scss';
</style>
