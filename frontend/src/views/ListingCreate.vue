<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import axiosClient from '../axios'
import TButton from '../components/core/TButton.vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const user = computed(() => store.state.user.data)
store.dispatch('getUser')
console.log(user.value.email, 'user')

let model = ref({
  title: '',
  description: '',
  status: 'OPEN',
  image: null,
  image_url: null,
  user_id: user.value.id
})

async function createListing() {
  await axiosClient
    .post('http://localhost:80/api/listing/create', { ...model.value })
    .then((res) => {
      if (res.data) {
        router.go(0)
      }
      console.log('did not create listing')
    })
}

function onImageChoose(ev) {
  const file = ev.target.files[0]

  const reader = new FileReader()
  reader.onload = () => {
    // The field to send on backend and apply validations
    model.value.image = reader.result

    // The field to display here
    model.value.image_url = reader.result
    ev.target.value = ''
  }
  reader.readAsDataURL(file)
}
</script>

<template>
  <form @submit.prevent="createListing" class="animate-fade-in-down">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <!-- Survey Fields -->
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <!-- Image -->
        <div>
          <label class="block text-sm font-medium text-gray-700"> Image </label>
          <div class="mt-1 flex items-center">
            <img
              v-if="model.image_url"
              :src="model.image_url"
              :alt="model.title"
              class="w-64 h-48 object-cover"
            />
            <span
              v-else
              class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[80%] w-[80%] text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <button
              type="button"
              class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <input
                type="file"
                @change="onImageChoose"
                class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
              />
              Change
            </button>
          </div>
        </div>
        <!--/ Image -->

        <!-- Title -->
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            v-model="model.title"
            autocomplete="survey_title"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <!--/ Title -->

        <!-- Description -->
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
          <div class="mt-1">
            <textarea
              id="description"
              name="description"
              rows="3"
              v-model="model.description"
              autocomplete="survey_description"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Describe your survey"
            />
          </div>
        </div>
        <!-- Description -->

        <!-- Status -->
        <!-- <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="status"
              name="status"
              type="checkbox"
              v-model="model.status"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="status" class="font-medium text-gray-700">Active</label>
          </div>
        </div> -->
        <!--/ Status -->
      </div>
      <!--/ Survey Fields -->

      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <TButton>
          <SaveIcon class="w-5 h-5 mr-2" />
          Save
        </TButton>
      </div>
    </div>
  </form>
</template>
