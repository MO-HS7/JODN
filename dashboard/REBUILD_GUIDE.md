# 🔧 دليل إعادة بناء Dashboard - جودن

## ✅ الملفات المكتملة

### الصور (تم إنشاؤها بنجاح)
- ✓ 9 صور للأفاتار في `public/avatars/`
- ✓ 6 صور للمحتوى في `public/images/`

### الملفات الأساسية
- ✓ `src/router/index.js` - نظام التوجيه
- ✓ `src/stores/theme.js` - إدارة الثيم

---

## 📋 قائمة الملفات المطلوبة

### 1. الملفات الأساسية الباقية
قم بإنشاء هذه الملفات يدوياً أو استخدم Cascade:

#### `src/App.vue`
```vue
<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-dark-primary">
    <router-view />
  </div>
</template>

<script setup>
// App uses router-view for navigation
</script>
```

#### `src/main.js`
```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

router.isReady().then(() => {
  console.log('Router routes:', router.getRoutes())
  app.mount('#app')
  console.log('App mounted successfully')
})
```

---

### 2. مكونات Layout (3 ملفات)

احفظ هذه الملفات في `src/components/layout/`:

- **Sidebar.vue** - القائمة الجانبية
- **TopNavigation.vue** - شريط التنقل العلوي مع الإشعارات
- **DashboardLayout.vue** - تخطيط Dashboard الرئيسي

---

### 3. مكونات Dashboard (7 ملفات)

احفظ في `src/components/dashboard/`:

- **ProjectsChart.vue** - مخطط المشاريع (مع BarController)
- **VolunteersChart.vue** - مخطط المتطوعين (مع LineController + Filler)
- **BudgetAllocationChart.vue** - مخطط الميزانية (مع DoughnutController)
- **ProjectsPerformanceChart.vue** - أداء المشاريع (مع BarController)
- **StatCard.vue** - بطاقات الإحصائيات
- **RecentVolunteers.vue** - آخر المتطوعين
- **ProjectCard.vue** - بطاقة المشروع (مع تنسيق التاريخ الميلادي)

---

### 4. الصفحات (8 ملفات)

احفظ في `src/pages/`:

- **Dashboard.vue** - الصفحة الرئيسية (مع "مرحباً، مهند رشيد")
- **Projects.vue** - صفحة المشاريع
- **Volunteers.vue** - صفحة المتطوعين (8 متطوعين)
- **Reports.vue** - صفحة التقارير
- **Media.vue** - صفحة الوسائط
- **News.vue** - صفحة الأخبار
- **Settings.vue** - صفحة الإعدادات (مع اسم "مهند رشيد")
- **Notifications.vue** - صفحة الإشعارات

---

## 🔑 البيانات الهامة المطلوبة

### المستخدمون
- **مدير النظام**: مهند رشيد
- **الصورة**: `/avatars/admin.svg`

### قائمة المتطوعين (بالترتيب)
1. أمينة حمود (`/avatars/female-1.svg`)
2. عرفان (`/avatars/male-1.svg`)
3. محمد عمر (`/avatars/male-2.svg`)
4. محمود رياض (`/avatars/male-3.svg`)
5. إبراهيم علي إسماعيل (`/avatars/male-4.svg`)
6. وئام راجح (`/avatars/female-2.svg`)
7. انساب نائف (`/avatars/female-3.svg`)
8. سقاف (`/avatars/male-5.svg`)

### إعدادات التاريخ
- **الأشهر**: كانون الثاني، شباط، آذار، نيسان، أيار، حزيران (ميلادي شامي)
- **التنسيق**: `ar-SY` مع `calendar: 'gregory'`

### Chart.js Controllers المطلوبة
- **ProjectsChart**: `BarController`
- **VolunteersChart**: `LineController` + `Filler`
- **BudgetAllocationChart**: `DoughnutController`
- **ProjectsPerformanceChart**: `BarController`

---

## 🚀 خطوات إعادة البناء

### الطريقة 1: استخدام Cascade (موصى بها)
اطلب من Cascade إنشاء كل ملف على حدة باستخدام الأمر:
```
أنشئ ملف [اسم الملف] بالمحتوى الكامل
```

### الطريقة 2: النسخ اليدوي
1. ارجع إلى المحادثة السابقة
2. انسخ محتوى كل ملف
3. الصق في الموقع الصحيح

### الطريقة 3: من ملفات المرجع
راجع الملفات:
- `CODE_PART1_CORE.md`
- `COMPLETE_CODE_REFERENCE.md`

---

## ✨ ملاحظات إضافية

### الخطوط
استخدام خطوط النظام بدلاً من Google Fonts:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif;
```

### الألوان
- **Brand**: #0079BF
- **Gold**: #F0B331
- **Dark Mode Brand**: #4A90E2

### التوجيه
جميع الصفحات تحت `/dashboard/` باستثناء:
- `/` → redirect إلى `/dashboard`
- `/logout` → تسجيل الخروج

---

## 📞 المساعدة
إذا واجهت أي مشكلة، ارجع إلى المحادثة الأصلية أو اطلب المساعدة من Cascade.

**آخر تحديث**: أكتوبر 2025
