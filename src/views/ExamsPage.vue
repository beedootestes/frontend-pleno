<template>
  <section class="exams-page">
    <nav class="exams-menu">
      <span
        :class="{ active: isActive === 'unanswered' }"
        @click="activeMenu('unanswered')">
        Não respondidos
      </span>
      <span
        :class="{ active: isActive === 'answered' }"
        @click="activeMenu('answered')">
        Respondidos
      </span>
    </nav>

    <div class="exams-list">
      <RouterLink
        v-for="exam in exams"
        :key="exam.id"
        :to="{ name: 'Questions', params: { examId: exam.id }}"
        class="exam-item">
        <ListItemExam
          :title="exam.title" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, computed, ref } from "vue";
  import { useExamsStore } from "../store/ExamsStore.ts";
  import ListItemExam from "../components/ListItemExam.vue";
  import Questions from "./QuestionsPage.vue";

  const examsStore = useExamsStore()
  const isActive = ref<String>('unanswered')
  const exams = computed(() => isActive.value === 'unanswered' ? examsStore.getUnansweredExams : examsStore.getAnsweredExams)

  onMounted(() => examsStore.getExams())

  const activeMenu = (menu: String): void => { isActive.value = menu }
</script>

<style scoped lang="scss">
  .exams-page {
    padding: 0 10px;

    .exams-menu {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;

      span {
        cursor: pointer;
        display: block;

        &.active {
          color: $color-active;
        }
      }
    }
    .exams-list {
      color: $color-inactive;

      .exam-item:nth-child(-n+2) {
        margin-bottom: 15px;
      }

      &:last-child {
        margin-bottom: 25px;
      }
    }
  }
</style>