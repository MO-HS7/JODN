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
      
      <!-- Stories Carousel -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Story Card -->
        <div class="bg-gradient-to-br from-cream to-white dark:from-dark-secondary dark:to-dark-primary rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <!-- Image Side -->
            <div class="relative h-64 md:h-auto">
              <img
                :src="currentStory.image"
                :alt="currentStory.name"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 right-4 bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark px-4 py-2 rounded-full font-bold text-sm">
                قصة نجاح
              </div>
            </div>
            
            <!-- Content Side -->
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <!-- Quote Icon -->
              <svg class="w-12 h-12 text-gold/30 dark:text-gold-dark/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <!-- Story Text -->
              <p class="text-gray-700 dark:text-dark-text text-lg leading-relaxed mb-6 italic">
                "{{ currentStory.quote }}"
              </p>
              
              <!-- Author Info -->
              <div class="border-t border-gray-200 dark:border-dark-border pt-6">
                <h4 class="text-xl font-bold text-brand dark:text-brand-dark mb-1">
                  {{ currentStory.name }}
                </h4>
                <p class="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">
                  {{ currentStory.role }} - {{ currentStory.location }}
                </p>
                
                <!-- Impact Stats -->
                <div v-if="currentStory.impact" class="flex flex-wrap gap-4 mt-4">
                  <div
                    v-for="(stat, key) in currentStory.impact"
                    :key="key"
                    class="flex items-center gap-2 text-sm"
                  >
                    <div class="w-2 h-2 bg-gold dark:bg-gold-dark rounded-full"></div>
                    <span class="text-gray-600 dark:text-dark-text-secondary">{{ stat }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Dots -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(story, index) in stories"
            :key="index"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentIndex === index
                ? 'bg-brand dark:bg-brand-dark w-8'
                : 'bg-gray-300 dark:bg-dark-tertiary hover:bg-gray-400 dark:hover:bg-dark-border'
            ]"
            @click="goToStory(index)"
          ></button>
        </div>
        
        <!-- Navigation Arrows -->
        <button
          class="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 bg-white dark:bg-dark-secondary hover:bg-brand dark:hover:bg-brand-dark text-brand dark:text-brand-dark hover:text-white p-3 rounded-full shadow-lg dark:shadow-black/20 transition-all duration-300"
          @click="nextStory"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          class="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 bg-white dark:bg-dark-secondary hover:bg-brand dark:hover:bg-brand-dark text-brand dark:text-brand-dark hover:text-white p-3 rounded-full shadow-lg dark:shadow-black/20 transition-all duration-300"
          @click="previousStory"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'قصص النجاح'
  },
  subtitle: {
    type: String,
    default: 'تعرف على قصص الأشخاص الذين غيرت مشاريعنا حياتهم'
  },
  stories: {
    type: Array,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  autoPlayInterval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoPlayTimer = null

const currentStory = computed(() => {
  return props.stories[currentIndex.value]
})

const nextStory = () => {
  currentIndex.value = (currentIndex.value + 1) % props.stories.length
  resetAutoPlay()
}

const previousStory = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.stories.length - 1 
    : currentIndex.value - 1
  resetAutoPlay()
}

const goToStory = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayTimer = setInterval(() => {
      nextStory()
    }, props.autoPlayInterval)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>
