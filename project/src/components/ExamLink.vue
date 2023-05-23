<template>
    <div>
        <div
            class="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] p-3 flex justify-between"
            @click="$router.push('/exam/' + exam.id)"
        >
            <span class="self-start font-bold">
                {{ exam.title }}
            </span>
            <chevron-right-icon
            size="48"
            class="self-center"
            fill-color="#A3A3A3"
            />
        </div>
    </div>
</template>

<script lang="ts">
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

export default {
    components: {
        ChevronRightIcon,
    },

    props: {
        exam: {
            type: Object,
            required: true,
        },
    }
};
</script>
