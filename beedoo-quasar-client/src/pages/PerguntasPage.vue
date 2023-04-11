<template>
    <div>
        <ul v-for="pergunta in perguntas" :key="pergunta.id">
            <li>Pergunta: {{ pergunta.text }}</li>
            <li>Id: {{ pergunta.id }}</li>
            <li>Id do teste: {{ pergunta.parent_id }}</li>
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
import { computed } from 'vue';
import { usePerguntaStore } from 'src/stores/_perguntas';

const perguntaStore = usePerguntaStore();

const perguntas = computed(() => perguntaStore.perguntas)

const loading = computed(() => perguntaStore.$state.loading);
const error = computed(() => perguntaStore.$state.error);

// const perguntasFiltradas = perguntas.filter(p => p.parent_id === 77296)

// Chame a action fetchPerguntas para carregar os dados
perguntaStore.fetchPerguntas();
</script>
