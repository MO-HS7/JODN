# دليل نظام الثيم - Theme System Guide

## نظرة عامة
تم إضافة نظام تبديل الثيم بين الفاتح والمظلم إلى موقع منظمة جودن للتنمية والسلام. النظام يدعم:
- تبديل سلس بين الثيم الفاتح والمظلم
- حفظ تفضيل المستخدم في localStorage
- دعم تلقائي لتفضيل النظام
- تصميم متجاوب لجميع الأجهزة

## المكونات المضافة

### 1. Theme Store (`src/stores/theme.js`)
- إدارة حالة الثيم
- حفظ التفضيل في localStorage
- دعم تفضيل النظام التلقائي

### 2. Theme Toggle Component (`src/components/base/ThemeToggle.vue`)
- زر تبديل أنيق مع أيقونات الشمس والقمر
- انتقالات سلسة
- دعم الوصولية (Accessibility)

### 3. تحديثات Tailwind Config
- إضافة ألوان الثيم المظلم
- تفعيل `darkMode: 'class'`
- ألوان مخصصة للثيم المظلم

## كيفية الاستخدام

### في المكونات
```vue
<template>
  <div class="bg-white dark:bg-dark-primary text-gray-800 dark:text-dark-text">
    <!-- المحتوى -->
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const { isDark, toggleTheme } = themeStore
</script>
```

### الألوان المتاحة للثيم المظلم
- `dark:bg-dark-primary` - الخلفية الرئيسية
- `dark:bg-dark-secondary` - الخلفية الثانوية  
- `dark:bg-dark-tertiary` - الخلفية الثالثية
- `dark:text-dark-text` - النص الرئيسي
- `dark:text-dark-text-secondary` - النص الثانوي
- `dark:border-dark-border` - الحدود

### الألوان المحدثة
- `dark:text-brand-dark` - لون العلامة التجارية المظلم
- `dark:bg-brand-dark` - خلفية العلامة التجارية المظلمة
- `dark:text-gold-dark` - لون الذهبي المظلم
- `dark:bg-gold-dark` - خلفية الذهبي المظلمة

## الميزات

### 1. حفظ التفضيل
- يتم حفظ تفضيل المستخدم تلقائياً في localStorage
- يتم استرجاع التفضيل عند إعادة تحميل الصفحة

### 2. دعم النظام
- إذا لم يكن هناك تفضيل محفوظ، يتم استخدام تفضيل النظام
- `window.matchMedia('(prefers-color-scheme: dark)')`

### 3. انتقالات سلسة
- جميع العناصر تدعم انتقالات سلسة عند تغيير الثيم
- مدة الانتقال: 0.3 ثانية

### 4. دعم الوصولية
- `aria-label` للزر
- دعم لوحة المفاتيح
- تركيز واضح

## التحديثات المطبقة

### المكونات المحدثة
- ✅ Header - إضافة زر التبديل
- ✅ Footer - دعم الثيم المظلم
- ✅ BaseCard - ألوان الثيم المظلم
- ✅ BaseButton - ألوان الثيم المظلم  
- ✅ BaseInput - ألوان الثيم المظلم
- ✅ Home Page - ألوان الثيم المظلم

### الملفات المحدثة
- ✅ `vite.config.js` - إصلاح Vue runtime compilation
- ✅ `tailwind.config.js` - إضافة ألوان الثيم المظلم
- ✅ `src/assets/styles/main.css` - CSS variables للثيم المظلم
- ✅ `src/main.js` - تهيئة الثيم

## الاختبار

### كيفية اختبار النظام
1. افتح الموقع في المتصفح
2. انقر على زر تبديل الثيم في الـ Header
3. تأكد من تغيير جميع الألوان
4. أعد تحميل الصفحة وتأكد من حفظ التفضيل
5. جرب تغيير تفضيل النظام في إعدادات المتصفح

### المتصفحات المدعومة
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## استكشاف الأخطاء

### مشاكل شائعة
1. **الثيم لا يتغير**: تأكد من إضافة `dark:` classes
2. **الألوان لا تظهر**: تأكد من إعداد `darkMode: 'class'` في Tailwind
3. **الانتقالات غير سلسة**: تأكد من إضافة `transition-all duration-300`

### حل المشاكل
```bash
# إعادة تشغيل خادم التطوير
npm run dev

# تنظيف cache
npm run build
```

## التطوير المستقبلي

### إضافات مقترحة
- [ ] ثيمات إضافية (أزرق، أخضر، إلخ)
- [ ] تخصيص الألوان من قبل المستخدم
- [ ] دعم الثيمات الموسمية
- [ ] تحسين الأداء للثيمات المعقدة

### مساهمة
لإضافة دعم الثيم المظلم لمكون جديد:
1. أضف `dark:` classes للعناصر
2. استخدم الألوان المحددة في `tailwind.config.js`
3. اختبر في كلا الثيمين
4. تأكد من الانتقالات السلسة
