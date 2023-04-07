<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="(item, index) in newArrayOfQuestionsAndAnswers" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            <v-icon>mdi-help-circle</v-icon>
            {{ item.pergunta.text }}
          </v-list-item-title>
          <v-list-item-subtitle
            v-for="(resposta, respostaIndex) in item.respostas"
            :key="respostaIndex"
            class="margin"
          >
            <div class="border">
              {{ resposta.text }}
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script setup>
import perguntasData from '../data/perguntas.json'
import respostasData from '../data/respostas.json'
import { useitemId } from '../stores/ItemIdStore.js'

const store = useitemId()

const newArrayOfQuestions = perguntasData.filter((element) => element.parent_id === store.itemId)

const newArrayOfQuestionsAndAnswers = newArrayOfQuestions.map((pergunta) => {
  const respostas = respostasData.filter((resposta) => resposta.question_id === pergunta.id)
  return { pergunta, respostas }
})

newArrayOfQuestionsAndAnswers.forEach((item) => {
  item.respostas.forEach((resposta) => {
    resposta.selecionada = false
  })
})
</script>
<style scoped>
.border {
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
}
.margin {
  margin: 20px;
}
</style>
