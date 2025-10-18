<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'التقارير' : 'Reports' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'تصفح وتصدير التقارير' : 'Browse and export reports' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-primary">
          <DocumentPlusIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'إنشاء تقرير جديد' : 'Create New Report' }}
        </button>
      </div>
    </div>

    <!-- Report Types -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="dashboard-card card-hover cursor-pointer">
        <div class="flex items-center space-x-3 space-x-reverse mb-4">
          <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <ChartBarIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">تقارير المشاريع</h3>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">تقارير شاملة عن حالة وأداء المشاريع</p>
        <button class="text-brand hover:text-brand-dark text-sm font-medium">عرض التقارير →</button>
      </div>

      <div class="dashboard-card card-hover cursor-pointer">
        <div class="flex items-center space-x-3 space-x-reverse mb-4">
          <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <UserGroupIcon class="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">تقارير المتطوعين</h3>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">إحصائيات وبيانات المتطوعين</p>
        <button class="text-brand hover:text-brand-dark text-sm font-medium">عرض التقارير →</button>
      </div>

      <div class="dashboard-card card-hover cursor-pointer">
        <div class="flex items-center space-x-3 space-x-reverse mb-4">
          <div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <BanknotesIcon class="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">تقارير مالية</h3>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">تقارير الميزانية والمصروفات</p>
        <button class="text-brand hover:text-brand-dark text-sm font-medium">عرض التقارير →</button>
      </div>
    </div>

    <!-- Recent Reports -->
    <div class="dashboard-card">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">التقارير الأخيرة</h3>
      <div class="space-y-3">
        <div v-for="report in recentReports" :key="report.id" class="flex items-center justify-between p-4 border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary cursor-pointer">
          <div class="flex items-center space-x-3 space-x-reverse">
            <DocumentTextIcon class="h-8 w-8 text-gray-400" />
            <div>
              <h4 class="text-sm font-medium text-gray-900 dark:text-white">{{ report.title }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ report.date }} • {{ report.type }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-2 space-x-reverse">
            <button class="p-2 text-gray-500 hover:text-brand dark:text-gray-400 dark:hover:text-brand">
              <EyeIcon class="h-5 w-5" />
            </button>
            <button class="p-2 text-gray-500 hover:text-brand dark:text-gray-400 dark:hover:text-brand">
              <ArrowDownTrayIcon class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  DocumentPlusIcon,
  ChartBarIcon,
  UserGroupIcon,
  BanknotesIcon,
  DocumentTextIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/vue/24/outline'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const recentReports = ref([
  {
    id: 1,
    title: 'تقرير المشاريع - آذار 2024',
    type: 'مشاريع',
    date: '15 آذار 2024',
    size: '2.4 MB'
  },
  {
    id: 2,
    title: 'تقرير المتطوعين - شباط 2024',
    type: 'متطوعين',
    date: '28 شباط 2024',
    size: '1.8 MB'
  },
  {
    id: 3,
    title: 'التقرير المالي الربع سنوي',
    type: 'مالي',
    date: '31 كانون الأول 2023',
    size: '3.2 MB'
  }
])
</script>
