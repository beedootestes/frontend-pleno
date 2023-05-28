<template>
  <div class="header">
    <div class="logo-wrapper">
      <img src="@/assets/logo-beedoo-light.png" class="logo" />
      <div class="user-picture">
        <img src="@/assets/user.jpg" class="user-picture-img" />
      </div>
    </div>
    <div class="input-group">
      <input type="text" placeholder="Pergunte para o Beebot" class="input" />
      <v-btn
        color="orange"
        icon="mdi-microphone"
        class="input-icon elevation-0"
        size="small"
      ></v-btn>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  height: 160px;
  width: 100%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  padding: 16px 24px;
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    .user-picture-img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      object-fit: cover;
    }
  }
  .logo {
    width: 160px;
  }
  .input-group {
    border: 2px solid #ffbc84;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input {
      padding: 8px 16px;
      margin: 4px 0;
    }
    .input-icon {
      box-shadow: 0;
      margin-left: 2px;
    }
    :deep(.v-btn) {
      margin: 0 4px;
    }
    :deep(.v-icon) {
      color: white;
    }
  }
}
</style>
