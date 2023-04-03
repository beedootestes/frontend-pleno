<template>
  <v-card class="ml-4 mr-4 mt-1" :title="title" />
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>
<style scoped></style>
