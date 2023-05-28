<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Menu />
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
import Menu from "@/components/layout/Menu.vue";
</script>

<style lang="scss">
.content {
  margin-top: 160px;
}
</style>
