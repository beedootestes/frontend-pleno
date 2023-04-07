<template>
  <q-page class="flex flex-center">
    <!-- <h1>Beedoo Edtech Quiz</h1> -->

    <!-- <pre>{{ testes }}</pre> -->
    <!-- <pre>{{ perguntas }}</pre> -->
    <!-- <pre>{{ respostas }}</pre> -->

    <!-- <div class="q-pa-md">
      <q-table title="Testes" :grid="$q.screen.lt.sm" :rows="testeRows" :columns="testeColumns" row-key="id" />
    </div> -->

    <div class="q-pa-md">
      <q-table title="Testes" :grid="$q.screen.lt.sm" :rows="testeData" :columns="testeColumns" :loading="loading"
        row-key="id">
        <template v-slot:top-right>
          <q-btn color="secondary" v-if="loading" icon="hourglass_empty" label="Loading" />
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
// import testes from '../assets/data/testes.json'
// import perguntas from '../assets/data/perguntas.json'
// import respostas from '../assets/data/respostas.json'
import { testeStore } from '../stores/teste'

export default {
  setup () {
    const store = testeStore();

    const testeData = computed(() => store.getData)
    const loading = computed(() => store.$state.loading)
    store.loadData();


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
      },
      {
        name: 'finishin',
        required: true,
        label: 'Finish in',
        align: 'center',
        field: row => row.finishin,
        format: val => `${val}`,
      }];

    const testeRows = computed(() => testeData);



    return {
      testeData,
      loading,
      testeRows,
      testeColumns
    }
  }
}

</script>
