<script setup>
import { RouterView } from 'vue-router'
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'
</script>

<template>
  <header style="background-color: white">
    <CustomHeader />
  </header>

  <body style="background-color: white">
    <RouterView />
  </body>

  <footer>
    <CustomFooter />
  </footer>
</template>

<style scoped></style>
