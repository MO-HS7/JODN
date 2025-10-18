<template>
  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
      {{ t('about') }}
    </h2>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ isArabic ? 'هذا مثال على كيفية استخدام نظام الترجمة في المكونات الأخرى.' : 'This is an example of how to use the translation system in other components.' }}
    </p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <button 
        @click="toggleLanguage"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {{ t('toggleLanguage') }}
      </button>
      
      <span class="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
        {{ t('currentLanguage') }}: {{ currentLanguage.toUpperCase() }}
      </span>
      
      <span class="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
        {{ t('direction') }}: {{ direction.toUpperCase() }}
      </span>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 class="font-semibold mb-2">{{ t('commonActions') }}</h3>
        <ul class="space-y-1 text-sm">
          <li>{{ t('save') }}</li>
          <li>{{ t('edit') }}</li>
          <li>{{ t('delete') }}</li>
          <li>{{ t('cancel') }}</li>
        </ul>
      </div>
      
      <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 class="font-semibold mb-2">{{ t('navigation') }}</h3>
        <ul class="space-y-1 text-sm">
          <li>{{ t('home') }}</li>
          <li>{{ t('about') }}</li>
          <li>{{ t('contact') }}</li>
          <li>{{ t('services') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'

// Use the translation composable
const { t, isArabic, currentLanguage, direction, toggleLanguage } = useTranslation()
</script>
