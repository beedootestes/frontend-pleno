<template>
    <main class="mx-4 md:max-w-3xl md:mx-auto flex-1 md:w-full" ref="main">
        <div class="mt-6 grid grid-cols-12">
            <arrow-left-icon class="self-end col-span-1 cursor-pointer" @click="$router.back()" />
            <span class="flex justify-center col-span-11 font-bold">
                {{ exam.title }}
            </span>
        </div>
        <div class="pt-4">
            <div
                class="border-2 rounded-full flex items-center w-fit py-px px-2"
                :class="{
                    'border-green-600': exam.finishin,
                    'border-gray-400': !exam.finishin,
                }"
            >
                <currency-usd-icon size="20" fill-color="#ffba2c" />
                <span v-if="exam.finishin">
                    {{ exam.score }}/
                </span>
                <span>
                    {{ exam.beetcoins }}
                </span>
            </div>
        </div>
        <div class="flex justify-between text-xs py-4">
            <span class="border-2 rounded-full p-px">
                BeeFree - Orgulho LGBTQIA+
            </span>
            <span class="border-2 rounded-full p-px">
                Conheça mais do Beedoo
            </span>
        </div>
        <hr class="border">
        <div
            v-for="question in exam.questions"
            :key="question.id"
            class="py-4"
        >
            <div class="flex gap-1 items-center">
                <div class="bg-[#EDC400] rounded-full p-2">
                    <help-icon size="25" fill-color="#FFFFFF"/>
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
                        'border-green-600': exam.finishin && alternative.is_correct && answers[question.id] == alternative.id,
                        'border-red-400': exam.finishin && !alternative.is_correct && answers[question.id] == alternative.id,
                    }"
                    @click="selectAlternative(question.id, alternative.id)"
                >
                    {{ alternative.text }}
                    <div
                        v-if="exam.finishin"
                        class="rounded-full border-2 flex items-center h-fit"
                        :class="{
                            'border-green-600': alternative.is_correct,
                            'border-red-400': !alternative.is_correct,
                        }"
                    >
                        <check-icon v-if="alternative.is_correct" size="24" fill-color="#228B21" />
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
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
import CurrencyUsdIcon from 'vue-material-design-icons/CurrencyUsd.vue';
import HelpIcon from 'vue-material-design-icons/Help.vue';
import AlphaXIcon from 'vue-material-design-icons/AlphaX.vue';
import CheckIcon from 'vue-material-design-icons/Check.vue';
import { mapState } from 'pinia';
import { useExamStore } from '../store/ExamStore';

export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },

    components: {
        ArrowLeftIcon,
        CurrencyUsdIcon,
        HelpIcon,
        AlphaXIcon,
        CheckIcon,
    },

    data() {
        return {
            exam: {} as any,
            answers: {} as Record<number, number>,
            totalBeetcoins: 0,
        };
    },

    created() {
        this.$watch(
            () => this.$route.params.id,
            () => {
                this.exam = this.show(this.id);
                this.answers = this.exam?.answers || {};
            },
            { immediate: true }
        )
    },

    computed: {
        ...mapState(useExamStore, ['show', 'setFinishin', 'setScore', 'setAnswers']),
    },

    methods: {
        selectAlternative(questionId:number, alternativeId: number) {
            if (this.exam.finishin) {
                return;
            }

            this.answers[questionId] = alternativeId;
        },

        computeTotalBeetcoins() {
            const totalBeetcoins = Object.entries(this.answers).reduce(
                (total, answer) => {
                    const question = this.exam.questions.find(
                        (question: any) => question.id == answer[0]
                    );
                    const alternative = question.alternatives.find(
                        (alternative: any) => alternative.id == answer[1]
                    );

                    const beetcoins = alternative?.is_correct ? question?.beetcoins : 0;

                    return total + beetcoins;
                },
                0
            );

            this.setScore(this.id, totalBeetcoins);
            this.setFinishin(this.id, true);
            this.setAnswers(this.id, this.answers);

            this.$refs.main.scrollTop = {
                behavior: 'smooth',
                top: 0,
            };
        },
    }
}
</script>
