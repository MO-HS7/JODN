<template>
  <div class="card">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">المشاريع الأخيرة</h3>
      <a href="/dashboard/projects" class="text-sm text-brand hover:text-brand/80 font-medium">
        عرض الكل
      </a>
    </div>
    
    <div class="space-y-4">
      <div 
        v-for="project in recentProjects" 
        :key="project.id"
        class="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-tertiary rounded-lg hover:bg-gray-100 dark:hover:bg-dark-secondary transition-colors duration-200"
      >
        <div class="flex items-center space-x-3 space-x-reverse">
          <div 
            class="w-3 h-3 rounded-full"
            :class="project.status === 'active' ? 'bg-green-500' : project.status === 'completed' ? 'bg-blue-500' : 'bg-gray-400'"
          ></div>
          <div>
            <h4 class="font-medium text-gray-900 dark:text-white">{{ project.name }}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ project.description }}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-sm font-medium text-gray-900 dark:text-white">{{ project.progress }}%</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ project.daysLeft }} يوم متبقي</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recentProjects = [
  {
    id: 1,
    name: 'مشروع التعليم الرقمي',
    description: 'تطوير منصة تعليمية للأطفال',
    status: 'active',
    progress: 75,
    daysLeft: 15
  },
  {
    id: 2,
    name: 'برنامج التوعية الصحية',
    description: 'حملات توعية في القرى النائية',
    status: 'active',
    progress: 60,
    daysLeft: 30
  },
  {
    id: 3,
    name: 'مشروع المياه النظيفة',
    description: 'توفير مصادر مياه آمنة',
    status: 'completed',
    progress: 100,
    daysLeft: 0
  },
  {
    id: 4,
    name: 'مركز التدريب المهني',
    description: 'تدريب الشباب على المهارات الحرفية',
    status: 'pending',
    progress: 25,
    daysLeft: 45
  }
]
</script>
