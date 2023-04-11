<template>
    <div>
        <ul v-for="resposta in respostas" :key="resposta.id">
            <li>Id: {{ resposta.id }}</li>
            <li>Resposta: {{ resposta.text }}</li>
            <li>Id da pergunta: {{ resposta.question_id }}</li>
        </ul>

        <div v-if="loading">
            Carregando...
        </div>

        <div v-if="error">
            Ocorreu um erro: {{ error }}
        </div>
    </div>
</template>

<script setup>
import { useRespostaStore } from 'src/stores/_respostas';

// Use a função useStore para instanciar a store
const respostaStore = useRespostaStore();

// Defina os dados reativos do componente
const respostas = respostaStore.respostas;
const loading = respostaStore.$state.loading;
const error = respostaStore.$state.error;

// const respostasFiltradas = respostas.filter(r => r.question_id === 42031)

// Chame a action fetchPerguntas para carregar os dados
respostaStore.fetchRespostas();
</script>
