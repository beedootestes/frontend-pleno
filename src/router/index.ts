// Composables
import { createRouter, createWebHistory } from 'vue-router'

import ExamView from '../views/ExamView.vue'

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/default/Default.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/Home.vue')
			},
			{
				path: '/exam/:id',
				name: 'exam',
				component: ExamView,
				props: true
			},
			{
				path: '/:pathMatch(.*)*',
				name: 'not-found',
				component: () => import('../views/NotFoundView.vue')
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
