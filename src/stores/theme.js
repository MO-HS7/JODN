import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)

  // Getters
  const theme = computed(() => isDark.value ? 'dark' : 'light')
  const themeClass = computed(() => isDark.value ? 'dark' : '')

  // Actions
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const setTheme = (theme) => {
    isDark.value = theme === 'dark'
    updateTheme()
  }

  const updateTheme = () => {
    // Update document class
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const initializeTheme = () => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Check system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  }

  return {
    isDark,
    theme,
    themeClass,
    toggleTheme,
    setTheme,
    initializeTheme
  }
})
