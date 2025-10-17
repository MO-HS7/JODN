<template>
  <div class="space-y-3">
    <div v-for="volunteer in recentVolunteers" :key="volunteer.id" class="flex items-center space-x-3 space-x-reverse">
      <img :src="volunteer.avatar" :alt="volunteer.name" class="w-8 h-8 rounded-full" />
      <div class="flex-1">
        <p class="text-sm font-medium text-gray-900 dark:text-white">{{ volunteer.name }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ volunteer.specialization }}</p>
      </div>
      <span class="text-xs text-gray-500 dark:text-gray-400">{{ volunteer.joinDate }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recentVolunteers = ref([
  {
    id: 1,
    name: 'سقاف',
    specialization: 'الإعلام',
    joinDate: 'منذ يومين',
    avatar: '/avatars/male-5.svg'
  },
  {
    id: 2,
    name: 'انساب نائف',
    specialization: 'التسويق',
    joinDate: 'منذ 5 أيام',
    avatar: '/avatars/female-3.svg'
  },
  {
    id: 3,
    name: 'وئام راجح',
    specialization: 'التصميم',
    joinDate: 'منذ أسبوع',
    avatar: '/avatars/female-2.svg'
  }
])
</script>
