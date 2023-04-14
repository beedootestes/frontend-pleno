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
                        {{ pergunta.text }} ({{ pergunta.beetcoins }} moedas)
                    </p>

                    <q-list class="q-mb-lg">
                        <q-item tag="resposta" class="q-list_answer_class q-mb-sm"
                            v-for="resposta in state.respostasFiltradas" :key="resposta.id" :class="resposta.classe"
                            clickable v-ripple dense exact>

                            <q-item-section avatar>
                                <q-radio v-model="state.checkbox" :val="resposta.id" :key="resposta.id" color="black"
                                    @click="marcarResposta(resposta)">
                                    {{ resposta.text }}
                                </q-radio>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>

                <q-btn class="q-mr-lg q-mb-md float-left" @click="verificarRespostas" color="white" text-color="black"
                    label="Corrigir" />
                <q-btn class="q-ml-lg float-right" @click="limparRepostas" color="white" text-color="black"
                    label="Reiniciar" />
            </article>
        </section>
    </q-page>
</template>

<script setup>
import { reactive } from "vue";
import { usePerguntaStore } from "src/stores/_perguntas";
import { useRespostaStore } from "src/stores/_respostas";
import { useRoute, useRouter } from "vue-router";

const state = reactive({
    perguntasFiltradas: [],
    respostasFiltradas: [],
    respostasSelecionadas: [],
    questionIds: [],
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
// console.log("1 - _PerguntasPage.vue: ", perguntaStore.perguntasFiltradas);

const respostaStore = useRespostaStore();
// console.log("2 - _PerguntasPage.vue: ", respostaStore.respostasFiltradas);


const fetchData = async () => {
    try {
        await perguntaStore.fetchPerguntasFiltradas(state.parentId);

        const questionIds = perguntaStore.perguntasFiltradas.map(pergunta => pergunta.id);
        // console.log("3 - _PerguntasPage.vue | questionIds: ", questionIds);

        const questionIdArray = [];
        // console.log("4 - _PerguntasPage.vue | questionIdArray: ", questionIdArray);

        for (const questionId of questionIds) {
            await respostaStore.fetchRespostasFiltradas(questionId);
            questionIdArray.push(questionId);
            // console.log("5 - _PerguntasPage.vue | questionId: ", questionId);
        }

        state.questionIds = questionIdArray;
        // console.log("6 - _PerguntasPage.vue | questionIdArray :", questionIdArray);

        state.respostasFiltradas = respostaStore.respostasFiltradas;
        // console.log("7 - _PerguntasPage.vue | respostaStore.respostasFiltradas: ", respostaStore.respostasFiltradas);

        state.perguntasFiltradas = perguntaStore.perguntasFiltradas;
        state.loading = perguntaStore.loading || respostaStore.loading;
        state.error = perguntaStore.error || respostaStore.error;
    } catch (error) {
        console.error(error);
    }
};
fetchData();

const verificarRespostas = () => {
    state.respostasSelecionadas = [];

    for (const resposta of state.respostasFiltradas) {
        if (state.checkbox === resposta.id) {
            state.respostasSelecionadas.push(resposta);
        }
    }

    for (const resposta of state.respostasFiltradas) {
        switch (true) {
            case state.respostasSelecionadas.includes(resposta) && state.checkbox:
                resposta.classe = 'resposta_selecionada';
                break;
            case state.respostasSelecionadas.includes(resposta) && resposta.is_correct:
                resposta.classe = 'correta';
                break;
            case state.respostasSelecionadas.includes(resposta) && !resposta.is_correct:
                resposta.classe = 'incorreta';
                break;
            default:
                resposta.classe = '';
                resposta.style = '';
                break;
        }
    }
};

const limparRepostas = () => {
    for (const resposta of state.respostasFiltradas) {
        resposta.classe = '';
        resposta.style = '';
    }
    state.checkbox = null;
}

const marcarResposta = (resposta) => {
    for (const r of state.respostasFiltradas) {
        r.classe = '';
    }
    resposta.classe = 'resposta_selecionada';
};
</script>
