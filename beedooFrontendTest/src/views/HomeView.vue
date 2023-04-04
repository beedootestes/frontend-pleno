<template>
  <v-list v-for="item in testesData" :key="item.id" :title="item.title" lines="one">
    <CardTestes :title="item.title" :itemId="item.id" />
  </v-list>
</template>

<script setup>
import testes from '../data/testes.json'
import CardTestes from '../components/CardTestes.vue'

const testesData = testes
</script>

<style scoped>
header {
  background-color: green;
}
</style>
