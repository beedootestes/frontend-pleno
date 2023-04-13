<template>
    <q-list dense>
        <q-item clickable v-ripple v-for="resposta in respostasFiltradas" :key="resposta.id">
            <q-item-section>{{ resposta.texto }}</q-item-section>
        </q-item>
    </q-list>
</template>

<script setup>
import { computed } from 'vue';
import { useRespostaStore } from 'src/stores/_respostas';

const respostaStore = useRespostaStore();

const respostasFiltradas = computed(() => {
    return respostaStore.respostasFiltradas;
});

</script>