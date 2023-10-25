<script setup>
import { ref } from 'vue'
import PropertySearchbox from '../components/core/PropertySearchbox.vue'

const searchValue = ref()

const onInputChange = (e) => {
  searchValue.value = e.target.value
}
console.log('test')

// watchEffect(() => {
//   console.log(searchValue, 'searValue')
// }, [searchValue])
</script>

<template>
  <div>
    <h1>Rent Pageee {{ searchValue }}</h1>
    <PropertySearchbox
      :heading="'UK property to rent'"
      :paragraph="'Search using town name'"
      :redirect-link="'by-location'"
      :input-value="searchValue"
      :onInputChange="onInputChange"
    />
  </div>
</template>
