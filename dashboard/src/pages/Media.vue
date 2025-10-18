<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'مكتبة الوسائط' : 'Media Library' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'إدارة الصور والفيديوهات والملفات' : 'Manage images, videos and files' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-primary">
          <ArrowUpTrayIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'رفع ملفات' : 'Upload Files' }}
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="dashboard-card">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-64">
          <input
            type="text"
            placeholder="البحث في الوسائط..."
            class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع الأنواع</option>
          <option>صور</option>
          <option>فيديو</option>
          <option>مستندات</option>
        </select>
      </div>
    </div>

    <!-- Media Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="item in mediaItems" :key="item.id" class="dashboard-card p-0 overflow-hidden card-hover">
        <div class="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-dark-tertiary">
          <img v-if="item.type === 'image'" :src="item.url" :alt="item.name" class="w-full h-48 object-cover" />
          <div v-else-if="item.type === 'video'" class="w-full h-48 bg-gray-300 dark:bg-dark-border flex items-center justify-center">
            <PlayCircleIcon class="h-16 w-16 text-gray-500" />
          </div>
          <div v-else class="w-full h-48 bg-gray-300 dark:bg-dark-border flex items-center justify-center">
            <DocumentIcon class="h-16 w-16 text-gray-500" />
          </div>
        </div>
        <div class="p-4">
          <h4 class="text-sm font-medium text-gray-900 dark:text-white truncate">{{ item.name }}</h4>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ item.type }}</p>
          <div class="flex items-center justify-between mt-3">
            <button class="text-xs text-brand hover:text-brand-dark font-medium">عرض</button>
            <div class="flex items-center space-x-2 space-x-reverse">
              <button class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <PencilIcon class="h-4 w-4" />
              </button>
              <button class="p-1 text-gray-400 hover:text-red-600">
                <TrashIcon class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ArrowUpTrayIcon,
  PlayCircleIcon,
  DocumentIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const mediaItems = ref([
  {
    id: 1,
    name: 'hero-image.jpg',
    type: 'image',
    url: '/images/media-1.svg'
  },
  {
    id: 2,
    name: 'project-video.mp4',
    type: 'video',
    url: ''
  },
  {
    id: 3,
    name: 'report.pdf',
    type: 'document',
    url: ''
  },
  {
    id: 4,
    name: 'gallery-1.jpg',
    type: 'image',
    url: '/images/media-2.svg'
  },
  {
    id: 5,
    name: 'presentation.pptx',
    type: 'document',
    url: ''
  },
  {
    id: 6,
    name: 'event-photo.jpg',
    type: 'image',
    url: '/images/media-3.svg'
  }
])
</script>
