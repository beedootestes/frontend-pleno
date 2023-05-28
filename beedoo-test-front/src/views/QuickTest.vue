<template>
  <v-container>
    <div class="title">
      <v-btn class="back-button elevation-0" icon @click="goBack()">
        <v-icon> mdi-arrow-left</v-icon>
      </v-btn>
      <h1>{{ test.title }}</h1>
    </div>
    <div class="questions">
      <div v-for="(question, index) in questions" :key="question.id">
        <h4 class="question">{{ `${index + 1} - ${question.text}` }}</h4>
        <ul class="answers">
          <li
            class="answer"
            :class="{ selected: isSelected(question.id, answer.id) }"
            v-for="answer in getAnswersByTestId(question.id)"
            :key="answer.id"
            @click="selectAnswer(question.id, answer.id)"
          >
            {{ answer.text }}
            <span v-if="showIcons && isSelected(question.id, answer.id)">
              <v-icon v-if="isAnswerCorrect(question.id, answer.id)" color="success">
                mdi-check
              </v-icon>
              <v-icon v-else color="error">mdi-close</v-icon>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer mx-auto">
      <v-btn class="button" @click="checkRightAnswers()" color="orange"
        >Enviar</v-btn
      >
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useTestsStore } from "@/store/testsStore.js";
import { useRoute, useRouter } from "vue-router";

const testsStore = useTestsStore();
const route = useRoute();
const router = useRouter();

const showIcons = ref(false);
const test = ref("");
const questions = ref("");

const testId = JSON.parse(route.params.testId);

const getTest = () => {
  const [test] = testsStore.tests.filter((test) => test.id === testId);

  return test;
};

const getAnswersByTestId = (questionId) => {
  const answersByTestId = testsStore.answers.filter(
    (answer) => answer.question_id === questionId
  );

  return answersByTestId;
};

const getQuestionsByTestId = () => {
  const questionsByTestId = testsStore.questions.filter(
    (question) => question.parent_id === testId
  );

  return questionsByTestId;
};

const selectedAnswers = reactive(new Map());

function isSelected(questionId, answerId) {
  const questionAnswer = selectedAnswers.get(questionId);
  return questionAnswer === answerId;
}

function selectAnswer(questionId, answerId) {
  selectedAnswers.set(questionId, answerId);
}

const checkRightAnswers = () => {
  const results = [];

  for (const [questionId, answerId] of selectedAnswers) {
    const answer = testsStore.answers.find(
      (answer) => answer.id === answerId && answer.is_correct
    );
    const result = {
      questionId,
      answerId,
      isCorrect: !!answer,
    };
    results.push(result);
  }
  showIcons.value = true;
  return results;
};

function isAnswerCorrect(questionId, answerId) {
  const answer = testsStore.answers.find(
    (answer) => answer.id === answerId && answer.is_correct
  );

  return !!answer;
}

const goBack = () => {
  router.go(-1);
};

onMounted(async () => {
  test.value = getTest();
  questions.value = getQuestionsByTestId();
});
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  h1 {
    text-align: center;
    width: 100%;
  }
}
.questions {
  margin-bottom: 16px;
  .question {
    margin-bottom: 16px;
    margin-top: 16px;
  }
  .answers {
    margin-left: 16px;
    list-style-type: none;
    .answer {
      margin-bottom: 8px;
      border: 1px solid black;
      padding: 8px 16px;
      border-radius: 32px;
      cursor: pointer;
      &.selected {
        background-color: lighten(#f3ef06, 30);
        outline: 2px solid black;
      }
    }
  }
}
.footer {
  display: flex;
  justify-content: center;
  .button {
    width: 100%;
    max-width: 300px;
    border-radius: 32px;
    color: black;
    font-weight: bold;
  }
}
</style>
