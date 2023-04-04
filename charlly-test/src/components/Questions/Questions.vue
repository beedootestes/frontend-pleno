<template>
  <div class="questions">
    <h2 class="questions_title">Perguntas & Respostas 🚀</h2>
    <div class="questions_content">
      <div class="questions_content_beet">
        <p>Beetcoins acumulados: <span>{{ totalBeetcoins }}</span></p>
      </div>
      <p class="questions_content_money">{{ question.text }} <span> ({{ question.beetcoins }} moedas)</span></p>
      <div class="questions_content_input">
        <div
          v-for="(response, index) in responses"
          :key="index"
          :class="[
            'p-3',
            'rounded',
            {'bg-green-400 border-green-500': response.is_correct === true && isClick},
            {'bg-red-400 border-red-500': !response.is_correct && isClick},
            {'bg-gray-100 border-gray-500': response.id === selectedResponse.id && !selectedResponse.is_correct}
          ]"
        >
          <label class="label">
            <input
              class="form-radio"
              type="radio"
              :value="response"
              v-model="selectedResponse"
              @input="selectResponse(response)"
            />
            <span class="questions_content_text">{{ response.text }}</span>
          </label>
        </div>
      </div>
      <div class="pt-5">
        <button class="btn" @click.prevent="checkAnswer">
          Enviar resposta
        </button>
      </div>
      <p v-if="!isValid" class="valid">Precisa selecionar uma opção!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(['check-answer', 'select-response']);

const props = defineProps({
  question: {
    type: Object, default: () => {}
  },
  responses: {
    type: Array, default: () => []
  },
});

const selectedResponse = ref('');
const isValid = ref(true)
const totalBeetcoins = ref(0);
const isClick = ref(false)

const selectResponse = (response) => {
  if (response.is_correct && response !== selectedResponse.value && !isClick.value) {
    totalBeetcoins.value += props.question.beetcoins;
  }
  isClick.value = true
  emit('select-response', response);
  selectedResponse.value = response;
  isValid.value = true
};

const clearSelectedResponse = () => {
  selectedResponse.value = "";
};

const checkAnswer = () => {
  if (!selectedResponse.value) {
    isValid.value = false;
    return
  }
  emit('check-answer');
  clearSelectedResponse();
  isClick.value = false
  isValid.value = true;
};

</script>
<style lang="scss" scoped>
@import './Questions-style.scss';
</style>

