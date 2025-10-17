<template>
  <div class="sidebar" :class="{ 'sidebar-closed': !isSidebarOpen }">
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200 dark:border-dark-border">
      <h1 class="text-2xl font-bold text-brand dark:text-brand-dark">جودن</h1>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">لوحة التحكم</p>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-4">
      <div class="space-y-1">
        <div v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            class="flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors duration-200"
            :class="isActive(item.path) 
              ? 'bg-brand text-white' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-tertiary'"
          >
            <component :is="item.icon" class="h-5 w-5" />
            <span class="font-medium">{{ item.name }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- User Profile Section -->
    <div class="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-dark-border">
      <div class="flex items-center space-x-3 space-x-reverse">
        <img 
          src="/avatars/admin.svg" 
          alt="User Avatar" 
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 dark:text-white truncate">مهند رشيد</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">مدير النظام</p>
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
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()

const menuItems = [
  { name: 'الرئيسية', path: '/dashboard', icon: HomeIcon },
  { name: 'المشاريع', path: '/dashboard/projects', icon: FolderIcon },
  { name: 'المتطوعين', path: '/dashboard/volunteers', icon: UserGroupIcon },
  { name: 'التقارير', path: '/dashboard/reports', icon: DocumentTextIcon },
  { name: 'الوسائط', path: '/dashboard/media', icon: PhotoIcon },
  { name: 'الأخبار', path: '/dashboard/news', icon: NewspaperIcon },
  { name: 'الإعدادات', path: '/dashboard/settings', icon: Cog6ToothIcon },
  { name: 'تسجيل الخروج', path: '/logout', icon: ArrowRightOnRectangleIcon }
]

const isActive = (path) => {
  if (path === '/dashboard') {
    return route.path === '/dashboard'
  }
  return route.path.startsWith(path)
}
</script>
