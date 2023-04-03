<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation v-model="value" color="teal" grow>
      <v-btn>
        <v-icon>mdi-rss</v-icon>
        Feed
      </v-btn>

      <v-btn>
        <v-icon>mdi-lightbulb-on-outline</v-icon>
        Wiki
      </v-btn>

      <v-btn>
        <v-icon>mdi-flash-outline</v-icon>
        Teste Relâmpago
      </v-btn>

      <v-btn>
        <v-icon>mdi-checkbox-marked-outline</v-icon>
        Cursos
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup></script>

<style scoped></style>
