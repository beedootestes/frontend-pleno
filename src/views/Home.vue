<template>
	<main class="mt-6 mx-4 md:max-w-3xl md:mx-auto">
		<div class="flex justify-around px-6 pb-1">
			<span
				class="cursor-pointer"
				:class="{
					'text-[#E1681F]': isUnanswered,
					'text-gray-400': !isUnanswered
				}"
				@click="toggleExam(true)"
			>
				Não respondidos
			</span>
			<span
				class="cursor-pointer"
				:class="{
					'text-[#E1681F]': !isUnanswered,
					'text-gray-400': isUnanswered
				}"
				@click="toggleExam(false)"
			>
				Respondidos
			</span>
		</div>
		<div v-if="exams.length > 0">
			<exam-link
				v-for="exam in exams"
				:key="exam.id"
				:exam="exam"
				class="pt-4 cursor-pointer px-1"
			/>
		</div>
		<div v-else class="flex items-center justify-center h-96">
			Nenhum teste encontrado
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useQuizStore } from '../store/QuizStore'

import ExamLink from './../components/ExamLink.vue'

export default defineComponent({
	components: {
		ExamLink
	},
	data() {
		return {
			isUnanswered: true
		}
	},
	computed: {
		...mapState(useQuizStore, ['answered', 'unanswered']),
		exams() {
			return this.isUnanswered ? this.unanswered : this.answered
		}
	},
	methods: {
		toggleExam(value: boolean) {
			this.isUnanswered = value
		}
	}
})
</script>
