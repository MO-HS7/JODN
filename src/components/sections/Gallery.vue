<template>
  <section class="section-padding bg-accent/20 dark:bg-dark-primary">
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
      
      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          :class="item.featured ? 'sm:col-span-2 sm:row-span-2' : ''"
          @click="openLightbox(index)"
        >
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            :class="item.featured ? 'h-96' : 'h-64'"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-sm text-white/90">{{ item.description }}</p>
              
              <!-- View Icon -->
              <div class="mt-4 flex items-center gap-2 text-gold">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="text-sm font-semibold">عرض</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Lightbox Modal -->
      <BaseModal
        v-model="showLightbox"
        size="xl"
        :show-close="true"
      >
        <div class="relative">
          <!-- Main Image -->
          <img
            v-if="currentItem"
            :src="currentItem.image"
            :alt="currentItem.title"
            class="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
          
          <!-- Navigation Arrows -->
          <button
            v-if="currentIndex > 0"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand p-3 rounded-full shadow-lg transition-all"
            @click="previousImage"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            v-if="currentIndex < items.length - 1"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand p-3 rounded-full shadow-lg transition-all"
            @click="nextImage"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Image Info -->
          <div v-if="currentItem" class="mt-4 text-center">
            <h3 class="text-xl font-bold text-brand mb-2">{{ currentItem.title }}</h3>
            <p class="text-gray-600">{{ currentItem.description }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ currentIndex + 1 }} / {{ items.length }}</p>
          </div>
        </div>
      </BaseModal>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'معرض الصور'
  },
  subtitle: {
    type: String,
    default: 'لحظات من عملنا الميداني وتأثيرنا في المجتمع'
  },
  items: {
    type: Array,
    required: true
  }
})

const showLightbox = ref(false)
const currentIndex = ref(0)

const currentItem = computed(() => {
  return props.items[currentIndex.value]
})

const openLightbox = (index) => {
  currentIndex.value = index
  showLightbox.value = true
}

const nextImage = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!showLightbox.value) return
  
  if (event.key === 'ArrowRight') {
    previousImage()
  } else if (event.key === 'ArrowLeft') {
    nextImage()
  } else if (event.key === 'Escape') {
    showLightbox.value = false
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>
