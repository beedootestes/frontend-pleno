<template>
    <div v-if="loading">Carregando...</div>
    <q-list v-else bordered separator>
        <q-item v-for="item in testeData" :key="item.id" clickable v-ripple>
            <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
    </q-list>
</template>

<script>
import { testeStore } from '../stores/teste'
import { defineComponent, computed, onMounted } from 'vue';

export default defineComponent({
    setup () {
        const teste = testeStore();
        const testeData = computed(() => teste.getData)
        const loading = computed(() => teste.$state.loading)

        onMounted(() => {
            teste.loadData();
        })

        return { testeData, loading };
    }
})
</script>