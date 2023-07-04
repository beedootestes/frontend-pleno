<template>
  <div class="exam-item">
    {{ title }}

    <ChevronRightIcon :size="45" />
  </div>
</template>

<script setup lang="ts">
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

  defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .exam-item {
    width: 100%;
    border: 1px solid $color-border;
    box-shadow: $shadow 0 0 22px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 5px 20px 20px;
  }
</style>