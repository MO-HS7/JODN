import { useLanguageStore } from '@/stores/language'

/**
 * Composable for easy access to translation functionality
 * Usage: const { t, isArabic, isEnglish, toggleLanguage } = useTranslation()
 * 
 * Button behavior:
 * - When current language is Arabic (isArabic = true) → Button shows "EN" (to switch to English)
 * - When current language is English (isArabic = false) → Button shows "AR" (to switch to Arabic)
 */
export function useTranslation() {
  const languageStore = useLanguageStore()
  
  return {
    // Translation function
    t: languageStore.t,
    
    // Language state
    isArabic: languageStore.isArabic,
    isEnglish: languageStore.isEnglish,
    currentLanguage: languageStore.currentLanguage,
    direction: languageStore.direction,
    
    // Language actions
    toggleLanguage: languageStore.toggleLanguage,
    setLanguage: languageStore.setLanguage,
    
    // Messages for direct access if needed
    messages: languageStore.messages
  }
}
