<template>
    <q-list v-if="store.$state.data.length" bordered separator>
        <q-item v-for="teste in store.$state.data" :key="teste.id" clickable v-ripple>
            <q-item-section>{{ teste.title }}</q-item-section>
        </q-item>
    </q-list>
</template>

<script>
import { useTestesStore } from '../stores/teste';
import { onMounted } from 'vue';

export default ({
    setup () {
        const store = useTestesStore();

        onMounted(async () => await store.loadData())
        console.log(store);
        return {
            store
        }

    }
})
</script>