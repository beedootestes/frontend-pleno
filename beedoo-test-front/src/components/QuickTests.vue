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
        <Test v-for="test in tests" :key="test.id" :teste="test" />
      </div>

      <div v-else-if="activeTab === 'unanswered'" class="tab"></div>
    </div>
  </v-container>
</template>

<script setup>
import Test from "./Test.vue";
import * as TestsService from "@/services/quickTests.service";

import { ref } from "vue";

const activeTab = ref("answered");
const tests = ref("");

function changeTab(tab) {
  activeTab.value = tab;
}

const getTests = async () => {
  try {
    const response = await TestsService.tests();
    tests.value = response;
  } catch (error) {
    console.error(error);
  }
};

getTests();
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
