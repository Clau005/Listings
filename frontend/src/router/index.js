import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import RegisterView from '../views/auth-views/RegisterView.vue'
import LoginView from '../views/auth-views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ListingsView from '../views/ListingsView.vue'
import BuyView from '../views/BuyView.vue'
import SellView from '../views/SellView.vue'
import RentView from '../views/RentView.vue'
import ListingCreate from '../views/ListingCreate.vue'
import RentByLocation from '../views/RentByLocation.vue'

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
  },
  {
    path: '/',
    component: DefaultLayout,
    meta: { isGuest: true },
    children: [
      {
        path: '/my-space',
        name: 'MySpace',
        component: HomeView
      },
      {
        path: '/',
        name: 'Listings',
        component: ListingsView
      },
      {
        path: '/buy',
        name: 'Buy',
        component: BuyView
      },
      {
        path: '/sell',
        name: 'Sell',
        component: SellView
      },
      {
        path: '/rent',
        name: 'Rent',
        component: RentView
      },
      {
        path: '/rent/by-location/:location',
        name: 'Rent-By-Location',
        component: RentByLocation
      },
      {
        path: '/listing/create',
        name: 'CreateListing',
        component: ListingCreate
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
