<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <input
        v-if="type !== 'textarea'"
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
      />
      
      <textarea
        v-else
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
      ></textarea>
      
      <div v-if="icon" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-text-secondary">
        {{ icon }}
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const inputClasses = computed(() => {
  const base = 'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1'
  const state = props.error 
    ? 'border-red-500 focus:ring-red-500' 
    : 'border-gray-300 dark:border-dark-border focus:ring-brand dark:focus:ring-brand-dark focus:border-brand dark:focus:border-brand-dark'
  const disabled = props.disabled ? 'bg-gray-100 dark:bg-dark-tertiary cursor-not-allowed' : 'bg-white dark:bg-dark-secondary'
  const withIcon = props.icon ? 'pr-10' : ''
  const textColor = 'text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-secondary'
  
  return `${base} ${state} ${disabled} ${withIcon} ${textColor}`
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleBlur = (event) => {
  emit('blur', event)
}
</script>
