<template>
	<v-app>
		<DefaultBar />
		<DefaultView />
		<DefaultNavigation />
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultNavigation from './NavigationBar.vue'

export default defineComponent({
	components: {
		DefaultBar,
		DefaultView,
		DefaultNavigation
	}
})
</script>
