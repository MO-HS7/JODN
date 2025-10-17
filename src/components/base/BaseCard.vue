<template>
  <div :class="cardClasses">
    <div v-if="image" class="relative overflow-hidden">
      <img 
        :src="image" 
        :alt="imageAlt" 
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div v-if="badge" class="absolute top-4 right-4 bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark px-3 py-1 rounded-full text-sm font-bold">
        {{ badge }}
      </div>
    </div>
    
    <div :class="contentPadding">
      <h3 v-if="title" class="text-xl font-bold text-brand dark:text-brand-dark mb-2">
        {{ title }}
      </h3>
      
      <p v-if="subtitle" class="text-sm text-gray-500 dark:text-dark-text-secondary mb-3">
        {{ subtitle }}
      </p>
      
      <div class="text-gray-700 dark:text-dark-text">
        <slot />
      </div>
      
      <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  hoverable: {
    type: Boolean,
    default: true
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const cardClasses = computed(() => {
  const base = 'bg-white dark:bg-dark-secondary rounded-lg shadow-md dark:shadow-lg dark:shadow-black/20 overflow-hidden transition-all duration-300'
  const hover = props.hoverable ? 'hover:shadow-xl hover:-translate-y-2 cursor-pointer' : ''
  
  return `${base} ${hover}`
})

const contentPadding = computed(() => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  return paddings[props.padding]
})
</script>
