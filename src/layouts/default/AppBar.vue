<template>
	<v-app-bar class="border-b bar" density="prominent">
		<v-sheet class="ma-1 pa-1 d-flex flex-wrap">
			<v-app-bar-title>
				<v-img cover :src="title" width="6rem"></v-img>
			</v-app-bar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-cart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-menu min-width="200px" rounded>
					<template v-slot:activator="{ props }">
						<v-btn icon v-bind="props">
							<v-avatar>
								<v-img
									src="https://cdn.vuetifyjs.com/images/john.jpg"
									alt="John"
								></v-img>
							</v-avatar>
						</v-btn>
					</template>
					<v-card>
						<v-card-text>
							<div class="mx-auto text-center">
								<v-avatar color="brown">
									<v-img
										src="https://cdn.vuetifyjs.com/images/john.jpg"
										alt="John"
									></v-img>
								</v-avatar>
								<h3>{{ user.fullName }}</h3>
								<p class="text-caption mt-1">
									{{ user.email }}
								</p>
								<v-divider class="my-3"></v-divider>
								<v-btn rounded variant="text"> Edit Account </v-btn>
								<v-divider class="my-3"></v-divider>
								<v-btn rounded variant="text"> Disconnect </v-btn>
							</div>
						</v-card-text>
					</v-card>
				</v-menu>
			</v-btn>

			<v-sheet class="flex-1-1-100 pb-2 rounded">
				<form @submit.prevent="">
					<v-text-field variant="outlined" placeholder="Pergunte para o Beebot">
						<template v-slot:prepend-inner>
							<v-icon color="orange" style="width: 100px; margin-right: 10px">
								<v-img cover :src="bee"></v-img
							></v-icon>
						</template>

						<template v-slot:append-inner>
							<v-icon
								color="#FFFF"
								style="
									width: 40px;
									height: 40px;
									border-radius: 50%;
									background-color: orange;
								"
							>
								mdi-microphone</v-icon
							>
						</template>
					</v-text-field>
				</form>
			</v-sheet>
		</v-sheet>
	</v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import title from './../../../imgs/logo2-beedoo.png'
import bee from './../../../imgs/bee-input.png'
const user = ref({
	initials: 'JD',
	fullName: 'John Doe',
	email: 'john.doe@doe.com'
})
</script>

<style scoped>
.bar {
}
</style>
