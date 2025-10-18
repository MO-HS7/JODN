<template>
  <header 
    :class="headerClasses" 
    class="fixed w-full top-0 z-50 transition-all duration-300"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between py-4 px-4 md:px-0">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.jpg" alt="JODP Logo" class="h-12 w-12 rounded-full object-cover" />
          <div class="hidden md:block">
            <h1 class="text-lg font-bold" :class="scrolled ? 'text-white' : 'text-white'">
              {{ t('organizationName') }}
            </h1>
            <p class="text-xs" :class="scrolled ? 'text-white/80' : 'text-white/90'">
              {{ t('organizationTagline') }}
            </p>
          </div>
        </router-link>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-semibold transition-colors duration-300 hover:text-gold"
            :class="scrolled ? 'text-white' : 'text-white'"
            active-class="text-gold"
          >
            {{ link.name }}
          </router-link>
        </nav>
        
        <!-- CTA Buttons, Language Toggle & Theme Toggle -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Language Toggle Button -->
          <!-- Shows the language TO switch TO, not current language -->
          <button
            @click="toggleLanguage"
            class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
            :title="isArabic ? 'Switch to English' : 'التبديل إلى العربية'"
          >
            <span class="text-sm font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300">
              {{ isArabic ? 'EN' : 'AR' }}
            </span>
          </button>
          
          <ThemeToggle />
          <BaseButton 
            variant="secondary" 
            size="sm"
            @click="navigateTo('/get-involved')"
          >
            {{ t('volunteer') }}
          </BaseButton>
          <BaseButton 
            variant="primary" 
            size="sm"
            @click="navigateTo('/get-involved#donate')"
          >
            {{ t('donate') }}
          </BaseButton>
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-lg transition-colors"
          :class="scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/20'"
          @click="toggleMobileMenu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden bg-brand/95 backdrop-blur-sm border-t border-white/10"
      >
        <nav class="container-custom px-4 py-6 flex flex-col gap-4">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-white font-semibold py-2 hover:text-gold transition-colors"
            active-class="text-gold"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </router-link>
          
          <div class="flex flex-col gap-3 mt-4 pt-4 border-t border-white/20">
            <!-- Language Toggle for Mobile -->
            <!-- Shows the language TO switch TO, not current language -->
            <div class="flex items-center justify-center gap-3 mb-2">
              <span class="text-white/80 text-sm">{{ t('theme') }}:</span>
              <button
                @click="toggleLanguage"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-sm"
                :title="isArabic ? 'Switch to English' : 'التبديل إلى العربية'"
              >
                <span class="text-sm font-bold text-white">
                  {{ isArabic ? 'EN' : 'AR' }}
                </span>
              </button>
              <ThemeToggle />
            </div>
            <BaseButton 
              variant="secondary" 
              size="md"
              full-width
              @click="navigateToAndClose('/get-involved')"
            >
              {{ t('volunteer') }}
            </BaseButton>
            <BaseButton 
              variant="primary" 
              size="md"
              full-width
              @click="navigateToAndClose('/get-involved#donate')"
            >
              {{ t('donate') }}
            </BaseButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import ThemeToggle from '@/components/base/ThemeToggle.vue'
import { useTranslation } from '@/composables/useTranslation'

const router = useRouter()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

// Translation composable
const { t, isArabic, toggleLanguage, currentLanguage } = useTranslation()

// Reactive navigation links based on current language
const navLinks = computed(() => [
  { name: t('home'), path: '/' },
  { name: t('about'), path: '/about' },
  { name: t('projects'), path: '/projects' },
  { name: t('media'), path: '/media' },
  { name: t('reports'), path: '/reports' },
  { name: t('contact'), path: '/contact' }
])

const headerClasses = computed(() => {
  return scrolled.value
    ? 'bg-brand/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent'
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 80
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const navigateTo = (path) => {
  router.push(path)
}

const navigateToAndClose = (path) => {
  router.push(path)
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
