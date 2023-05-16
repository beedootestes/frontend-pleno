<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CartIcon from 'vue-material-design-icons/Cart.vue'
</script>

<template>
  <Header class="shadow-lg pt-2 px-3.5 items-center">
    <div class="flex justify-between w-full">
      <img src="./assets/logo.png" alt="" class=" w-36 h-fit">
      <div class="flex justify-between gap-1.5">
        <div class="flex items-center bg-gray-300 rounded-full w-10 h-10">
          <cart-icon size="24" class="m-auto" fill-color="#9ca3af" />
        </div>
        <img src="./assets/perfil.jpeg" alt="" class=" rounded-full w-10 h-10">
      </div>
    </div>
  </Header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
