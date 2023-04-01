<script setup>
import { RouterView } from 'vue-router'
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'
</script>

<template>
  <header class="header">
    <CustomHeader />
  </header>

  <RouterView />

  <footer>
    <CustomFooter />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: red;
}
</style>
