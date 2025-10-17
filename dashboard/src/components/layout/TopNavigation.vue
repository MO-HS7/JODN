<template>
  <header class="bg-white dark:bg-dark-secondary shadow-sm border-b border-gray-200 dark:border-dark-border">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Left side - Menu toggle and breadcrumb -->
      <div class="flex items-center space-x-4 space-x-reverse">
        <button
          @click="$emit('toggle-sidebar')"
          class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary transition-colors duration-200"
        >
          <Bars3Icon class="h-6 w-6" />
        </button>
        
        <div class="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 dark:text-gray-400">
          <span>لوحة التحكم</span>
          <ChevronLeftIcon class="h-4 w-4" />
          <span class="text-gray-900 dark:text-white font-medium">{{ currentPageTitle }}</span>
        </div>
      </div>

      <!-- Right side - Search, notifications, and user menu -->
      <div class="flex items-center space-x-4 space-x-reverse">
        <!-- Search -->
        <div class="relative">
          <div class="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="البحث..."
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-border rounded-lg leading-5 bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
          />
        </div>

        <!-- Notifications -->
        <div class="relative">
          <button
            @click="toggleNotifications"
            class="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors duration-200"
          >
            <BellIcon class="h-6 w-6" />
            <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-dark-secondary"></span>
          </button>

          <!-- Notifications Dropdown -->
          <div v-if="notificationsOpen" class="absolute left-0 mt-2 w-80 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border z-50">
            <div class="p-4 border-b border-gray-200 dark:border-dark-border">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">الإشعارات</h3>
            </div>
            <div class="max-h-96 overflow-y-auto">
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary border-b border-gray-100 dark:border-dark-border">
                <p class="text-sm font-medium text-gray-900 dark:text-white">متطوع جديد انضم</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">سقاف انضم للمنظمة منذ ساعتين</p>
              </a>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary border-b border-gray-100 dark:border-dark-border">
                <p class="text-sm font-medium text-gray-900 dark:text-white">مشروع جديد تم إضافته</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">تم إضافة مشروع التعليم الرقمي</p>
              </a>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-tertiary">
                <p class="text-sm font-medium text-gray-900 dark:text-white">تقرير شهري جاهز</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">تقرير شهر آذار جاهز للمراجعة</p>
              </a>
            </div>
            <div class="p-3 text-center border-t border-gray-200 dark:border-dark-border">
              <router-link to="/dashboard/notifications" class="text-sm text-brand hover:text-brand-dark font-medium">عرض جميع الإشعارات</router-link>
            </div>
          </div>
        </div>

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
            class="flex items-center space-x-3 space-x-reverse p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-tertiary transition-colors duration-200"
          >
            <img 
              src="/avatars/admin.svg" 
              alt="User Avatar" 
              class="w-8 h-8 rounded-full"
            />
            <ChevronDownIcon class="h-4 w-4 text-gray-500" />
          </button>

          <!-- User Dropdown Menu -->
          <div v-if="userMenuOpen" class="absolute left-0 mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border z-50">
            <div class="py-1">
              <router-link to="/dashboard/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2 space-x-reverse">
                  <UserIcon class="h-4 w-4" />
                  <span>الملف الشخصي</span>
                </div>
              </router-link>
              <router-link to="/dashboard/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2 space-x-reverse">
                  <CogIcon class="h-4 w-4" />
                  <span>الإعدادات</span>
                </div>
              </router-link>
              <div class="border-t border-gray-200 dark:border-dark-border"></div>
              <router-link to="/logout" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-dark-tertiary">
                <div class="flex items-center space-x-2 space-x-reverse">
                  <ArrowRightOnRectangleIcon class="h-4 w-4" />
                  <span>تسجيل الخروج</span>
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

const userMenuOpen = ref(false)
const notificationsOpen = ref(false)

const isDark = computed(() => themeStore.isDark)

const currentPageTitle = computed(() => {
  const titles = {
    '/dashboard': 'الرئيسية',
    '/dashboard/projects': 'المشاريع',
    '/dashboard/volunteers': 'المتطوعين',
    '/dashboard/reports': 'التقارير',
    '/dashboard/media': 'الوسائط',
    '/dashboard/news': 'الأخبار',
    '/dashboard/settings': 'الإعدادات',
    '/dashboard/notifications': 'الإشعارات'
  }
  return titles[route.path] || 'الصفحة'
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
