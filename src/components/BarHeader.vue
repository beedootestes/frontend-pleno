<template>
  <div class="bar-header">
    <img class="beedoo-logo" src="../assets/beedoo-logo.png" alt="Beedoo logo" />

    <div class="cart-profile">
      <div class="cart-container">
        <CartIcon :size="35" />
      </div>
      <figure class="profile-image">
        <img src="/profile.jpg" alt="Imagem perfil" />
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartIcon from 'vue-material-design-icons/Cart.vue';
</script>

<style scoped lang="scss">
  .bar-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .beedoo-logo {
      display: block;
      height: 54px;
    }

    .cart-profile {
      display: flex;

      .cart-container {
        border-radius: 100%;
        box-sizing: border-box;
        padding: 13px;
        display: flex;
        align-items: center;
        background-color: $color-inactive;
        margin-right: 15px;
      }

      .profile-image {
        height: 65px;
        width: 65px;
        box-sizing: border-box;
        border-radius: 100%;
        margin: unset;

        > img {
          border-radius: 100%;
          height: 65px;
          width: 65px;
          object-fit: cover;
          display: block;
          border: 2px solid $color-inactive;
        }
      }
    }
  }
</style>