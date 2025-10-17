<template>
  <section class="section-padding bg-cream dark:bg-dark-primary">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="bg-white dark:bg-dark-secondary rounded-lg p-8 text-center shadow-md dark:shadow-lg dark:shadow-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Icon -->
          <div class="w-16 h-16 bg-gradient-to-br from-brand to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg v-if="stat.icon === 'users'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else-if="stat.icon === 'project'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <svg v-else-if="stat.icon === 'heart'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg v-else-if="stat.icon === 'award'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          
          <!-- Counter -->
          <div class="text-4xl md:text-5xl font-bold text-brand dark:text-brand-dark mb-2">
            <span ref="counters">{{ animatedValues[index] }}</span>
            <span class="text-gold dark:text-gold-dark">{{ stat.suffix }}</span>
          </div>
          
          <!-- Label -->
          <div class="text-gray-600 dark:text-dark-text font-semibold">{{ stat.label }}</div>
          
          <!-- Description -->
          <p v-if="stat.description" class="text-sm text-gray-500 dark:text-dark-text-secondary mt-2">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'إنجازاتنا بالأرقام'
  },
  subtitle: {
    type: String,
    default: 'نفخر بما حققناه من إنجازات في خدمة المجتمع'
  },
  stats: {
    type: Array,
    required: true
  }
})

const animatedValues = ref(props.stats.map(() => 0))
const counters = ref([])

const animateCounter = (index, target, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      animatedValues.value[index] = target
      clearInterval(timer)
    } else {
      animatedValues.value[index] = Math.floor(current)
    }
  }, 16)
}

onMounted(() => {
  // Intersection Observer for animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          props.stats.forEach((stat, index) => {
            animateCounter(index, stat.value)
          })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )
  
  if (counters.value[0]) {
    observer.observe(counters.value[0])
  }
})
</script>
