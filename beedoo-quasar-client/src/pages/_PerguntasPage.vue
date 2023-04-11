<template>
    <section class="q-pa-md" style="max-width: 350px">
        <article v-if="loading">
            Carregando....
        </article>

        <article v-else>
            <p v-if="error">{{ error }}</p>

            <q-list v-else v-for="pergunta in perguntasFiltradas" :key="pergunta.id" bordered separator>
                <q-item clickable v-ripple dense exact>
                    <q-item-section>{{ pergunta.title }}</q-item-section>
                    <q-item-section side>
                        <q-icon name="arrow_forward_ios" />
                    </q-item-section>
                </q-item>
            </q-list>
        </article>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { usePerguntaStore } from 'src/stores/_perguntas';

/* const props = defineProps({
    id: {
        type: String,
        required: true
    }
}); */

const { id } = getCurrentInstance().props;

const perguntaStore = usePerguntaStore();

const perguntas = computed(() => perguntaStore.perguntas);

const loading = computed(() => perguntaStore.$state.loading);
const error = computed(() => perguntaStore.$state.error);

const perguntasFiltradas = computed(() => {
    return perguntas.value.filter(p => p.parent_id === id);
});

perguntaStore.fetchPerguntas();
</script>
