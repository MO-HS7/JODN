<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <button 
      v-for="action in quickActions" 
      :key="action.name"
      @click="handleAction(action.action)"
      class="flex items-center p-4 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary transition-colors duration-200 group"
    >
      <div 
        class="p-3 rounded-lg mr-4"
        :class="action.colorClass"
      >
        <component :is="action.icon" class="h-6 w-6" :class="action.iconClass" />
      </div>
      <div class="text-right">
        <h4 class="font-medium text-gray-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-dark transition-colors duration-200">
          {{ action.name }}
        </h4>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ action.description }}</p>
      </div>
    </button>
  </div>
</template>

<script setup>
import { 
  PlusIcon,
  UserPlusIcon,
  DocumentTextIcon,
  PhotoIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

const quickActions = [
  {
    name: 'إضافة مشروع',
    description: 'إنشاء مشروع جديد',
    icon: PlusIcon,
    action: 'add-project',
    colorClass: 'bg-blue-100 dark:bg-blue-900/30',
    iconClass: 'text-blue-600 dark:text-blue-400'
  },
  {
    name: 'تسجيل متطوع',
    description: 'إضافة متطوع جديد',
    icon: UserPlusIcon,
    action: 'add-volunteer',
    colorClass: 'bg-green-100 dark:bg-green-900/30',
    iconClass: 'text-green-600 dark:text-green-400'
  },
  {
    name: 'إنشاء تقرير',
    description: 'تقرير شهري أو سنوي',
    icon: DocumentTextIcon,
    action: 'create-report',
    colorClass: 'bg-purple-100 dark:bg-purple-900/30',
    iconClass: 'text-purple-600 dark:text-purple-400'
  },
  {
    name: 'رفع وسائط',
    description: 'صور ومقاطع فيديو',
    icon: PhotoIcon,
    action: 'upload-media',
    colorClass: 'bg-orange-100 dark:bg-orange-900/30',
    iconClass: 'text-orange-600 dark:text-orange-400'
  }
]

const handleAction = (action) => {
  console.log('Quick action:', action)
  // Handle different actions here
  switch (action) {
    case 'add-project':
      // Navigate to add project page
      break
    case 'add-volunteer':
      // Navigate to add volunteer page
      break
    case 'create-report':
      // Navigate to create report page
      break
    case 'upload-media':
      // Navigate to upload media page
      break
  }
}
</script>
