<template>
  <div class="q-pa-md tables-style">
    <q-table title="Testes" :grid="$q.screen.lt.sm" :rows="testeData" :columns="testeColumns" :loading="loading"
      row-key="id">
      <template v-slot:top-right>
        <q-btn color="secondary" v-if="loading" icon="hourglass_empty" label="Loading" />
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed } from 'vue'
import { testeStore } from '../stores/teste'

export default {
  setup () {
    const teste = testeStore();
    const testeData = computed(() => teste.getData)
    const loading = computed(() => teste.$state.loading)
    teste.loadData();


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

<style lang="scss" scoped></style>
