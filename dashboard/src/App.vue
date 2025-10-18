<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-dark-primary">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLanguageStore } from '@/stores/language'

// Initialize language system globally
const languageStore = useLanguageStore()

onMounted(() => {
  languageStore.initializeLanguage()
})
</script>
