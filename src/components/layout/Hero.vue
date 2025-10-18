<template>
  <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 via-brand/60 to-brand/80 dark:from-brand-dark/80 dark:via-brand-dark/60 dark:to-brand-dark/80"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container-custom px-4 text-center text-white">
      <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <!-- Badge -->
        <div v-if="badge" class="inline-block">
          <span class="bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark px-4 py-2 rounded-full text-sm font-bold">
            {{ badge }}
          </span>
        </div>
        
        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-slide-up">
          {{ title }}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
          {{ subtitle }}
        </p>
        
        <!-- Description -->
        <p v-if="description" class="text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.3s">
          {{ description }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up" style="animation-delay: 0.4s">
          <BaseButton 
            v-if="primaryCta"
            variant="secondary" 
            size="lg"
            @click="handlePrimaryCta"
          >
            {{ primaryCta }}
          </BaseButton>
          <BaseButton 
            v-if="secondaryCta"
            variant="outline" 
            size="lg"
            class="!text-white !border-white hover:!bg-white hover:!text-brand"
            @click="handleSecondaryCta"
          >
            {{ secondaryCta }}
          </BaseButton>
        </div>
        
        <!-- Stats (Optional) -->
        <div v-if="showStats" class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-slide-up" style="animation-delay: 0.5s">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-gold mb-2">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-white/80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070'
  },
  primaryCta: {
    type: String,
    default: ''
  },
  secondaryCta: {
    type: String,
    default: ''
  },
  showStats: {
    type: Boolean,
    default: false
  },
  stats: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['primary-cta', 'secondary-cta'])

const handlePrimaryCta = () => {
  emit('primary-cta')
}

const handleSecondaryCta = () => {
  emit('secondary-cta')
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out backwards;
}
</style>
