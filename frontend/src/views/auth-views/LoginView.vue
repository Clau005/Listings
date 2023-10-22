<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import store from '../../store'
const user = {
  email: '',
  password: ''
}

const router = useRouter()
let errorMessage = ref('')

const handleLogin = (event) => {
  event.preventDefault()
  store
    .dispatch('login', user)
    .then(() => {
      router.push({
        name: 'Dashboard'
      })
    })
    .catch((error) => {
      errorMessage.value = error.response.data.message || error.response.data.error
    })
}
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
    <form class="space-y-6" @submit="handleLogin">
      <div class="flex flex-col w-full">
        <div class="">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="block w-full rounded-t-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Email Address"
            v-model="user.email"
          />
        </div>

        <div class="">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="block w-full rounded-b-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="password"
            v-model="user.password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
    <p class="mt-6">
      Don't have an account?
      <router-link :to="{ name: 'Register' }" class="text-indigo-600"> register </router-link>
    </p>
  </div>
</template>
