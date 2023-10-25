<script setup>
import { useRouter } from 'vue-router'

defineProps(['heading', 'paragraph', 'redirectLink', 'inputValue', 'onInputChange'])

const router = useRouter()
</script>

<template>
  <div class="grid grid-cols-1 w-full place-items-center align-items-center mt-24">
    <div class="flex flex-col max-w-5xl p-12 rounded-md bg-slate-600 text-white gap-10">
      <div class="w-full text-center space-y-4">
        <h1 class="text-4xl font-bold text-green-500">{{ heading }} {{ inputValue }}</h1>
        <p class="text-2xl">{{ paragraph }}</p>
      </div>
      <div class="flex items-center space-x-4">
        <input
          type="text"
          class="min-w-[350px] rounded-lg p-2 text-black text-xl"
          placeholder="e.g: 'York, Darlington, Middlesbrough' "
          v-on:input="onInputChange"
        />

        <!-- <button class="p-2 bg-green-500 text-white font-bold text-xl rounded-lg">For Sale</button> -->
        <button
          class="p-2 bg-green-500 text-white font-bold text-xl rounded-lg"
          @click="
            () => {
              router.push({
                name: 'Rent-By-Location',
                params: {
                  location: inputValue
                }
              })
            }
          "
        >
          To Rent
        </button>
      </div>
    </div>
  </div>
</template>
