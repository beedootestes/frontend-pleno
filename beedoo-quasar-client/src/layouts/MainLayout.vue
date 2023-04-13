<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated reveal>
      <q-toolbar>
        <q-toolbar-title>
          <img alt="Quasar logo" src="~assets/logo-beedoo.png" style="width: 120px">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="row justify-center ">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>
