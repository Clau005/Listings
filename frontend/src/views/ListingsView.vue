<script setup>
import {
  onMounted,
  ref,
  //  watch,
  computed
} from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import PropertySearchbox from '../components/core/PropertySearchbox.vue'
// import ListingComponent from '../components/core/ListingComponent.vue'
console.log('test')

const store = useStore()

const user = computed(() => store.state.user.data)
store.dispatch('getUser')
console.log(user.value, 'user')

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
  <div class="w-full">
    <img src="https://media.rightmove.co.uk/hero_image.jpeg" alt="hero-image" class="w-full" />
  </div>
  <div class="mt-12 text-center">
    <h1 class="text-4xl m-8">Welcome {{ user?.name ?? '' }}</h1>
    <p class="text-3xl">Explore out offers and properties</p>
    <!-- <div v-for="listing in randomListings" :key="listing.id" class="">
      <ListingComponent :img-url="listing.image" class="mb-8" />
     </div> -->
  </div>
  <PropertySearchbox
    :heading="'Believe in finding it'"
    :paragraph="'Search properties for sale and to rent in the UK'"
    :redirect-link="'here'"
  />
</template>
