<script setup>
import {
  onMounted,
  ref,
  //  watch,
  computed
} from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import ListingComponent from '../components/core/ListingComponent.vue'
console.log('test')

const store = useStore()

const user = computed(() => store.state.user.data)
store.dispatch('getUser')
console.log(user.value.email, 'user')

const randomListings = ref([])
// const fitlered = ref([])

const getRandomListings = async () => {
  try {
    const response = await axios.get('http://localhost:80/api/listing/random').then((res) => {
      return res.data
    })
    randomListings.value = response.data
    console.log(response, 'response')
  } catch (error) {
    console.error('Error fetching random listings:', error)
  }
}

onMounted(getRandomListings)
// watch(() => {
//   // console.log('run')
//   fitlered.value = randomListings.value.filter((listing) => listing.title === 'Random Title 851')
// }, [])
</script>

<template>
  <div>
    <h1>Listings {{ user.email }} image: {{ randomListings }}</h1>
    <div v-for="listing in randomListings" :key="listing.id" class="">
      <ListingComponent :img-url="listing.image" class="mb-8" />
    </div>
  </div>
</template>
