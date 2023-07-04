<template>
  <section class="header">
    <BarHeader class="header-bar" />
    <SearchBar />
  </section>
</template>

<script setup lang="ts">
import BarHeader from "./BarHeader.vue";
import SearchBar from "./SearchBar.vue";
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid $color-border;
    box-shadow: 0 15px 10px -15px $shadow;
    box-sizing: border-box;
    padding: 20px 25px 15px 25px;

    .header-bar {
      margin-bottom: 15px;
    }
  }
</style>