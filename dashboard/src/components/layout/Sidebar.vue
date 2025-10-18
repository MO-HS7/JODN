<template>
  <!-- Overlay for mobile -->
  <div 
    v-if="isSidebarOpen" 
    @click="$emit('close-sidebar')"
    class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
  ></div>
  
  <div class="sidebar" :class="{ 'sidebar-closed': !isSidebarOpen, 'rtl': isArabic, 'ltr': !isArabic }" :style="sidebarPosition">
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-brand dark:text-brand-dark">{{ isArabic ? 'جودن' : 'JODN' }}</h1>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('dashboard') }}</p>
      </div>
      <!-- Close button for mobile -->
      <button 
        @click="$emit('close-sidebar')"
        class="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-tertiary transition-colors duration-200"
      >
        <XMarkIcon class="h-6 w-6" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-4">
      <div class="space-y-1">
        <div v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            @click="handleLinkClick"
            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200"
            :class="[
              { 'space-x-reverse': isArabic },
              isActive(item.path) 
                ? 'bg-brand text-white' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary'
            ]"
          >
            <component :is="item.icon" class="h-5 w-5" />
            <span class="font-medium">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- User Profile Section -->
    <div class="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-dark-border">
      <div class="flex items-center space-x-3" :class="{ 'space-x-reverse': isArabic }">
        <img 
          src="/avatars/admin.svg" 
          alt="User Avatar" 
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ isArabic ? 'مهند رشيد' : 'Mohanad Rashid' }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ isArabic ? 'مدير النظام' : 'System Administrator' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  HomeIcon, 
  FolderIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  PhotoIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useTranslation } from '@/composables/useTranslation'
import { useLanguageStore } from '@/stores/language'

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close-sidebar'])

const route = useRoute()
const { t, isArabic } = useTranslation()
const languageStore = useLanguageStore()

// Computed style for sidebar position
const sidebarPosition = computed(() => {
  // Use currentLanguage for full reactivity
  const isRTL = languageStore.currentLanguage === 'ar'
  if (isRTL) {
    return {
      right: '0',
      left: 'auto'
    }
  } else {
    return {
      left: '0',
      right: 'auto'
    }
  }
})

// Close sidebar on mobile when clicking a link
const handleLinkClick = () => {
  if (window.innerWidth < 768) {
    emit('close-sidebar')
  }
}

const menuItems = computed(() => [
  { name: t('home'), path: '/dashboard', icon: HomeIcon },
  { name: t('projects'), path: '/dashboard/projects', icon: FolderIcon },
  { name: t('volunteers'), path: '/dashboard/volunteers', icon: UserGroupIcon },
  { name: t('reports'), path: '/dashboard/reports', icon: DocumentTextIcon },
  { name: t('media'), path: '/dashboard/media', icon: PhotoIcon },
  { name: t('news'), path: '/dashboard/news', icon: NewspaperIcon },
  { name: t('settings'), path: '/dashboard/settings', icon: Cog6ToothIcon },
  { name: t('logout'), path: '/logout', icon: ArrowRightOnRectangleIcon }
])

const isActive = (path) => {
  if (path === '/dashboard') {
    return route.path === '/dashboard'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.sidebar {
  @apply fixed top-0 h-full w-64 bg-white dark:bg-dark-secondary z-40;
  transition: left 0.3s ease, right 0.3s ease, transform 0.3s ease, width 0.3s ease;
}

.sidebar.rtl {
  @apply border-l border-gray-200 dark:border-dark-border;
}

.sidebar.ltr {
  @apply border-r border-gray-200 dark:border-dark-border;
}

.sidebar-closed.ltr {
  transform: translateX(-100%) !important;
}

.sidebar-closed.rtl {
  transform: translateX(100%) !important;
}

@media (max-width: 768px) {
  .sidebar {
    @apply w-64;
  }
  
  .sidebar-closed.ltr {
    transform: translateX(-100%) !important;
  }
  
  .sidebar-closed.rtl {
    transform: translateX(100%) !important;
  }
}
</style>
