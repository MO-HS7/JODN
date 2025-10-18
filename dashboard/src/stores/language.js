import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // State
  const currentLanguage = ref('ar') // Default to Arabic

  // Translation messages
  const messages = {
    ar: {
      // Dashboard translations
      dashboard: 'لوحة التحكم',
      home: 'الرئيسية',
      projects: 'المشاريع',
      volunteers: 'المتطوعين',
      reports: 'التقارير',
      media: 'الوسائط',
      news: 'الأخبار',
      settings: 'الإعدادات',
      notifications: 'الإشعارات',
      search: 'البحث...',
      profile: 'الملف الشخصي',
      logout: 'تسجيل الخروج',
      newVolunteerJoined: 'متطوع جديد انضم',
      newProjectAdded: 'مشروع جديد تم إضافته',
      monthlyReportReady: 'تقرير شهري جاهز',
      viewAllNotifications: 'عرض جميع الإشعارات',
      page: 'الصفحة',
      
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
      refresh: 'تحديث'
    },
    en: {
      // Dashboard translations
      dashboard: 'Dashboard',
      home: 'Home',
      projects: 'Projects',
      volunteers: 'Volunteers',
      reports: 'Reports',
      media: 'Media',
      news: 'News',
      settings: 'Settings',
      notifications: 'Notifications',
      search: 'Search...',
      profile: 'Profile',
      logout: 'Logout',
      newVolunteerJoined: 'New volunteer joined',
      newProjectAdded: 'New project added',
      monthlyReportReady: 'Monthly report ready',
      viewAllNotifications: 'View all notifications',
      page: 'Page',
      
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
      refresh: 'Refresh'
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
    currentLanguage.value = newLanguage
    updateLanguage()
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
