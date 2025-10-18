<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner ml-2"></span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-brand dark:bg-brand-dark text-white hover:bg-brand/90 dark:hover:bg-brand-dark/90 focus:ring-brand dark:focus:ring-brand-dark shadow-md hover:shadow-lg',
    secondary: 'bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark hover:bg-gold/90 dark:hover:bg-gold-dark/90 focus:ring-gold dark:focus:ring-gold-dark shadow-md hover:shadow-lg',
    outline: 'border-2 border-brand dark:border-brand-dark text-brand dark:text-brand-dark hover:bg-brand dark:hover:bg-brand-dark hover:text-white focus:ring-brand dark:focus:ring-brand-dark',
    text: 'text-brand dark:text-brand-dark hover:text-gold dark:hover:text-gold-dark focus:ring-brand dark:focus:ring-brand-dark'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const width = props.fullWidth ? 'w-full' : ''
  const disabled = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${width} ${disabled}`
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
