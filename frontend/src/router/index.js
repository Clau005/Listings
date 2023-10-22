import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import RegisterView from '../views/auth-views/RegisterView.vue'
import LoginView from '../views/auth-views/LoginView.vue'

const routes = [
  {
    path: '/auth',
    redirect: '/login',
    component: AuthLayout,
    meta: { isGuest: true },
    name: 'Auth',
    children: [
      {
        path: '/register',
        name: 'Register',
        component: RegisterView
      },
      {
        path: '/login',
        name: 'Login',
        component: LoginView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
