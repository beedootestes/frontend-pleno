import { createRouter, createWebHistory, RouteLocationNormalized, Router, RouteRecordRaw } from "vue-router";
import Exams from "../views/ExamsPage.vue";
import QuestionsPage from "../views/QuestionsPage.vue";
import { useExamsStore } from "../store/ExamsStore.ts";
import NotFoundPage from "../views/NotFoundPage.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'Exams'
  },
  {
    path: '/exams',
    name: 'Exams',
    component: Exams
  },
  {
    path: '/questions/:examId',
    name: 'Questions',
    component: QuestionsPage,
    beforeEnter: (to: RouteLocationNormalized): void => {
      const examsStore = useExamsStore()
      examsStore.getQuestions(to.params.examId)
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage
  }
]

const index: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default index