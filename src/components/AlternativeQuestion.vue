<template>
  <div
    @click="emit('click', $event)"
    :class="[{selected: selected}, isCorrect]"
    class="question-item">
    <div>{{ alternative.text }}</div>

    <div>
      <CheckCircleIcon class="correct-icon" v-if="isCorrect === 'correct'" :size="45" fill-color="#228B21" />
      <AlphaXCircleIcon v-else-if="isCorrect === 'incorrect'" :size="45" fill-color="#FF0000" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import AlphaXCircleIcon from 'vue-material-design-icons/AlphaXCircle.vue';
  import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue';
  import { computed, getCurrentInstance, PropType } from "vue";
  import { Answer } from "../types/answer.ts";

  const { emit } = getCurrentInstance()

  const isCorrect = computed(() => {
    if (props.correctAnswerId === 0) {
      return 'answer'
    }
    if (props.alternative.id === props.correctAnswerId) {
      return 'correct'
    } else {
      return 'incorrect'
    }
  })

  const props = defineProps({
    alternative: {
      type: Object as PropType<Answer>,
      required: true
    },

    selected: {
      type: Boolean,
      required: true,
      default: false
    },

    correctAnswerId: {
      type: Number,
      required: true,
      default: 0
    }
  })

  defineEmits(['click'])
</script>

<style scoped lang="scss">
  .question-item {
    border: 1px solid $color-border-answer;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 30px;
    background-color: $bg-answer;
    cursor: pointer;
    width: 100%;
    height: 55px;

    &.selected {
      border: 2px solid $color-border-selected-answer;
      background-color: $bg-selected-answer;

      &.correct {
        border: 3px solid $color-border-correct-answer;
      }
    }

    &.correct {
      border: 3px solid $color-border-wrong-answer;
    }

    div:nth-child(2) {
      display: flex;
    }
  }
</style>