<template>
    <section class="q-pa-md q-pa-md q-flex q-items-center q-justify-center" style="max-width: 350px">
        <article v-if="state.loading">
            Carregando....
        </article>

        <article v-else>
            <p v-if="state.error">{{ state.error }}</p>

            <q-list class="q-mb-lg" v-else v-for="pergunta in state.perguntasFiltradas" :key="pergunta.id" bordered
                separator>
                <q-item clickable v-ripple dense exact>
                    <q-item-section>Pergunta: {{ pergunta.text }}</q-item-section>
                </q-item>

                <template v-if="state.respostasFiltradas.length">
                    <q-item v-for="resposta in state.respostasFiltradas" :key="resposta.id" clickable v-ripple dense exact>
                        <q-item-section>Resposta: {{ resposta.text }}</q-item-section>
                    </q-item>
                </template>
            </q-list>
        </article>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { usePerguntaStore } from 'src/stores/_perguntas';
import { useRespostaStore } from 'src/stores/_respostas';
import { useRoute } from 'vue-router';

const state = reactive({
    perguntasFiltradas: [],
    respostasFiltradas: [],
    loading: false,
    error: null,
    parentId: null,
    questionId: null,
});

const route = useRoute()
state.parentId = route.params.parentId;
// console.log("_PerguntasPage.vue: ", state.parentId);

const perguntaStore = usePerguntaStore();
// console.log("_PerguntasPage.vue: ", perguntaStore.perguntasFiltradas);

const respostaStore = useRespostaStore();
// console.log("_PerguntasPage.vue: ", respostaStore.respostasFiltradas);


const fetchData = async () => {
    try {
        await perguntaStore.fetchPerguntasFiltradas(state.parentId);

        const questionIds = perguntaStore.perguntasFiltradas.map(pergunta => pergunta.id);

        for (const questionId of questionIds) {
            await respostaStore.fetchRespostasFiltradas(questionId);
        }

        state.perguntasFiltradas = perguntaStore.perguntasFiltradas;
        state.respostasFiltradas = respostaStore.respostasFiltradas;
        state.loading = perguntaStore.loading || respostaStore.loading;
        state.error = perguntaStore.error || respostaStore.error;
    } catch (error) {
        console.error(error);
    }
};

fetchData();
</script>
