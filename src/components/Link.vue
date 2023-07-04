<template>
  <div class="link" @click="$emit('click')">
    <router-link :to="to">
      <slot></slot>

      {{ title }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: false
    },

    to: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .link {
    color: $color-inactive;

    &.active {
      color: #f25700;
    }

    a {
      display: flex;
      flex-direction: column;
      line-height: 0;
      font-weight: unset;
    }
  }
</style>