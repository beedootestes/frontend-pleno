<template>
  <q-page class="flex flex-center">
    <h1>Beedoo Edtech Quiz</h1>
    <!-- <pre>{{ $q.screen }}</pre> -->
    <!-- <h2>Testes</h2>
    <section v-for="teste in testes" :key="teste.id">
      <ul>
        <li>Titulo: {{ teste.title }}</li>
        <li>Artigos: {{ teste.articles }}</li>
        <li>Posts: {{ teste.posts }}</li>
        <li>Beetcoins: {{ teste.beetcoins }}</li>
      </ul>
    </section> -->


    <!-- <h2>Respostas</h2>
    <section v-for="resposta in respostas" :key="resposta.id">
      <ul>
        <li>Resposta: {{ resposta.text }}</li>
        <li>Questão: {{ resposta.question_id }}</li>
        <li>Reposta correta: {{ resposta.is_correct }}</li>
      </ul>
    </section> -->
    <!-- <pre>{{ testes }}</pre> -->
    <!-- <pre>{{ perguntas }}</pre> -->
    <!-- <pre>{{ respostas }}</pre> -->

    <div class="q-pa-md">
      <q-table title="Testes" :grid="$q.screen.lt.sm" :rows="testeRows" :columns="testeColumns" row-key="id" />
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import testes from '../data/testes.json'
import perguntas from '../data/perguntas.json'
import respostas from '../data/respostas.json'

export default {
  setup () {
    const testeColumns = [
      {
        name: 'id',
        required: true,
        label: 'Id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'title',
        required: true,
        label: 'Title',
        align: 'left',
        field: row => row.title,
        format: val => `${val}`,

        sortable: true
      },
      {
        name: 'articles',
        required: true,
        label: 'Article',
        align: 'center',
        field: row => row.articles,
        format: val => `${val}`,

        sortable: true
      },
      {
        name: 'posts',
        required: true,
        label: 'Posts',
        align: 'center',
        field: row => row.posts,
        format: val => `${val}`,

        sortable: true
      },
      {
        name: 'beetcoins',
        required: true,
        label: 'Beetcoins',
        align: 'center',
        field: row => row.beetcoins,
        format: val => `${val}`,

        sortable: true
      }];

    const testeRows = computed(() => testes);

    return {
      testes,
      perguntas,
      respostas,
      testeColumns,
      testeRows
    }
  }
}

</script>
