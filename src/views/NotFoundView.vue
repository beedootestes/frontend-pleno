<template>
	<div
		class="mt-6 mx-4 flex items-center justify-center md:max-w-3xl md:mx-auto"
	>
		Sistema em construção

		<AlertIcon />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlertIcon from 'vue-material-design-icons/Alert.vue'

export default defineComponent({
	name: 'NotFound',
	components: {
		AlertIcon
	}
})
</script>
