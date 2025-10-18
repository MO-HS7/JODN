<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'إدارة المشاريع' : 'Projects Management' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'إدارة وتتبع جميع مشاريع المنظمة' : 'Manage and track all organization projects' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-secondary">
          <DocumentArrowDownIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'تصدير' : 'Export' }}
        </button>
        <button class="btn-primary">
          <PlusIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'مشروع جديد' : 'New Project' }}
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="dashboard-card">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-64">
          <input
            type="text"
            placeholder="البحث في المشاريع..."
            class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع الحالات</option>
          <option>نشط</option>
          <option>مكتمل</option>
          <option>معلق</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع الفئات</option>
          <option>التعليم</option>
          <option>الصحة</option>
          <option>البيئة</option>
        </select>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-700 dark:text-gray-300">
        عرض 1-12 من 24 مشروع
      </p>
      <div class="flex items-center space-x-2 space-x-reverse">
        <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary">
          السابق
        </button>
        <button class="px-3 py-2 text-sm font-medium text-white bg-brand border border-transparent rounded-lg">
          1
        </button>
        <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary">
          2
        </button>
        <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary">
          التالي
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PlusIcon,
  DocumentArrowDownIcon
} from '@heroicons/vue/24/outline'
import ProjectCard from '@/components/dashboard/ProjectCard.vue'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const projects = ref([
  {
    id: 1,
    title: 'مشروع التعليم الرقمي',
    description: 'تطوير منصة تعليمية رقمية للطلاب في المناطق النائية',
    status: 'active',
    progress: 75,
    budget: 50000,
    startDate: '2024-01-15',
    endDate: '2024-06-15',
    category: 'التعليم',
    volunteers: 12
  },
  {
    id: 2,
    title: 'حملة التوعية البيئية',
    description: 'حملة توعوية حول أهمية الحفاظ على البيئة',
    status: 'completed',
    progress: 100,
    budget: 25000,
    startDate: '2023-09-01',
    endDate: '2023-12-31',
    category: 'البيئة',
    volunteers: 8
  },
  {
    id: 3,
    title: 'عيادة متنقلة',
    description: 'تقديم خدمات صحية مجانية للمناطق المحرومة',
    status: 'active',
    progress: 45,
    budget: 75000,
    startDate: '2024-02-01',
    endDate: '2024-08-01',
    category: 'الصحة',
    volunteers: 15
  }
])
</script>
