<template>
  <section class="q-pa-md q-pa-md q-flex q-items-center q-justify-center">
    <p>Testes Relâmpagos</p>
    <article v-if="loading">Carregando....</article>

    <article v-else>
      <p v-if="error">{{ error }}</p>

      <q-list class="q-mb-lg q-list_test_class" v-else v-for="teste in testes" :key="teste.id" bordered separator>
        <q-item class="q-list_test_class" :to="{ name: 'pergunta', params: { parentId: teste.id } }" clickable v-ripple
          dense exact>
          <q-item-section>{{ teste.title }}</q-item-section>
          <q-item-section side>
            <q-icon name="arrow_forward_ios" />
          </q-item-section>
        </q-item>
      </q-list>
    </article>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useTesteStore } from "src/stores/_testes";

const testeStore = useTesteStore();

const testes = computed(() => testeStore.testes);
const loading = computed(() => testeStore.$state.loading);
const error = computed(() => testeStore.$state.error);

testeStore.fetchTestes();
</script>
