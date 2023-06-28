<template>
	<v-layout style="height: 56px">
		<v-bottom-navigation v-model="value" active color="gray">
			<v-btn>
				<v-icon>mdi-rss </v-icon>
				Feed
			</v-btn>

			<v-btn>
				<v-icon>mdi-lightbulb-on-10</v-icon>
				Wiki
			</v-btn>

			<v-btn>
				<v-img width="80%" :src="bee" alt="John"></v-img>
			</v-btn>

			<v-btn>
				<v-icon>mdi-flash-outline</v-icon>

				<span>Teste rela...</span>
			</v-btn>

			<v-btn>
				<v-icon>mdi-checkbox-marked-outline</v-icon>

				<span>Cursos</span>
			</v-btn>
		</v-bottom-navigation>
	</v-layout>
</template>

<script lang="ts" setup>
import bee from './../../../imgs/bee.png'
import { ref } from 'vue'

const value = ref(null)
</script>
