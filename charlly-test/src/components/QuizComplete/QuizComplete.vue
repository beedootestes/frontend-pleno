<template>
  <div class="quiz"> 
    <h3 class="quiz_title">Quiz Completado!</h3>
    <p class="quiz_total">Você acertou  {{ score }} questões em <strong>{{ totalQuestions }}</strong> 🔥</p>
    📝
    <div class="quiz_button">
      <button class="btn" @click="restartQuiz">Reinicie Quiz!</button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    score: {
      type: Number,
    },
    totalQuestions: {
      type: Number,
    },
  })

  const emit = defineEmits(['restart-quiz']);

  const restartQuiz = () => {
    emit('restart-quiz');
  }
</script>
<style lang="scss" scoped>
@import './QuizComplete-style.scss';
</style>
