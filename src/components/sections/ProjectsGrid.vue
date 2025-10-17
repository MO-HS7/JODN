<template>
  <section class="section-padding bg-white dark:bg-dark-primary">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
      
      <!-- Filter Tabs -->
      <div v-if="showFilters" class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            activeCategory === category.id
              ? 'bg-brand dark:bg-brand-dark text-white shadow-lg'
              : 'bg-gray-100 dark:bg-dark-secondary text-gray-600 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-tertiary'
          ]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BaseCard
          v-for="project in filteredProjects"
          :key="project.id"
          :title="project.title"
          :subtitle="project.location"
          :image="project.image"
          :image-alt="project.title"
          :badge="project.status"
          :hoverable="true"
          @click="handleProjectClick(project)"
        >
          <p class="text-gray-600 dark:text-dark-text-secondary text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>
          
          <!-- Progress Bar -->
          <div v-if="project.progress !== undefined" class="mb-4">
            <div class="flex justify-between text-sm mb-2">
              <span class="text-gray-600 dark:text-dark-text-secondary">التقدم</span>
              <span class="font-bold text-brand dark:text-brand-dark">{{ project.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-dark-tertiary rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-brand to-gold dark:from-brand-dark dark:to-gold-dark h-2 rounded-full transition-all duration-500"
                :style="{ width: `${project.progress}%` }"
              ></div>
            </div>
          </div>
          
          <template #footer>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-text-secondary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{{ project.beneficiaries }} مستفيد</span>
              </div>
              <BaseButton variant="text" size="sm">
                المزيد ←
              </BaseButton>
            </div>
          </template>
        </BaseCard>
      </div>
      
      <!-- Load More Button -->
      <div v-if="showLoadMore" class="text-center mt-12">
        <BaseButton 
          variant="outline" 
          size="lg"
          @click="handleLoadMore"
        >
          عرض المزيد من المشاريع
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'مشاريعنا'
  },
  subtitle: {
    type: String,
    default: 'نعمل على مشاريع متنوعة لتحسين حياة المجتمعات الريفية'
  },
  projects: {
    type: Array,
    required: true
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  showLoadMore: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['project-click', 'load-more'])
const router = useRouter()

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'agriculture', name: 'الزراعة' },
  { id: 'women', name: 'تمكين المرأة' },
  { id: 'peace', name: 'بناء السلام' },
  { id: 'environment', name: 'البيئة' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return props.projects
  }
  return props.projects.filter(project => project.category === activeCategory.value)
})

const handleProjectClick = (project) => {
  emit('project-click', project)
  router.push(`/projects/${project.id}`)
}

const handleLoadMore = () => {
  emit('load-more')
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
