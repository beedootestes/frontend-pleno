<template>
  <v-container>
    <div class="quick-tests">
      <div class="tab-buttons">
        <button
          :class="{ active: activeTab === 'answered' }"
          @click="changeTab('answered')"
        >
          Respondidos
        </button>
        <button
          :class="{ active: activeTab === 'unanswered' }"
          @click="changeTab('unanswered')"
        >
          Não Respondidos
        </button>
      </div>

      <div v-if="activeTab === 'answered'" class="tab">
        <TestCard v-for="test in tests" :key="test.id" :teste="test" />
      </div>

      <div v-else-if="activeTab === 'unanswered'" class="tab"></div>
    </div>
  </v-container>
</template>

<script setup>
import TestCard from "./TestCard.vue";
import { useTestsStore } from "@/store/testsStore.js";

import { ref, onMounted, toRef } from "vue";

const activeTab = ref("answered");
const testsStore = useTestsStore();
const tests = toRef(testsStore, 'tests');

function changeTab(tab) {
  activeTab.value = tab;
}

const getTests = async () => {
  try {
    await testsStore.getTests();
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getTests();
});
</script>

<style scoped>
.quick-tests {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tab-buttons {
  display: flex;
}

.tab-buttons button {
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.tab-buttons button.active {
  color: #f7a100;
}

.tab {
  width: 80%;
}
</style>
