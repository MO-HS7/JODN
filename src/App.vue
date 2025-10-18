<template>
  <div id="app" class="min-h-screen bg-white dark:bg-dark-primary text-gray-800 dark:text-dark-text transition-colors duration-300">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'

// Initialize language and theme systems globally
const languageStore = useLanguageStore()
const themeStore = useThemeStore()

onMounted(() => {
  languageStore.initializeLanguage()
  themeStore.initializeTheme()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
