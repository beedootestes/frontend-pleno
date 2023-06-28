<template>
	<Header class="shadow-lg py-2 flex flex-col items-center">
		<div class="flex justify-between w-full px-4">
			<img
				:src="logo"
				alt=""
				class="w-36 h-fit cursor-pointer"
				@click="$router.push('/')"
			/>
			<div class="flex justify-between gap-2">
				<div
					class="flex items-center bg-gray-300 rounded-full w-10 h-10 cursor-pointer"
					@click="$router.push('/cart')"
				>
					<cart-icon size="24" class="m-auto" fill-color="#9ca3af" />
				</div>
				<v-btn icon>
					<v-menu min-width="200px" rounded>
						<template v-slot:activator="{ props }">
							<v-btn icon v-bind="props">
								<v-avatar>
									<v-img
										src="https://avatars.githubusercontent.com/u/33555544?v=4"
										alt="BioJJ"
									></v-img>
								</v-avatar>
							</v-btn>
						</template>
						<v-card>
							<v-card-text>
								<div class="mx-auto text-center">
									<v-avatar color="brown">
										<v-img
											src="https://avatars.githubusercontent.com/u/33555544?v=4"
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
			</div>
		</div>
		<search-bar class="w-fit md:mx-auto mt-2 mx-4" />
	</Header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CartIcon from 'vue-material-design-icons/Cart.vue'
import SearchBar from '@/components/SearchBar.vue'
import logo from '@/assets/logo.png'

export default defineComponent({
	components: {
		CartIcon,
		SearchBar
	},
	setup() {
		const user = ref({
			initials: 'BioJJ',
			fullName: 'Jefferson Coelho',
			email: 'bio.jeffcoelho@gmail.com'
		})

		return {
			logo,
			user
		}
	}
})
</script>
