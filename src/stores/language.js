import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // State
  const currentLanguage = ref('ar') // Default to Arabic

  // Translation messages
  const messages = {
    ar: {
      // Header translations
      organizationName: 'منظمة جودن',
      organizationTagline: 'للتطوير والسلام',
      home: 'الرئيسية',
      about: 'من نحن',
      projects: 'المشاريع',
      media: 'المركز الإعلامي',
      reports: 'التقارير',
      contact: 'اتصل بنا',
      volunteer: 'تطوع معنا',
      donate: 'تبرع الآن',
      theme: 'الثيم',
      
      // Common translations
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'تم بنجاح',
      cancel: 'إلغاء',
      confirm: 'تأكيد',
      save: 'حفظ',
      edit: 'تعديل',
      delete: 'حذف',
      close: 'إغلاق',
      next: 'التالي',
      previous: 'السابق',
      readMore: 'اقرأ المزيد',
      showLess: 'عرض أقل',
      viewAll: 'عرض الكل',
      search: 'بحث',
      filter: 'تصفية',
      sort: 'ترتيب',
      share: 'مشاركة',
      print: 'طباعة',
      download: 'تحميل',
      upload: 'رفع',
      submit: 'إرسال',
      reset: 'إعادة تعيين',
      clear: 'مسح',
      select: 'اختيار',
      choose: 'اختر',
      required: 'مطلوب',
      optional: 'اختياري',
      yes: 'نعم',
      no: 'لا',
      ok: 'موافق',
      back: 'رجوع',
      forward: 'تقدم',
      refresh: 'تحديث',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      copyright: 'جميع الحقوق محفوظة',
      toggleLanguage: 'تبديل اللغة',
      currentLanguage: 'اللغة الحالية',
      direction: 'الاتجاه',
      commonActions: 'الإجراءات الشائعة',
      navigation: 'التنقل'
    },
    en: {
      // Header translations
      organizationName: 'JODN Organization',
      organizationTagline: 'For Development and Peace',
      home: 'Home',
      about: 'About Us',
      projects: 'Projects',
      media: 'Media Center',
      reports: 'Reports',
      contact: 'Contact Us',
      volunteer: 'Volunteer',
      donate: 'Donate Now',
      theme: 'Theme',
      
      // Common translations
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      readMore: 'Read More',
      showLess: 'Show Less',
      viewAll: 'View All',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      share: 'Share',
      print: 'Print',
      download: 'Download',
      upload: 'Upload',
      submit: 'Submit',
      reset: 'Reset',
      clear: 'Clear',
      select: 'Select',
      choose: 'Choose',
      required: 'Required',
      optional: 'Optional',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
      back: 'Back',
      forward: 'Forward',
      refresh: 'Refresh',
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      contact: 'Contact Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      copyright: 'All rights reserved',
      toggleLanguage: 'Toggle Language',
      currentLanguage: 'Current Language',
      direction: 'Direction',
      commonActions: 'Common Actions',
      navigation: 'Navigation'
    }
  }

  // Getters
  const isArabic = computed(() => currentLanguage.value === 'ar')
  const isEnglish = computed(() => currentLanguage.value === 'en')
  const currentMessages = computed(() => messages[currentLanguage.value])
  const languageCode = computed(() => currentLanguage.value)
  const direction = computed(() => currentLanguage.value === 'ar' ? 'rtl' : 'ltr')

  // Actions
  const toggleLanguage = () => {
    // Toggle between Arabic and English
    const newLanguage = currentLanguage.value === 'ar' ? 'en' : 'ar'
    console.log(`Toggling from ${currentLanguage.value} to ${newLanguage}`)
    currentLanguage.value = newLanguage
    updateLanguage()
    
    // Force reactivity update
    setTimeout(() => {
      console.log(`After toggle - currentLanguage: ${currentLanguage.value}, isArabic: ${isArabic.value}`)
    }, 0)
  }

  const setLanguage = (lang) => {
    if (['ar', 'en'].includes(lang)) {
      currentLanguage.value = lang
      updateLanguage()
    }
  }

  const updateLanguage = () => {
    // Update HTML attributes
    document.documentElement.setAttribute('lang', currentLanguage.value)
    document.documentElement.setAttribute('dir', direction.value)
    
    // Update body class for RTL/LTR styling
    document.body.classList.remove('rtl', 'ltr')
    document.body.classList.add(direction.value)
    
    // Save to localStorage
    localStorage.setItem('language', currentLanguage.value)
    
  }

  const initializeLanguage = () => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && ['ar', 'en'].includes(savedLanguage)) {
      currentLanguage.value = savedLanguage
    } else {
      // Check browser language preference
      const browserLang = navigator.language.split('-')[0]
      currentLanguage.value = browserLang === 'ar' ? 'ar' : 'en'
    }
    updateLanguage()
    
  }

  // Translation helper function
  const t = (key) => {
    return currentMessages.value[key] || key
  }

  return {
    currentLanguage,
    isArabic,
    isEnglish,
    currentMessages,
    languageCode,
    direction,
    messages,
    toggleLanguage,
    setLanguage,
    updateLanguage,
    initializeLanguage,
    t
  }
})
