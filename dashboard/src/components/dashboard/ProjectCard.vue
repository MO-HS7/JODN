<template>
  <div class="dashboard-card card-hover">
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ project.description }}</p>
        <div class="flex items-center space-x-4 space-x-reverse text-xs text-gray-500 dark:text-gray-400">
          <span>{{ project.category }}</span>
          <span>{{ project.volunteers }} متطوع</span>
        </div>
      </div>
      <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
            :class="getStatusClass(project.status)">
        {{ getStatusText(project.status) }}
      </span>
    </div>

    <!-- Progress Bar -->
    <div class="mb-4">
      <div class="flex items-center justify-between mb-1">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">التقدم</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.progress }}%</span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
        <div class="bg-brand h-2 rounded-full transition-all duration-300" :style="{ width: project.progress + '%' }"></div>
      </div>
    </div>

    <!-- Project Details -->
    <div class="space-y-2 mb-4">
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-400">الميزانية</span>
        <span class="font-medium text-gray-900 dark:text-white">₪{{ project.budget.toLocaleString() }}</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-400">تاريخ البداية</span>
        <span class="font-medium text-gray-900 dark:text-white">{{ formatDate(project.startDate) }}</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-600 dark:text-gray-400">تاريخ الانتهاء</span>
        <span class="font-medium text-gray-900 dark:text-white">{{ formatDate(project.endDate) }}</span>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center space-x-2 space-x-reverse">
      <button class="flex-1 px-3 py-2 text-sm font-medium text-brand border border-brand rounded-lg hover:bg-brand hover:text-white transition-colors duration-200">
        عرض التفاصيل
      </button>
      <button class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <PencilIcon class="h-4 w-4" />
      </button>
      <button class="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
        <TrashIcon class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const getStatusClass = (status) => {
  const classes = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
  }
  return classes[status] || classes.pending
}

const getStatusText = (status) => {
  const texts = {
    active: 'نشط',
    completed: 'مكتمل',
    pending: 'معلق'
  }
  return texts[status] || 'غير محدد'
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ar-SY', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    calendar: 'gregory'
  })
}
</script>
