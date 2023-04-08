<template>
    <!-- <div v-if="loading">Carregando...</div> -->
    <q-list bordered separator>
        <q-item v-for="item in store.getData" :key="item.id" clickable v-ripple>
            <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
    </q-list>
</template>

<script>
import { testeStore } from 'src/stores/teste.js'
import { onMounted } from 'vue';

export default ({
    setup () {
        const store = testeStore();

        onMounted(async () => await store.loadData())

        return {
            store,
        }

    }
})
</script>