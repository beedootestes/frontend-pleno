<template>
	<main class="mx-4 md:max-w-3xl md:mx-auto flex-1 md:w-full" ref="main">
		<div class="mt-6 grid grid-cols-12">
			<arrow-left-icon
				class="self-end col-span-1 cursor-pointer"
				@click="$router.back()"
			/>
			<span class="flex justify-center col-span-11 font-bold">
				{{ exam.title }}
			</span>
		</div>
		<div class="pt-4">
			<div
				class="border-2 rounded-full flex items-center w-fit py-px px-2"
				:class="{
					'border-green-600': exam.finishin,
					'border-gray-400': !exam.finishin
				}"
			>
				<currency-usd-icon size="20" fill-color="#ffba2c" />
				<span v-if="exam.finishin"> {{ exam.score }}/ </span>
				<span>
					{{ exam.beetcoins }}
				</span>
			</div>
		</div>
		<div class="flex justify-between text-xs py-4">
			<span class="border-2 rounded-full p-px">
				BeeFree - Orgulho LGBTQIA+
			</span>
			<span class="border-2 rounded-full p-px"> Conheça mais do Beedoo </span>
		</div>
		<hr class="border" />
		<div v-for="question in exam.questions" :key="question.id" class="py-4">
			<div class="flex gap-1 items-center">
				<div class="bg-[#EDC400] rounded-full p-2">
					<help-icon size="25" fill-color="#FFFFFF" />
				</div>
				<span class="text-sm text-gray-600">
					{{ question.text }}
				</span>
				<span class="text-xs text-gray-400">
					({{ question.beetcoins }}) moedas
				</span>
			</div>
			<div>
				<div
					v-for="alternative in question.alternatives"
					:key="alternative.id"
					class="flex justify-between items-center border-2 border-gray-400 rounded-full p-2 my-2 cursor-pointer bg-gray-200 text-sm"
					:class="{
						'bg-yellow-200': answers[question.id] == alternative.id,
						'bg-gray-200 text-sm': answers[question.id] != alternative.id,
						'border-green-600':
							exam.finishin &&
							alternative.is_correct &&
							answers[question.id] == alternative.id,
						'border-red-400':
							exam.finishin &&
							!alternative.is_correct &&
							answers[question.id] == alternative.id
					}"
					@click="selectAlternative(question.id, alternative.id)"
				>
					{{ alternative.text }}
					<div
						v-if="exam.finishin"
						class="rounded-full border-2 flex items-center h-fit"
						:class="{
							'border-green-600': alternative.is_correct,
							'border-red-400': !alternative.is_correct
						}"
					>
						<check-icon
							v-if="alternative.is_correct"
							size="24"
							fill-color="#228B21"
						/>
						<alpha-x-icon v-else size="24" fill-color="#FF0000" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-end">
			<div
				class="mb-4 border-2 w-fit p-2 rounded-full bg-green-400 cursor-pointer"
				@click="computeTotalBeetcoins()"
			>
				Finalizar
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import CurrencyUsdIcon from 'vue-material-design-icons/CurrencyUsd.vue'
import HelpIcon from 'vue-material-design-icons/Help.vue'
import AlphaXIcon from 'vue-material-design-icons/AlphaX.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import { useQuizStore } from '../store/QuizStore'

export default defineComponent({
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	components: {
		ArrowLeftIcon,
		CurrencyUsdIcon,
		HelpIcon,
		AlphaXIcon,
		CheckIcon
	},
	setup(props) {
		const exam = ref<any>({})
		const answers = ref<Record<number, number>>({})
		const totalBeetcoins = ref(0)

		const { show, setFinishin, setScore, setAnswers } = useQuizStore()

		watch(
			() => props.id,
			() => {
				exam.value = show(props.id)
				answers.value = exam.value?.answers || {}
			},
			{ immediate: true }
		)

		const selectAlternative = (questionId: number, alternativeId: number) => {
			if (exam.value.finishin) {
				return
			}

			answers.value[questionId] = alternativeId
		}

		const computeTotalBeetcoins = () => {
			totalBeetcoins.value = Object.entries(answers.value).reduce(
				(total, answer) => {
					const question = exam.value.questions.find(
						(question: any) => question.id == answer[0]
					)
					const alternative = question.alternatives.find(
						(alternative: any) => alternative.id == answer[1]
					)

					const beetcoins = alternative?.is_correct ? question?.beetcoins : 0

					return total + beetcoins
				},
				0
			)

			setScore(props.id, totalBeetcoins.value)
			setFinishin(props.id, true)
			setAnswers(props.id, answers.value)

			const mainElement = document.getElementById('main')
			if (mainElement) {
				mainElement.scrollTop = 0
			}
		}

		return {
			exam,
			answers,
			totalBeetcoins,
			selectAlternative,
			computeTotalBeetcoins
		}
	}
})
</script>
