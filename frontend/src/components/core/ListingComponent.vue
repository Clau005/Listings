<script setup>
import { HomeIcon, HomeModernIcon } from '@heroicons/vue/24/outline'

const { imgUrl } = defineProps({
  imgUrl: String
})

console.log(imgUrl, 'imgUrl imgUrl')
</script>

<template>
  <div class="max-w-[100rem] grid grid-cols-2 justify-center rounded-2xl">
    <div class="border-1 relative bg-gray-100 rounded-l-2xl">
      <span class="absolute top-2 left-2 bg-gray-800 text-white w-10 text-center rounded-xl"
        >1/1</span
      >
      <div class="flex align-top">
        <img
          :src="
            `http://localhost:80/${imgUrl}` ||
            'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
          "
          :alt="'alt'"
          class="w-[400px] h-[300px] object-cover rounded-tl-2xl"
        />
        <div class="flex w-[400px] h-[300px] items-center justify-center bg-gray-200">
          <img
            :src="'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'"
            :alt="'alt'"
            class="w-48 h-48 object-cover bg-gray-600"
          />
        </div>
      </div>
      <div class="p-4">
        <p class="text-2xl">£700 pcm</p>
        <p>£170 pw</p>
      </div>
    </div>
    <div class="bg-white p-4 space-y-4 rounded-r-2xl">
      <div>
        <p class="text-2xl font-semibold">
          Potters Cross, Butterknowle, Bishop Auckland, County Durham, DL13
        </p>
      </div>
      <div class="flex gap-2">
        <p class="text-xl">Detached</p>
        <HomeIcon class="h-6 w-6 text-black" />
        <p>2</p>
        <HomeModernIcon class="h-6 w-6 text-black" />
        <p>2</p>
      </div>
      <div>
        <p class="text-gray-500 text-lg">
          An imposing, detached family home offering four bedrooms, master with en-suite facilities.
          Recently redecorated throughout. Lawned gardens and off road parking.
        </p>
      </div>
      <div>
        <p class="text-green-600">Added today by OpenRent, London</p>
      </div>
    </div>
  </div>
</template>
