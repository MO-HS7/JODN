<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark-primary" :class="{ 'rtl': isArabic, 'ltr': !isArabic }">
    <!-- Sidebar -->
    <Sidebar :isSidebarOpen="isSidebarOpen" @close-sidebar="toggleSidebar" />

    <!-- Main Content -->
    <div class="main-content" :style="mainContentStyle">
      <!-- Top Navigation -->
      <TopNavigation @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="p-6">
        <div class="max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Sidebar from './Sidebar.vue'
import TopNavigation from './TopNavigation.vue'
import { useLanguageStore } from '@/stores/language'
import { useTranslation } from '@/composables/useTranslation'

// Initialize language system
const languageStore = useLanguageStore()
const { isArabic } = useTranslation()

// Check if screen is mobile
const isMobile = () => window.innerWidth < 768
const windowWidth = ref(window.innerWidth)

const isSidebarOpen = ref(!isMobile())

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Computed style for main content margin
const mainContentStyle = computed(() => {
  const isMobileScreen = windowWidth.value < 768
  
  if (isMobileScreen) {
    return {
      marginLeft: '0',
      marginRight: '0'
    }
  }
  
  if (isSidebarOpen.value) {
    // Use currentLanguage for full reactivity
    const isRTL = languageStore.currentLanguage === 'ar'
    if (isRTL) {
      // Arabic: sidebar on right, content needs margin-right
      return {
        marginRight: '16rem', // 64 * 0.25rem = 16rem
        marginLeft: '0'
      }
    } else {
      // English: sidebar on left, content needs margin-left
      return {
        marginLeft: '16rem',
        marginRight: '0'
      }
    }
  }
  
  return {
    marginLeft: '0',
    marginRight: '0'
  }
})

// Handle window resize
const handleResize = () => {
  windowWidth.value = window.innerWidth
  
  if (!isMobile()) {
    isSidebarOpen.value = true
  } else {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  languageStore.initializeLanguage()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.main-content {
  transition: margin-left 0.3s ease, margin-right 0.3s ease;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
