<template>
  <v-app>
    <v-main>
      <v-container>
        <v-bottom-navigation v-model="selectedItem">
          <v-btn
            v-for="item in menuItems"
            :key="item"
            :value="item"
            :active="selectedItem === item"
            @click="selectedItem = item"
            color="orange"
          >
            <v-icon>{{ itemIcons[item] }}</v-icon>
            {{ item }}
          </v-btn>
        </v-bottom-navigation>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref("Testes");
const menuItems = ["Feed", "Wiki", "Home", "Testes", "Cursos"];
const itemIcons = {
  Feed: "mdi-newspaper-variant-outline",
  Wiki: "mdi-book-open-page-variant-outline",
  Home: "mdi-beehive-outline",
  Testes: "mdi-lightning-bolt-outline",
  Cursos: "mdi-school-outline",
};
</script>

<style>
.v-application__wrap {
  min-height: unset;
  min-height: unset;
}
</style>
