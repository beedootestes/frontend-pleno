<template>
  <v-card class="ml-4 mr-4 mt-1 elevation-5">
    <v-row>
      <v-col class="mt-2">
        <v-text class="ml-4 text-subtitle-2 font-weight-bold">{{ title }}</v-text>
      </v-col>
      <v-col cols="3">
        <div class="d-flex justify-end align-self-start">
          <v-btn
            @click="goToQuestionPage()"
            class="ma-2"
            size="large"
            variant="text"
            icon="mdi-chevron-right"
            color="grey"
          />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { useitemId } from '../stores/ItemIdStore.js'
import { useRouter } from 'vue-router'

const store = useitemId()
const router = useRouter()

function goToQuestionPage() {
  router.push('testes')

  store.setItemId(props.itemId)
}

const props = defineProps({
  title: String,
  itemId: Number
})
</script>

<style scoped></style>
