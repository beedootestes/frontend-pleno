<template>
  <div class="search-bar">
    <img src="../assets/beebot.png" alt="Beebot logo">
    <input type="text" placeholder="Pergunte para o Beebot" />
    <div class="mic-container">
      <MicIcon :size="32" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MicIcon from 'vue-material-design-icons/Microphone.vue';

</script>
<style scoped lang="scss">
  .search-bar {
    width: 100%;
    border: 2px solid #dadada;
    border-radius: 31px;
    display: flex;
    align-items: center;
    padding: 5px 13px 5px 20px;
    box-sizing: border-box;

    input {
      background-color: white;
      outline: none;
      color: #000;
      border: none;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .mic-container {
      background-color: $color-active;
      border-radius: 50%;
      box-sizing: border-box;
      color: white;
      padding: 7px;
    }
  }
</style>