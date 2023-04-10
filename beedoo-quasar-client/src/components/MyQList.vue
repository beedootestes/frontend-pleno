<template>
    <div class="q-pa-md" style="max-width: 350px">
        <q-list v-for="item in testData" :key="item.id" bordered separator>
            <q-item clickable v-ripple>
                <q-item-section>{{ item.title }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
import { testeStore } from 'src/stores/teste.js'
import { onMounted, computed } from 'vue';

export default ({
    setup () {
        const store = testeStore();

        onMounted(() => {
            store.loadData();
        });

        const testData = computed(() => store.getData);
        const loading = computed(() => store.$state.loading);

        return { testData, loading }
    }
})
</script>