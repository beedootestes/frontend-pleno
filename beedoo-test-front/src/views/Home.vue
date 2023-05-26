<template>
  <Header />
  <div class="content">
    <QuickTests />
  </div>
  <Menu />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue'
import QuickTests from '@/components/QuickTests.vue'
</script>

<style scoped>
.content{
  margin-top: 160px;
}
</style>