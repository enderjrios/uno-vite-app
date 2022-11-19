<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<template>
  <header>
    <div justify-center text-center>
      <nav>  
        <RouterLink class="p-1  decoration-none" p-2 to="/"> <i class="i-logos-vue text-2xl" /> Home</RouterLink>
        <RouterLink class="p-1  decoration-none" p-2 to="/about">About</RouterLink>
        <button mt-2 @click="toggleDark()">
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </button>
     
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>




</style>
