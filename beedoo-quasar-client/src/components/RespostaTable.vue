<template>
  <div class="q-pa-md tables-style">
    <q-table title="Respostas" :grid="$q.screen.lt.sm" :rows="respostasData" :columns="respostasColumns"
      :loading="loading" row-key="id">
      <template v-slot:top-right>
        <q-btn color="secondary" v-if="loading" icon="hourglass_empty" label="Loading" />
      </template>
    </q-table>
  </div>
</template>

<script>
import { computed } from 'vue'
import { respostaStore } from '../stores/resposta'

export default {
  setup () {
    const respostas = respostaStore();

    const respostasData = computed(() => respostas.getData)
    const loading = computed(() => respostas.$state.loading)
    respostas.loadData();

    const respostasColumns = [
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
        label: 'Question Id',
        align: 'center',
        field: row => row.question_id,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'is_correct',
        required: true,
        label: 'Is Correct',
        align: 'center',
        field: row => row.is_correct,
        format: val => `${val}`,
        sortable: true
      }];

    const respostasRows = computed(() => respostasData);



    return {
      respostasData,
      loading,
      respostasRows,
      respostasColumns
    }
  }
}
</script>

<style lang="scss" scoped></style>
