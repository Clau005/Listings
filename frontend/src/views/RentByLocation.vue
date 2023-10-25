<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import ListingComponent from '../components/core/ListingComponent.vue'
import { onMounted, ref } from 'vue'

const route = useRoute()
const listings = ref([])
const getListingsByLocation = async () => {
  try {
    const response = await axios
      .get(`http://localhost:80/api/listing/listings-by-location/${route.params.location}`)
      .then((res) => {
        return res.data
      })
    listings.value = response.data
    console.log(response, 'response')
  } catch (error) {
    console.error('Error fetching random listings:', error)
  }
}

onMounted(getListingsByLocation)
</script>
<template>
  <div class="mt-24">
    <h1 class="text-2xl font-bold text-center mb-24">
      Here is what we've found in {{ route.params.location }}
    </h1>
    <div v-for="listing in listings" :key="listing.id" class="">
      <ListingComponent :img-url="listing.image" class="mb-8" />
    </div>
  </div>
</template>
