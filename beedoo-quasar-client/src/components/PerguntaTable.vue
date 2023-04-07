<template>
  <div class="q-pa-md tables-style">
    <q-table title="Perguntas" :grid="$q.screen.lt.sm" :rows="perguntaData" :columns="perguntasColumns" :loading="loading"
      row-key="id">
      <template v-slot:top-right>
        <q-btn color="secondary" v-if="loading" icon="hourglass_empty" label="Loading" />
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed } from 'vue'
import { perguntaStore } from '../stores/pergunta'

export default {
  setup () {
    const perguntas = perguntaStore();

    const perguntaData = computed(() => perguntas.getData)
    const loading = computed(() => perguntas.$state.loading)
    perguntas.loadData();

    const perguntasColumns = [
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
        name: 'text',
        required: true,
        label: 'Text',
        align: 'left',
        field: row => row.text,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'parent_id',
        required: true,
        label: 'Parent Id',
        align: 'center',
        field: row => row.parent_id,
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

    const perguntasRows = computed(() => perguntaData);

    return {
      perguntaData,
      loading,
      perguntasRows,
      perguntasColumns
    }
  }
}
</script>

<style lang="scss" scoped></style>
