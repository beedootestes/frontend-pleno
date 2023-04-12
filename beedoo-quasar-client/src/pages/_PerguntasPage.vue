<template>
    <section class="q-pa-md" style="max-width: 350px">
        <article v-if="state.loading">
            Carregando....
        </article>

        <article v-else>
            <p v-if="state.error">{{ state.error }}</p>

            <q-list v-else v-for="pergunta in state.perguntasFiltradas" :key="pergunta.id" bordered separator>
                <q-item clickable v-ripple dense exact>
                    <q-item-section>{{ pergunta.text }}</q-item-section>
                    <q-item-section side>
                        <q-icon name="arrow_forward_ios" />
                    </q-item-section>
                </q-item>
            </q-list>
        </article>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { usePerguntaStore } from 'src/stores/_perguntas';
import { useRoute } from 'vue-router';

const state = reactive({
    perguntasFiltradas: [],
    loading: false,
    error: null,
    parentId: null,
});

const route = useRoute()
state.parentId = route.params.parentId;
console.log("_PerguntasPage.vue: ", state.parentId);

const perguntaStore = usePerguntaStore();
console.log("_PerguntasPage.vue: ", perguntaStore.perguntasFiltradas);

const fetchData = async () => {
    try {
        await perguntaStore.fetchPerguntasFiltradas(state.parentId);
        state.perguntasFiltradas = perguntaStore.perguntasFiltradas;
        state.loading = perguntaStore.loading;
        state.error = perguntaStore.error;
    } catch (error) {
        console.error(error);
    }
};

fetchData();
</script>
