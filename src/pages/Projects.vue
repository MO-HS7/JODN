<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/src/assets/images/projects-hero.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60 dark:from-brand-dark/80 dark:to-brand-dark/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">مشاريعنا</h1>
        <p class="text-xl">نعمل على مشاريع متنوعة لتحسين حياة المجتمعات الريفية</p>
      </div>
    </section>

    <!-- Projects Grid -->
    <ProjectsGrid
      :projects="projects"
      :show-filters="true"
      :show-load-more="false"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import ProjectsGrid from '@/components/sections/ProjectsGrid.vue'

const projectsStore = useProjectsStore()

const projects = computed(() => projectsStore.projects)
</script>
