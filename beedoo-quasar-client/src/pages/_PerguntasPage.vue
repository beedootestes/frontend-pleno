<template>
    <q-page padding>
        <section class="q-pa-md q-pa-md q-flex q-items-center q-justify-center">
            <p>Perguntas</p>
            <q-icon @click="goToHome" class="nav_arrow" name="keyboard_backspace" size="30px" />

            <article v-if="state.loading">Carregando....</article>

            <article v-else>
                <p v-if="state.error">{{ state.error }}</p>

                <div class="q-mb-lg" v-else v-for="pergunta in state.perguntasFiltradas" :key="pergunta.id" bordered
                    separator>
                    <p class="q-mb-sm q-list_answer_title">
                        <q-icon name="help" size="35px" style="color: #eec400" />
                        pergunta id: {{ pergunta.id }} | {{ pergunta.text }} ({{ pergunta.beetcoins }} moedas)
                    </p>

                    <q-list class="q-mb-lg">
                        <q-item tag="resposta" class="q-list_answer_class q-mb-sm"
                            v-for="resposta in state.respostasFiltradas" :key="resposta.id" :class="{
                                'correta': resposta.is_correct,
                                'incorreta': !resposta.is_correct,
                            }" clickable v-ripple dense exact>

                            <q-item-section avatar>
                                <q-radio v-model="state.checkbox" :val="resposta.id" />
                            </q-item-section>

                            <q-item-section>resposta id: {{ resposta.id }} | texto: {{ resposta.text }} | parent_id:{{
                                resposta.question_id }}
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </article>
        </section>
    </q-page>
</template>
pomf2.lain.la

<script setup>
import { reactive } from "vue";
import { usePerguntaStore } from "src/stores/_perguntas";
import { useRespostaStore } from "src/stores/_respostas";
import { useRoute, useRouter } from "vue-router";

const state = reactive({
    perguntasFiltradas: [],
    respostasFiltradas: [],
    respostasPorPergunta: [],
    loading: false,
    error: null,
    parentId: null,
    questionId: null,
    checkbox: null,
});


const route = useRoute();
state.parentId = route.params.parentId;
// console.log("_PerguntasPage.vue: ", state.parentId);

const router = useRouter();
const goToHome = () => {
    router.push({
        name: "home"
    });
};

const perguntaStore = usePerguntaStore();
// console.log("_PerguntasPage.vue: ", perguntaStore.perguntasFiltradas);

const respostaStore = useRespostaStore();
// console.log("_PerguntasPage.vue: ", respostaStore.respostasFiltradas);


const fetchData = async () => {
    try {
        await perguntaStore.fetchPerguntasFiltradas(state.parentId);

        const questionIds = perguntaStore.perguntasFiltradas.map(pergunta => pergunta.id);
        console.log(questionIds);

        const respostasPorPergunta = {};

        for (const questionId of questionIds) {
            await respostaStore.fetchRespostasFiltradas(questionId);
            state.questionId = questionId;
            // console.log("questionId | _PerguntasTeste.vue: ", questionId);


            respostasPorPergunta[questionId] = respostaStore.respostasFiltradas;

        }

        state.perguntasFiltradas = perguntaStore.perguntasFiltradas;
        state.respostasFiltradas = respostasPorPergunta;
        console.log(state.respostasFiltradas);
        state.loading = perguntaStore.loading || respostaStore.loading;
        state.error = perguntaStore.error || respostaStore.error;
    } catch (error) {
        console.error(error);
    }
};

fetchData();
</script>
