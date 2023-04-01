<script setup>
import { RouterView } from 'vue-router'
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'
</script>

<template>
  <header style="background-color: red; width: auto">
    <CustomHeader />
  </header>

  <body>
    <RouterView />
  </body>

  <footer>
    <CustomFooter />
  </footer>
</template>

<style scoped></style>
