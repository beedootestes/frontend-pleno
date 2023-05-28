<template>
  <v-card class="card-test" @click="viewTest">
    <v-card-title class="card-name">
      <h4>{{ test.title }}</h4>
      <v-icon> mdi-chevron-right </v-icon>
    </v-card-title>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import { useTestsStore } from "@/store/testsStore.js";
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  teste: {
    type: Object,
    required: true,
  },
});

const test = ref(props.teste);
const testsStore = useTestsStore();

const viewTest = () => {
  router.push({
    name: "QuickTest",
    params: { testId: JSON.stringify(test.value.id) },
  });
};

const getAnswers = async () => {
  try {
    await testsStore.getAnswers();
  } catch (error) {
    console.error(error);
  }
};

const getQuestions = async () => {
  try {
    await testsStore.getQuestions();
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getQuestions();
  await getAnswers();
});
</script>

<style lang="scss" scoped>
.card-test {
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  cursor: pointer;
  .card-name {
    display: flex;
    justify-content: space-between;
  }
}
</style>
