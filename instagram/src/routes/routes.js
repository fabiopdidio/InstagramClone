import { createRouter, createWebHistory } from 'vue-router'

// Importar todas telas/ componentes

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'

// Criar roteamento

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

// Exportar router
export default router
