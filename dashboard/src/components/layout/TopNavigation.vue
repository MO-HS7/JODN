<template>
  <header class="bg-white dark:bg-dark-secondary shadow-sm border-b border-gray-200 dark:border-dark-border" :class="{ 'rtl': isArabic, 'ltr': !isArabic }">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Menu toggle and breadcrumb (Right side in RTL/Arabic, next to sidebar) -->
      <div class="flex items-center space-x-4" :class="{ 'space-x-reverse': isArabic }">
        <button
          @click="$emit('toggle-sidebar')"
          class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary transition-colors duration-200"
        >
          <Bars3Icon class="h-6 w-6" />
        </button>
        
        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400" :class="{ 'space-x-reverse': isArabic }">
          <span>{{ t('dashboard') }}</span>
          <ChevronLeftIcon class="h-4 w-4" :class="{ 'rotate-180': isArabic }" />
          <span class="text-gray-900 dark:text-white font-medium">{{ currentPageTitle }}</span>
        </div>
      </div>

      <!-- Search, notifications, and user menu (Left side in RTL/Arabic) -->
      <div class="flex items-center space-x-4" :class="{ 'space-x-reverse': isArabic }">
        <!-- Search -->
        <div class="relative">
          <div class="absolute inset-y-0 flex items-center pointer-events-none" :class="isArabic ? 'left-0 pl-3' : 'right-0 pr-3'">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            :placeholder="t('search')"
            class="block w-full py-2 border border-gray-300 dark:border-dark-border rounded-lg leading-5 bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            :class="isArabic ? 'pl-10 pr-3' : 'pl-10 pr-3'"
          />
        </div>

        <!-- Notifications -->
        <div class="relative">
          <button
            @click="toggleNotifications"
            class="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors duration-200"
          >
            <BellIcon class="h-6 w-6" />
            <span class="absolute top-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-dark-secondary" :class="isArabic ? 'left-0' : 'right-0'"></span>
          </button>

          <!-- Notifications Dropdown -->
          <div v-if="notificationsOpen" class="absolute mt-2 w-80 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border z-50" :class="isArabic ? 'right-0' : 'left-0'">
            <div class="p-4 border-b border-gray-200 dark:border-dark-border">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('notifications') }}</h3>
            </div>
            <div class="max-h-96 overflow-y-auto">
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary border-b border-gray-100 dark:border-dark-border">
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('newVolunteerJoined') }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ isArabic ? 'سقاف انضم للمنظمة منذ ساعتين' : 'Saqaf joined the organization 2 hours ago' }}</p>
              </a>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary border-b border-gray-100 dark:border-dark-border">
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('newProjectAdded') }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ isArabic ? 'تم إضافة مشروع التعليم الرقمي' : 'Digital Education project has been added' }}</p>
              </a>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ t('monthlyReportReady') }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ isArabic ? 'تقرير شهر آذار جاهز للمراجعة' : 'March report is ready for review' }}</p>
              </a>
            </div>
            <div class="p-3 text-center border-t border-gray-200 dark:border-dark-border">
              <router-link to="/dashboard/notifications" class="text-sm text-brand hover:text-brand-dark font-medium">{{ t('viewAllNotifications') }}</router-link>
            </div>
          </div>
        </div>

        <!-- Language Toggle -->
        <button
          @click="toggleLanguage"
          class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
          :title="isArabic ? 'Switch to English' : 'التبديل إلى العربية'"
        >
          <span class="text-sm font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300" :key="currentLanguage">
            {{ isArabic ? 'EN' : 'AR' }}
          </span>
        </button>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors duration-200"
        >
          <SunIcon v-if="isDark" class="h-6 w-6" />
          <MoonIcon v-else class="h-6 w-6" />
        </button>

        <!-- User Menu -->
        <div class="relative">
          <button
            @click="toggleUserMenu"
            class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-tertiary transition-colors duration-200"
            :class="{ 'space-x-reverse': isArabic }"
          >
            <img 
              src="/avatars/admin.svg" 
              alt="User Avatar" 
              class="w-8 h-8 rounded-full"
            />
            <ChevronDownIcon class="h-4 w-4 text-gray-500" :class="{ 'rotate-180': isArabic }" />
          </button>

          <!-- User Dropdown Menu -->
          <div v-if="userMenuOpen" class="absolute mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border z-50" :class="isArabic ? 'right-0' : 'left-0'">
            <div class="py-1">
              <router-link to="/dashboard/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isArabic }">
                  <UserIcon class="h-4 w-4" />
                  <span>{{ t('profile') }}</span>
                </div>
              </router-link>
              <router-link to="/dashboard/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isArabic }">
                  <CogIcon class="h-4 w-4" />
                  <span>{{ t('settings') }}</span>
                </div>
              </router-link>
              <div class="border-t border-gray-200 dark:border-dark-border"></div>
              <router-link to="/logout" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isArabic }">
                  <ArrowRightOnRectangleIcon class="h-4 w-4" />
                  <span>{{ t('logout') }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useTranslation } from '@/composables/useTranslation'
import { 
  Bars3Icon, 
  ChevronLeftIcon, 
  MagnifyingGlassIcon, 
  BellIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  UserIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const themeStore = useThemeStore()
const { t, isArabic, toggleLanguage } = useTranslation()

const userMenuOpen = ref(false)
const notificationsOpen = ref(false)

const isDark = computed(() => themeStore.isDark)

const currentPageTitle = computed(() => {
  const titles = {
    '/dashboard': t('home'),
    '/dashboard/projects': t('projects'),
    '/dashboard/volunteers': t('volunteers'),
    '/dashboard/reports': t('reports'),
    '/dashboard/media': t('media'),
    '/dashboard/news': t('news'),
    '/dashboard/settings': t('settings'),
    '/dashboard/notifications': t('notifications')
  }
  return titles[route.path] || t('page')
})

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value
  notificationsOpen.value = false
}

const toggleNotifications = () => {
  notificationsOpen.value = !notificationsOpen.value
  userMenuOpen.value = false
}

const toggleTheme = () => {
  themeStore.toggleTheme()
}

// Close menus when clicking outside
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    userMenuOpen.value = false
    notificationsOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
