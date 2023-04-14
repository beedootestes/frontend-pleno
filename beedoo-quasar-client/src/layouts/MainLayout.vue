<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated reveal>
      <q-toolbar>
        <q-toolbar-title>
          <img alt="Quasar logo" src="~assets/beedoo-logo-dark.png" style="width: 120px" />
        </q-toolbar-title>
        <q-btn round>
          <q-avatar size="42px">
            <img src="~assets/profile-logo.png">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="row justify-center">
      <router-view />
    </q-page-container>

    <q-footer elevated class="text-dark row justify-center mobile-only desktop-hide">
      <q-toolbar class="row justify-around align-center gap-mg">
        <div class="row justify-around align-center">
          <q-icon @click="feedPage" class="q-mr-lg q-icon-nav" size="35px" name="rss_feed" />
          <q-icon @click="wikiPage" class="q-ml-lg q-icon-nav" name="tips_and_updates" size="35px" />
        </div>
        <q-space />
        <img src="~assets/ic_Beebot.png" alt="Beeboot photo" style="width: 68px; position: absolute; padding-top: 12px;">
        <div>
          <q-icon @click="testPage" class="q-mr-lg q-icon-nav" name="flash_on" size="35px" />
          <q-icon @click="cursosPage" class="q-ml-lg q-icon-nav" name="check_box" size="35px" />
        </div>

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const testPage = () => {
  router.push({
    name: "home"
  });
};
const cursosPage = () => {
  window.location.href = "https://beedoo.com.br/funcionalidades/#cursosetrilhas";
}

const wikiPage = () => {
  window.location.href = "https://beedoo.com.br/funcionalidades/#wiki"
}

const feedPage = () => {
  window.location.href = "https://beedoo.com.br/funcionalidades/#feed"
}
</script>
