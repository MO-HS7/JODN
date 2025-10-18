<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ isArabic ? 'الإعدادات' : 'Settings' }}</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-1">{{ isArabic ? 'إدارة إعدادات الحساب والنظام' : 'Manage account and system settings' }}</p>
    </div>

    <!-- Settings Tabs -->
    <div class="dashboard-card">
      <div class="border-b border-gray-200 dark:border-dark-border">
        <nav class="flex space-x-8 space-x-reverse">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-4 px-1 border-b-2 font-medium text-sm transition-colors"
            :class="activeTab === tab.id
              ? 'border-brand text-brand'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <div class="mt-6">
        <!-- Account Settings -->
        <div v-if="activeTab === 'account'" class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">إعدادات الحساب</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  value="مهند رشيد"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value="ahmed@jodp.org"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  value="+972501234567"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <button class="btn-primary">حفظ التغييرات</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div v-if="activeTab === 'security'" class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">إعدادات الأمان</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">كلمة المرور الحالية</label>
                <input
                  type="password"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">كلمة المرور الجديدة</label>
                <input
                  type="password"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-tertiary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <button class="btn-primary">تحديث كلمة المرور</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications Settings -->
        <div v-if="activeTab === 'notifications'" class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">إعدادات الإشعارات</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">إشعارات البريد الإلكتروني</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">تلقي الإشعارات عبر البريد الإلكتروني</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" checked>
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/20 dark:peer-focus:ring-brand/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">إشعارات المشاريع</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">تلقي إشعارات عند تحديث المشاريع</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" checked>
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/20 dark:peer-focus:ring-brand/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { isArabic } = useTranslation()

const activeTab = ref('account')

const tabs = computed(() => [
  { id: 'account', name: isArabic.value ? 'الحساب' : 'Account' },
  { id: 'security', name: isArabic.value ? 'الأمان' : 'Security' },
  { id: 'notifications', name: isArabic.value ? 'الإشعارات' : 'Notifications' }
])
</script>
