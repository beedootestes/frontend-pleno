<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="(item, index) in newArrayOfQuestionsAndAnswers" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ item.pergunta.text }}</v-list-item-title>
          <v-list-item-subtitle
            v-for="(resposta, respostaIndex) in item.respostas"
            :key="respostaIndex"
          >
            {{ resposta.text }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script setup>
import perguntasData from '../data/perguntas.json'
import respostasData from '../data/respostas.json'

const newArrayOfQuestions = perguntasData.filter((element) => element.parent_id === 54789)

const newArrayOfQuestionsAndAnswers = newArrayOfQuestions.map((pergunta) => {
  const respostas = respostasData.filter((resposta) => resposta.question_id === pergunta.id)
  return { pergunta, respostas }
})

// console.log('noov array de perguntas e respostas => ', newArrayOfQuestionsAndAnswers)
</script>
<style scoped></style>
