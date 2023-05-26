<template>
  <v-card class="card-test">
    <v-card-title class="card-name">
      <h4>{{ test.title }}</h4>
      <v-icon> mdi-chevron-right </v-icon>
    </v-card-title>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import * as TestsService from "@/services/quickTests.service";

const props = defineProps({
  teste: {
    type: Object,
    required: true,
  },
});

const test = ref(props.teste);
const answers = ref([]);
const questions = ref([]);

const getAnswers = async () => {
  try {
    const response = await TestsService.answers();
    answers.value = response;
  } catch (error) {
    console.error(error);
  }
};

const getQuestions = async () => {
  try {
    const response = await TestsService.questions();
    questions.value = response;
  } catch (error) {
    console.error(error);
  }
};


const getAnswersByTestId = () => {
  const answersByTestId = answers.value.filter(
    (answer) => answer.testId === test.value.id
  );

  return answersByTestId;
};

const getQuestionsByTestId =  () => {
  const questionsByTestId = questions.value.filter(
    (question) => question.parent_id === test.value.id
  );

  return questionsByTestId;
};

onMounted(async () => {
  await getQuestions();
  await getAnswers();

  getAnswersByTestId();
  getQuestionsByTestId();
});
</script>

<style lang="scss" scoped>
.card-test {
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  .card-name {
    display: flex;
    justify-content: space-between;
  }
}
</style>
