<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'الإشعارات' : 'Notifications' }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'جميع إشعارات النظام' : 'All system notifications' }}</p>
      </div>
      <div class="flex items-center space-x-3 space-x-reverse">
        <button class="btn-secondary">
          <CheckCircleIcon class="h-5 w-5 ml-2" />
          {{ isArabic ? 'تحديد الكل كمقروء' : 'Mark All as Read' }}
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="dashboard-card">
      <div class="flex items-center gap-4">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          :class="activeFilter === filter.id 
            ? 'bg-brand text-white' 
            : 'bg-gray-100 dark:bg-dark-tertiary text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-border'"
        >
          {{ filter.name }}
          <span v-if="filter.count > 0" class="mr-2 px-2 py-0.5 text-xs rounded-full bg-white/20">{{ filter.count }}</span>
        </button>
      </div>
    </div>

    <!-- Notifications List -->
    <div class="space-y-3">
      <div
        v-for="notification in filteredNotifications"
        :key="notification.id"
        class="dashboard-card card-hover cursor-pointer"
        :class="!notification.read ? 'border-r-4 border-brand' : ''"
      >
        <div class="flex items-start space-x-4 space-x-reverse">
          <!-- Icon -->
          <div class="flex-shrink-0">
            <div class="w-12 h-12 rounded-full flex items-center justify-center"
                 :class="getIconBg(notification.type)">
              <component :is="getIcon(notification.type)" class="h-6 w-6" :class="getIconColor(notification.type)" />
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {{ notification.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {{ notification.message }}
                </p>
                <div class="flex items-center space-x-4 space-x-reverse text-xs text-gray-500 dark:text-gray-400">
                  <span class="flex items-center space-x-1 space-x-reverse">
                    <ClockIcon class="h-4 w-4" />
                    <span>{{ notification.time }}</span>
                  </span>
                  <span v-if="notification.category" class="px-2 py-1 bg-gray-100 dark:bg-dark-tertiary rounded">
                    {{ notification.category }}
                  </span>
                </div>
              </div>
              
              <!-- Actions -->
              <div class="flex items-center space-x-2 space-x-reverse mr-4">
                <button
                  v-if="!notification.read"
                  @click.stop="markAsRead(notification.id)"
                  class="p-2 text-brand hover:bg-brand/10 rounded-lg transition-colors"
                  :title="isArabic ? 'تحديد كمقروء' : 'Mark as Read'"
                >
                  <CheckIcon class="h-5 w-5" />
                </button>
                <button
                  @click.stop="deleteNotification(notification.id)"
                  class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  :title="isArabic ? 'حذف' : 'Delete'"
                >
                  <TrashIcon class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredNotifications.length === 0" class="dashboard-card text-center py-12">
        <BellSlashIcon class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ isArabic ? 'لا توجد إشعارات' : 'No notifications' }}</h3>
        <p class="text-gray-600 dark:text-gray-400">{{ isArabic ? 'لم يتم العثور على إشعارات في هذه الفئة' : 'No notifications found in this category' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  BellIcon,
  BellSlashIcon,
  CheckCircleIcon,
  CheckIcon,
  TrashIcon,
  ClockIcon,
  UserPlusIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const activeFilter = ref('all')

const filters = computed(() => [
  { id: 'all', name: isArabic.value ? 'الكل' : 'All', count: 8 },
  { id: 'unread', name: isArabic.value ? 'غير مقروءة' : 'Unread', count: 5 },
  { id: 'volunteer', name: isArabic.value ? 'المتطوعين' : 'Volunteers', count: 2 },
  { id: 'project', name: isArabic.value ? 'المشاريع' : 'Projects', count: 3 },
  { id: 'system', name: isArabic.value ? 'النظام' : 'System', count: 3 }
])

const notifications = ref([
  {
    id: 1,
    type: 'volunteer',
    category: 'المتطوعين',
    title: 'متطوع جديد انضم',
    message: 'سقاف انضم للمنظمة وينتظر الموافقة على حسابه',
    time: 'منذ 10 دقائق',
    read: false
  },
  {
    id: 2,
    type: 'project',
    category: 'المشاريع',
    title: 'تحديث مشروع التعليم الرقمي',
    message: 'تم تحديث حالة المشروع إلى 85% مكتمل',
    time: 'منذ ساعة',
    read: false
  },
  {
    id: 3,
    type: 'system',
    category: 'النظام',
    title: 'تقرير شهري جاهز',
    message: 'تقرير شهر آذار 2024 جاهز للمراجعة والتصدير',
    time: 'منذ ساعتين',
    read: false
  },
  {
    id: 4,
    type: 'volunteer',
    category: 'المتطوعين',
    title: 'طلب إجازة من متطوع',
    message: 'إبراهيم علي إسماعيل طلب إجازة لمدة أسبوع',
    time: 'منذ 3 ساعات',
    read: false
  },
  {
    id: 5,
    type: 'warning',
    category: 'المشاريع',
    title: 'تحذير: ميزانية مشروع',
    message: 'مشروع العيادة المتنقلة اقترب من حد الميزانية المحدد',
    time: 'منذ 5 ساعات',
    read: false
  },
  {
    id: 6,
    type: 'project',
    category: 'المشاريع',
    title: 'مشروع جديد تم إضافته',
    message: 'تم إضافة مشروع التعليم الرقمي بنجاح',
    time: 'أمس',
    read: true
  },
  {
    id: 7,
    type: 'system',
    category: 'النظام',
    title: 'تحديث النظام',
    message: 'تم تحديث نظام إدارة المتطوعين إلى الإصدار 2.1',
    time: 'أمس',
    read: true
  },
  {
    id: 8,
    type: 'info',
    category: 'النظام',
    title: 'نسخة احتياطية تمت بنجاح',
    message: 'تم إنشاء نسخة احتياطية من قاعدة البيانات بنجاح',
    time: 'منذ يومين',
    read: true
  }
])

const filteredNotifications = computed(() => {
  if (activeFilter.value === 'all') {
    return notifications.value
  }
  if (activeFilter.value === 'unread') {
    return notifications.value.filter(n => !n.read)
  }
  return notifications.value.filter(n => n.type === activeFilter.value)
})

const getIcon = (type) => {
  const icons = {
    volunteer: UserPlusIcon,
    project: DocumentTextIcon,
    warning: ExclamationTriangleIcon,
    system: InformationCircleIcon,
    info: InformationCircleIcon
  }
  return icons[type] || BellIcon
}

const getIconBg = (type) => {
  const backgrounds = {
    volunteer: 'bg-green-100 dark:bg-green-900/30',
    project: 'bg-blue-100 dark:bg-blue-900/30',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30',
    system: 'bg-purple-100 dark:bg-purple-900/30',
    info: 'bg-gray-100 dark:bg-gray-800'
  }
  return backgrounds[type] || 'bg-gray-100 dark:bg-gray-800'
}

const getIconColor = (type) => {
  const colors = {
    volunteer: 'text-green-600 dark:text-green-400',
    project: 'text-blue-600 dark:text-blue-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    system: 'text-purple-600 dark:text-purple-400',
    info: 'text-gray-600 dark:text-gray-400'
  }
  return colors[type] || 'text-gray-600 dark:text-gray-400'
}

const markAsRead = (id) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) {
    notification.read = true
  }
}

const deleteNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index !== -1) {
    notifications.value.splice(index, 1)
  }
}
</script>
