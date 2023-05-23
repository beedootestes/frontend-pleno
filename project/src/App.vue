<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartIcon from 'vue-material-design-icons/Cart.vue';
import SearchBar from './components/SearchBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <div class="min-h-screen max-h-screen flex flex-col">
    <Header class="shadow-lg py-2 flex flex-col items-center">
      <div class="flex justify-between w-full px-4">
        <img
          src="./assets/logo.png"
          alt=""
          class=" w-36 h-fit cursor-pointer"
          @click="$router.push('/')"
        >
        <div class="flex justify-between gap-2">
          <div
            class="flex items-center bg-gray-300 rounded-full w-10 h-10 cursor-pointer"
            @click="$router.push('/cart')"
          >
            <cart-icon size="24" class="m-auto" fill-color="#9ca3af" />
          </div>
          <img
            src="./assets/perfil.jpeg"
            alt=""
            class="rounded-full w-10 h-10 cursor-pointer"
            @click="$router.push('/profile')"
          >
        </div>
      </div>
      <search-bar class="w-fit md:mx-auto mt-2 mx-4" />
    </Header>
    <RouterView class="flex-1 md:w-full overflow-y-auto" />
    <footer-bar />
  </div>
</template>
