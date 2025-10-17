<template>
  <div class="media-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/src/assets/images/media-hero.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60 dark:from-brand-dark/80 dark:to-brand-dark/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">المركز الإعلامي</h1>
        <p class="text-xl">صور وفيديوهات من عملنا الميداني</p>
      </div>
    </section>

    <!-- Gallery -->
    <Gallery
      title="معرض الصور"
      subtitle="لحظات من عملنا الميداني وتأثيرنا في المجتمع"
      :items="images"
    />

    <!-- Videos Section -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">الفيديوهات</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">شاهد قصص النجاح والفعاليات</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="video in videos" :key="video.id" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-64 object-cover" />
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-brand mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div class="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {{ video.duration }}
              </div>
            </div>
            <h3 class="text-lg font-bold text-brand dark:text-brand-dark mt-4">{{ video.title }}</h3>
            <p class="text-gray-600 dark:text-dark-text-secondary text-sm">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMediaStore } from '@/stores/media'
import Gallery from '@/components/sections/Gallery.vue'

const mediaStore = useMediaStore()

const images = computed(() => mediaStore.images)
const videos = computed(() => mediaStore.videos)
</script>
