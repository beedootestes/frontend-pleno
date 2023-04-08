<template>
  <q-page>
    <div class="column items-center">
      <h1 class="page-title">Beedoo edtech</h1>

      <div class="q-pa-md" style="max-width: 350px">
        <QList />
      </div>

      <!--   <div class="col">
        <TesteTable />
      </div>

      <div class="col">
        <PerguntaTable />
      </div>

      <div class="col">
        <RespostaTable />
      </div> -->

    </div>
  </q-page>
</template>

<script>
/* import TesteTable from 'src/components/TesteTable.vue';
import PerguntaTable from 'src/components/PerguntaTable.vue';
import RespostaTable from 'src/components/RespostaTable.vue'; */
import QList from 'src/components/QList.vue';

export default {
  components: {
    /*     TesteTable,
        PerguntaTable,
        RespostaTable, */
    QList
  }
}

</script>
