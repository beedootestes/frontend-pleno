<template>
  <v-list lines="one">
    <v-list-item v-for="item in testesData" :key="item.id" :title="item.title"></v-list-item>
  </v-list>
</template>

<script setup>
import testes from '../data/testes.json'

const testesData = testes
</script>

<style scoped>
header {
  background-color: green;
}
</style>
