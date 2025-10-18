# 🌱 منظمة جودن للتنمية والسلام | JODP Website

## 📖 نظرة عامة

يهدف هذا المشروع إلى **تطوير موقع إلكتروني تعريفي وتفاعلي لمنظمة جودن للتنمية والسلام**، يعكس رسالة المنظمة ويعزز تواجدها الرقمي.  
يقدّم الموقع معلومات حول رؤية المنظمة، برامجها، إنجازاتها، وقصص النجاح، بالإضافة إلى أدوات تفاعلية للزوار مثل التسجيل للتطوع، التبرع، التواصل المباشر، واستعراض التقارير.

يركّز المشروع على:
- زيادة الوعي بعمل المنظمة ومبادراتها.
- دعم الشفافية ونشر التقارير والمخرجات.
- جذب المتطوعين والداعمين لبناء شراكات فعّالة.
- تقديم تجربة استخدام عصرية وسلسة على مختلف الأجهزة.

---

## 🏢 معلومات عن المنظمة

**الاسم:** منظمة جودن للتنمية والسلام (JODP)  
**النوع:** منظمة غير ربحية  
**سنة التأسيس:** 2023  
**الموقع:** محافظة تعز – اليمن  
**مجال العمل:** تمكين المزارعين اقتصاديًا، التنمية الريفية، دعم المرأة، تعزيز السلام المجتمعي.

### 🎯 الرؤية
> خلق بيئة إنتاجية شاملة وآمنة، تساهم في ترسيخ الاستقرار والتنمية، مع التوسع مستقبلًا إلى مناطق نائية أخرى.

### 💬 الرسالة
> تمكين المزارعين اقتصاديًا وتحسين جودة حياتهم في الريف اليمني، مع التركيز على دعم المرأة الريفية وتعزيز السلام المجتمعي والحفاظ على الموارد الطبيعية.

---

## 🎨 الهوية البصرية (Visual Identity)

### 🖌️ الألوان الأساسية
| اللون | الاستخدام | HEX | ملاحظات |
|-------|-------------|------|----------|
| الأزرق الأساسي | للعناوين، الأزرار الرئيسية، الخلفيات الداكنة | `#0079BF` | يعكس الثقة والتنمية |
| الذهبي / الأصفر | للأزرار الثانوية، الأيقونات، اللمسات البصرية | `#F0B331` | يرمز إلى الأمل والإشراق |
| الكريم الفاتح | خلفيات الأقسام | `#FDF4E7` | يخلق راحة وتباينًا بصريًا |
| الأزرق الفاتح | لعناصر الوسائط والمعارض | `#CCE6F5` | للتوازن البصري |

### 🧩 الهوية البصرية
- استخدام **ألوان دافئة ومتناغمة** تعكس البيئة الريفية والتنمية المستدامة.
- خطوط واضحة sans-serif لسهولة القراءة.
- صور عالية الجودة للمزارعين والأنشطة الريفية.
- أيقونات بسيطة بخطوط نظيفة (line icons).

---

## 💻 التقنية المستخدمة

| المجال | التقنية |
|---------|----------|
| الواجهة الأمامية | **Vue.js 3** + Composition API |
| تنسيق الواجهة | **TailwindCSS** + CSS Variables |
| نظام البناء | **Vite** |
| إدارة الحالة | **Pinia** |
| الواجهة الخلفية (API) | **Laravel 12** |
| قاعدة البيانات | **MySQL** |
| الاستضافة المقترحة | Netlify / Vercel (Frontend) + Laravel API server |

---

## 🧱 أقسام الموقع الأساسية

1. **الصفحة الرئيسية (Home):**
   - بانر (Hero) بصورة خلفية شفافة.
   - عرض المبادرات والمشاريع الحالية.
   - إحصائيات الإنجازات (عدد المستفيدين، البرامج، المشاريع).
   - قصص نجاح مصغّرة.
   - روابط مباشرة للتبرع والتطوع.

2. **من نحن (About):**
   - الرؤية والرسالة والقيم.
   - نبذة عن الفريق والشركاء.

3. **البرامج والمشاريع (Programs / Projects):**
   - قائمة مشاريع قابلة للفلترة.
   - صفحة تفاصيل لكل مشروع مع صور وتقارير.

4. **المركز الإعلامي (Media Center):**
   - صور وفيديوهات وتقارير قابلة للتحميل.
   - عارض Lightbox تفاعلي.

5. **شارك معنا (Get Involved):**
   - نموذج التطوع (Volunteer Form).
   - صفحة التبرع (Donate Page).

6. **التقارير والشفافية (Reports):**
   - تقارير سنوية وفصلية بصيغة PDF.
   - مؤشرات الأداء والنتائج.

7. **اتصل بنا (Contact):**
   - نموذج تواصل مباشر.
   - خريطة جوجل لموقع المنظمة.

---

## ⚙️ تجربة المستخدم والتصميم (UX/UI)

### 🔹 الهيدر (Header)
- **شفاف في البداية** فوق صورة البانر مثل موقع Greenpeace.
- عند التمرير للأسفل، يصبح بلون أزرق صلب (`#0079BF`) مع تأثير ظل خفيف ويظل ثابتًا (Sticky).
- يحتوي على شعار المنظمة وروابط التنقل وأزرار (تبرع / تطوع).

### 🔹 البانر (Hero)
- صورة خلفية عالية الجودة مع تدرج لوني ناعم.
- نص رئيسي + دعوة للفعل (CTA).
- زرّين: *تبرع الآن* و *انضم كمتطوع*.

### 🔹 الأزرار (Buttons)
- Primary: أزرق (`#0079BF`) / نص أبيض.
- Secondary: ذهبي (`#F0B331`) / نص أزرق.

### 🔹 الرسوم المتحركة (Animations)
- حركات انتقالية خفيفة عند تمرير الصفحة.
- ظهور تدريجي للعناصر (fade-in + slide).

---

## 🧩 بنية المكونات (Vue Components)

src/
components/
base/ # BaseButton.vue, BaseInput.vue, BaseCard.vue
layout/ # Header.vue, Footer.vue, Hero.vue
sections/ # Stats.vue, Projects.vue, Gallery.vue
pages/
Home.vue
About.vue
Projects.vue
Contact.vue
store/
user.js
assets/
images/
styles/
tokens.css


---

## 🔧 إعداد الألوان في TailwindCSS

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#0079BF',
        gold: '#F0B331',
        cream: '#FDF4E7',
        accent: '#CCE6F5'
      }
    }
  }
}

🧠 مثال كود الهيدر (Header.vue)
<template>
  <header :class="headerClass" class="fixed w-full z-40 transition-colors duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
      <img src="/logo.svg" alt="JODP Logo" class="h-10" />
      <nav class="hidden md:flex gap-6 font-semibold">
        <a href="#about" class="hover:text-[var(--gold)]">من نحن</a>
        <a href="#projects">المشاريع</a>
        <a href="#media">الوسائط</a>
        <a href="#contact">اتصل بنا</a>
      </nav>
      <button class="bg-[var(--gold)] text-[var(--brand)] px-4 py-2 rounded font-bold">
        تبرع الآن
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const scrolled = ref(false)
const headerClass = computed(() => scrolled.value
  ? 'bg-[var(--brand)]/95 text-white shadow-md'
  : 'bg-transparent text-white'
)

onMounted(() => {
  const onScroll = () => scrolled.value = window.scrollY > 80
  window.addEventListener('scroll', onScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

🧭 تعليمات التشغيل (Development Setup)
# Clone repository
git clone <repo-url>
cd jodp-frontend

# Install dependencies
npm install

# Run in dev mode
npm run dev

# Build for production
npm run build

🔐 الجودة والمعايير

✅ تصميم متجاوب بالكامل (Responsive: Desktop, Tablet, Mobile)

✅ تحسين الأداء: صور WebP + lazy loading + caching

✅ وصولية (Accessibility): ARIA labels, contrast, keyboard navigation

✅ تحسين محركات البحث (SEO): عناوين وصفية، وسم meta, og:image

✅ أمان: نماذج محمية بـ reCAPTCHA، HTTPS، فحص إدخالات المستخدم

🧩 توصيات التصميم على Figma
📁 يجب أن يحتوي ملف Figma على:

صفحة Design System (ألوان، Typography، Buttons، Cards، Forms)

صفحة Components Library

Frames: Home, About, Projects, Media, Contact (لكل من Desktop/Tablet/Mobile)

Prototypes: حركة الهيدر، النماذج التفاعلية، الفلاتر، Lightbox

Annotations: توضيح التفاعلات والسلوك عند التمرير

📜 برومبت جاهز لمصمم Figma
صمّم واجهات موقع "جودن للتنمية والسلام" باستخدام الألوان:
#0079BF (أزرق أساسي) و #F0B331 (ذهبي ثانوي).
اجعل الهيدر شفافًا فوق صورة البانر، وعند التمرير يصبح أزرق ثابت.
أضف دعوة للفعل واضحة (تبرع / تطوع).
احرص على التباين العالي، الخط الواضح، والمساحات البيضاء.
استخدم صورًا حقيقية لمزارعين وأنشطة تنموية.



دعم اللغتين (العربية والإنجليزية).

