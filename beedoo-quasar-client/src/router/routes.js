
const routes = [
  /*   {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/IndexPage.vue') }
      ]
    }, */
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TestesPage.vue') }
    ]
  },
  /*   {
      path: '/perguntas',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/PerguntasPage.vue') }
      ]
    },  */
  {
    path: '/pergunta/:id',
    name: 'pergunta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/_PerguntasPage.vue') }
    ],
    props: true
  },
  {
    path: '/resposta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RespostasPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
