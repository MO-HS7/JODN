<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'إدارة المتطوعين' : 'Volunteers Management' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'إدارة ومتابعة المتطوعين في المنظمة' : 'Manage and track volunteers in the organization' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-secondary">
          <DocumentArrowDownIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'تصدير' : 'Export' }}
        </button>
        <button class="btn-primary">
          <UserPlusIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'إضافة متطوع' : 'Add Volunteer' }}
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="stat-card">
        <div class="flex items-center space-x-3 space-x-reverse">
          <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <UsersIcon class="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">نشط</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">156</p>
          </div>
        </div>
      </div>
      <div class="stat-card">
        <div class="flex items-center space-x-3 space-x-reverse">
          <div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <ClockIcon class="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">في الانتظار</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">12</p>
          </div>
        </div>
      </div>
      <div class="stat-card">
        <div class="flex items-center space-x-3 space-x-reverse">
          <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <CheckCircleIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">تم التوثيق</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">143</p>
          </div>
        </div>
      </div>
      <div class="stat-card">
        <div class="flex items-center space-x-3 space-x-reverse">
          <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <StarIcon class="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">متميز</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">25</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="dashboard-card">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-64">
          <input
            type="text"
            placeholder="البحث في المتطوعين..."
            class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع الحالات</option>
          <option>نشط</option>
          <option>في الانتظار</option>
          <option>غير نشط</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand">
          <option>جميع التخصصات</option>
          <option>تطوير البرمجيات</option>
          <option>التعليم</option>
          <option>الطب</option>
        </select>
      </div>
    </div>

    <!-- Volunteers Table -->
    <div class="dashboard-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-dark-border">
          <thead class="bg-gray-50 dark:bg-dark-tertiary">
            <tr>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">المتطوع</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">التخصص</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">الحالة</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">تاريخ الانضمام</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-dark-secondary divide-y divide-gray-200 dark:divide-dark-border">
            <tr v-for="volunteer in volunteers" :key="volunteer.id" class="hover:bg-gray-50 dark:hover:bg-dark-tertiary">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3 space-x-reverse">
                  <img :src="volunteer.avatar" :alt="volunteer.name" class="h-10 w-10 rounded-full" />
                  <div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">{{ volunteer.name }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ volunteer.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 dark:text-white">{{ volunteer.specialization }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusClass(volunteer.status)">
                  {{ getStatusText(volunteer.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {{ volunteer.joinDate }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center space-x-2 space-x-reverse">
                  <button class="text-brand hover:text-brand-dark">تفاصيل</button>
                  <button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">تعديل</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  UserPlusIcon,
  DocumentArrowDownIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/vue/24/outline'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const volunteers = ref([
  {
    id: 1,
    name: 'أمينة حمود',
    email: 'amina@example.com',
    phone: '+972501234567',
    specialization: 'التعليم',
    status: 'active',
    joinDate: '2024-01-15',
    avatar: '/avatars/female-1.svg'
  },
  {
    id: 2,
    name: 'عرفان',
    email: 'irfan@example.com',
    phone: '+972501234568',
    specialization: 'تطوير البرمجيات',
    status: 'active',
    joinDate: '2024-02-01',
    avatar: '/avatars/male-1.svg'
  },
  {
    id: 3,
    name: 'محمد عمر',
    email: 'mohamed.omar@example.com',
    phone: '+972501234569',
    specialization: 'الطب',
    status: 'active',
    joinDate: '2024-02-15',
    avatar: '/avatars/male-2.svg'
  },
  {
    id: 4,
    name: 'محمود رياض',
    email: 'mahmoud.riad@example.com',
    phone: '+972501234570',
    specialization: 'الهندسة',
    status: 'active',
    joinDate: '2024-03-01',
    avatar: '/avatars/male-3.svg'
  },
  {
    id: 5,
    name: 'إبراهيم علي إسماعيل',
    email: 'ibrahim.ali@example.com',
    phone: '+972501234571',
    specialization: 'الإدارة',
    status: 'active',
    joinDate: '2024-03-10',
    avatar: '/avatars/male-4.svg'
  },
  {
    id: 6,
    name: 'وئام راجح',
    email: 'wiam.rajeh@example.com',
    phone: '+972501234572',
    specialization: 'التصميم',
    status: 'active',
    joinDate: '2024-03-15',
    avatar: '/avatars/female-2.svg'
  },
  {
    id: 7,
    name: 'انساب نائف',
    email: 'ansab.naif@example.com',
    phone: '+972501234573',
    specialization: 'التسويق',
    status: 'pending',
    joinDate: '2024-03-20',
    avatar: '/avatars/female-3.svg'
  },
  {
    id: 8,
    name: 'سقاف',
    email: 'saqqaf@example.com',
    phone: '+972501234574',
    specialization: 'الإعلام',
    status: 'active',
    joinDate: '2024-03-25',
    avatar: '/avatars/male-5.svg'
  }
])

const getStatusClass = (status) => {
  const classes = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    inactive: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  }
  return classes[status] || classes.inactive
}

const getStatusText = (status) => {
  const texts = {
    active: 'نشط',
    pending: 'في الانتظار',
    inactive: 'غير نشط'
  }
  return texts[status] || 'غير محدد'
}
</script>
