<template>
  <q-page>
    <div class="column items-center">
      <h1 class="page-title">Beedoo edtech</h1>

      <div class="q-pa-md" style="max-width: 350px">
        <MyQList />
      </div>
    </div>
  </q-page>
</template>

<script>
import MyQList from 'src/components/MyQList.vue';

export default {
  components: {
    MyQList
  }
}

</script>
