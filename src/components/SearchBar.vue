<template>
	<label class="border-2 border-gray-300 rounded-full relative block h-11">
		<input
			class="block pl-32 pr-10 h-full rounded-full"
			placeholder="Pergunte para o Beebot"
		/>
		<img
			src="../assets/beebot.png"
			alt=""
			class="absolute inset-y-1 left-0 pl-2 w-28"
		/>
		<mic-icon
			size="24"
			class="absolute inset-y-2 right-0 mr-2 bg-[#E06215] rounded-full flex items-center cursor-pointer"
			fill-color="#fff"
		/>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MicIcon from 'vue-material-design-icons/Microphone.vue'

export default defineComponent({
	components: {
		MicIcon
	}
})
</script>
