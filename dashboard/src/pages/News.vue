<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'الأخبار' : 'News' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'إدارة ونشر الأخبار والمقالات' : 'Manage and publish news and articles' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-primary">
          <PlusIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'خبر جديد' : 'New Article' }}
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="dashboard-card">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-64">
          <input
            type="text"
            placeholder="البحث في الأخبار..."
            class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع الحالات</option>
          <option>منشور</option>
          <option>مسودة</option>
        </select>
      </div>
    </div>

    <!-- News List -->
    <div class="space-y-4">
      <div v-for="news in newsItems" :key="news.id" class="dashboard-card card-hover">
        <div class="flex items-start space-x-4 space-x-reverse">
          <img :src="news.image" :alt="news.title" class="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
          <div class="flex-1">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ news.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ news.excerpt }}</p>
                <div class="flex items-center space-x-4 space-x-reverse text-xs text-gray-500 dark:text-gray-400">
                  <span>{{ news.date }}</span>
                  <span class="flex items-center space-x-1 space-x-reverse">
                    <EyeIcon class="h-4 w-4" />
                    <span>{{ news.views }}</span>
                  </span>
                  <span class="inline-flex px-2 py-1 rounded-full" :class="getStatusClass(news.status)">
                    {{ getStatusText(news.status) }}
                  </span>
                </div>
              </div>
              <div class="flex items-center space-x-2 space-x-reverse">
                <button class="p-2 text-gray-500 hover:text-brand dark:text-gray-400 dark:hover:text-brand">
                  <PencilIcon class="h-5 w-5" />
                </button>
                <button class="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
                  <TrashIcon class="h-5 w-5" />
                </button>
              </div>
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
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const newsItems = ref([
  {
    id: 1,
    title: 'انطلاق مشروع التعليم الرقمي في المناطق النائية',
    excerpt: 'تم إطلاق مشروع جديد يهدف إلى توفير التعليم الرقمي للطلاب في المناطق النائية...',
    image: '/images/news-1.svg',
    date: '2024-03-15',
    views: 1250,
    status: 'published'
  },
  {
    id: 2,
    title: 'حملة التوعية البيئية تحقق نجاحاً كبيراً',
    excerpt: 'حملة التوعية البيئية التي نظمتها المنظمة حققت نجاحاً كبيراً في رفع الوعي...',
    image: '/images/news-2.svg',
    date: '2024-03-10',
    views: 890,
    status: 'published'
  },
  {
    id: 3,
    title: 'ورشة عمل حول التطوع في العمل الإنساني',
    excerpt: 'ستقام ورشة عمل حول أهمية التطوع في العمل الإنساني يوم السبت القادم...',
    image: '/images/news-3.svg',
    date: '2024-03-08',
    views: 0,
    status: 'draft'
  }
])

const getStatusClass = (status) => {
  const classes = {
    published: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  }
  return classes[status] || classes.draft
}

const getStatusText = (status) => {
  const texts = {
    published: 'منشور',
    draft: 'مسودة'
  }
  return texts[status] || 'غير محدد'
}
</script>
