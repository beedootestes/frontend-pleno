<template>
  <Header class="header-page" />
  <RouterView></RouterView>
  <Footer class="footer-page" />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
