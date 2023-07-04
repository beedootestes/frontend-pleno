<template>
  <div class="question">
    <div class="header-question">
      <div class="icon-help"><HelpIcon :size="40" /></div>
      <p class="title">{{ question.text }}</p>
      <p class="beetcoins">({{question.beetcoins}}) moedas</p>
    </div>

    <div class="alternatives">
      <AlternativeQuestion
        class="item"
        @click="selectAlternative(question.id, alternative.id)"
        v-for="alternative in question.alternatives"
        :key="alternative.id"
        :alternative="alternative"
        :correctAnswerId="correctAnswerId"
        :selected="alternative.id === selectedAlternative" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HelpIcon from 'vue-material-design-icons/Help.vue';
  import AlternativeQuestion from "./AlternativeQuestion.vue";
  import { PropType, ref } from "vue";
  import type { Question } from "../types/question.ts";

  const selectedAlternative = ref<Number>(0)

  const emits = defineEmits(['update:modelValue'])

  const selectAlternative = (questionId, alternativeId) => {
    selectedAlternative.value = alternativeId
    emits('update:modelValue', {questionId, alternativeId})
  }

  defineProps({
    question: {
      type: Object as PropType<Question>,
      required: true
    },

    correctAnswerId: {
      type: Number,
      required: true,
      default: 0
    }
  })
</script>

<style scoped lang="scss">
  .question {
    .header-question {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 20px 0;

      .icon-help {
        background-color: $bg-answer-detail;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 50%;
        color: #fff;
        width: 73px;
        margin-right: 15px;
      }

      p {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;

        &:nth-of-type(1) { margin-right: 5px; }
        &:nth-of-type(2) { font-size: 12px; }
      }
    }

    .alternatives {
      .item { margin-bottom: 5px; }

      &:last-child { margin-bottom: 0; }
    }
  }
</style>