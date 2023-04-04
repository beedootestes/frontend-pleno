<template>
  <v-container>
    <v-card class="d-flex flex-column card elevation-5 grey-lighten-3">
      <v-row>
        <v-col class="ma-2">
          <v-img
            src="../../public/logo-beedoo.png"
            alt="logo-beedoo"
            width="200"
            height="50"
          ></v-img>
        </v-col>

        <v-col class="d-flex flex-row-reverse">
          <v-btn class="ma-2" color="grey-lighten-2" icon="mdi-account-circle"></v-btn>
          <v-btn class="ma-2" color="grey-lighten-2" icon="mdi-cart"></v-btn>
        </v-col>
      </v-row>

      <v-row class="ml-2 mr-2 mb-5">
        <v-text-field
          density="compact"
          variant="solo"
          label="Pergunte para o beebot"
          append-inner-icon="mdi-microphone"
          single-line
          hide-details
        ></v-text-field>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup></script>

<style scoped>
.card {
  border-radius: 0;
}
</style>
