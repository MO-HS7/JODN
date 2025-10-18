<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/src/assets/images/about-hero.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60 dark:from-brand-dark/80 dark:to-brand-dark/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
        <p class="text-xl">تعرف على منظمة جودن للتنمية والسلام</p>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-gradient-to-br from-brand to-brand/90 dark:from-brand-dark dark:to-brand-dark/90 text-white p-8 md:p-12 rounded-2xl">
            <div class="w-16 h-16 bg-gold dark:bg-gold-dark rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold mb-4">رؤيتنا</h2>
            <p class="text-white/90 leading-relaxed text-lg">
              خلق بيئة إنتاجية شاملة وآمنة، تساهم في ترسيخ الاستقرار والتنمية، مع التوسع مستقبلًا إلى مناطق نائية أخرى.
            </p>
          </div>

          <div class="bg-gradient-to-br from-gold to-gold/90 dark:from-gold-dark dark:to-gold-dark/90 text-brand dark:text-brand-dark p-8 md:p-12 rounded-2xl">
            <div class="w-16 h-16 bg-brand dark:bg-brand-dark rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold mb-4">رسالتنا</h2>
            <p class="text-brand/90 dark:text-brand-dark/90 leading-relaxed text-lg">
              تمكين المزارعين اقتصاديًا وتحسين جودة حياتهم في الريف اليمني، مع التركيز على دعم المرأة الريفية وتعزيز السلام المجتمعي والحفاظ على الموارد الطبيعية.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section-padding bg-cream dark:bg-dark-primary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">قيمنا</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            القيم التي نؤمن بها وتوجه عملنا اليومي
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 bg-brand/10 dark:bg-brand-dark/10 rounded-lg flex items-center justify-center mb-4">
              <component :is="value.icon" class="w-7 h-7 text-brand dark:text-brand-dark" />
            </div>
            <h3 class="text-xl font-bold text-brand dark:text-brand-dark mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 dark:text-dark-text-secondary text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-8 text-center">قصتنا</h2>
          
          <div class="space-y-6 text-gray-700 dark:text-dark-text-secondary leading-relaxed">
            <p class="text-lg">
              تأسست منظمة جودن للتنمية والسلام في عام 2023 في محافظة تعز باليمن، بهدف تمكين المزارعين اقتصاديًا وتحسين جودة حياتهم في الريف اليمني.
            </p>
            
            <p>
              بدأت رحلتنا من إيمان عميق بأن التنمية المستدامة تبدأ من القاعدة، من المزارعين والمجتمعات الريفية التي تشكل العمود الفقري للاقتصاد اليمني. رأينا الحاجة الملحة لدعم هذه المجتمعات وتزويدها بالأدوات والمعرفة اللازمة لتحسين إنتاجيتها وجودة حياتها.
            </p>
            
            <p>
              منذ تأسيسنا، نجحنا في تنفيذ العديد من المشاريع التنموية التي استفاد منها مئات المزارعين والأسر الريفية. نركز بشكل خاص على تمكين المرأة الريفية، إيمانًا منا بدورها المحوري في التنمية المجتمعية.
            </p>
            
            <p>
              نعمل أيضًا على تعزيز السلام المجتمعي من خلال برامج الحوار وبناء الثقة، ونسعى للحفاظ على الموارد الطبيعية من خلال تشجيع الممارسات الزراعية المستدامة.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="section-padding bg-accent/20 dark:bg-dark-secondary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">منهجيتنا</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            نتبع منهجية شاملة ومستدامة في تنفيذ مشاريعنا
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, index) in approach" :key="index" class="relative">
            <div class="bg-white dark:bg-dark-primary p-8 rounded-xl shadow-md h-full">
              <div class="w-12 h-12 bg-gradient-to-br from-brand to-gold dark:from-brand-dark dark:to-gold-dark text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-bold text-brand dark:text-brand-dark mb-3">{{ step.title }}</h3>
              <p class="text-gray-600 dark:text-dark-text-secondary">{{ step.description }}</p>
            </div>
            
            <!-- Arrow for desktop -->
            <div v-if="index < approach.length - 1" class="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 text-gold dark:text-gold-dark">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">شركاؤنا</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            نفخر بشراكاتنا مع منظمات محلية ودولية
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="partner in partners" :key="partner.name" class="bg-gray-50 dark:bg-dark-secondary p-6 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow">
            <div class="text-center">
              <div class="text-4xl mb-2">{{ partner.icon }}</div>
              <p class="text-sm font-semibold text-gray-700 dark:text-dark-text">{{ partner.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-gradient-to-br from-brand to-brand/90 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">انضم إلى رحلتنا</h2>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          كن جزءًا من التغيير الإيجابي في المجتمع
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton variant="secondary" size="lg" @click="$router.push('/get-involved')">
            تطوع معنا
          </BaseButton>
          <BaseButton variant="outline" size="lg" class="!text-white !border-white hover:!bg-white hover:!text-brand" @click="$router.push('/contact')">
            تواصل معنا
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

const values = [
  {
    title: 'الشفافية',
    description: 'نلتزم بالشفافية الكاملة في جميع عملياتنا وتقاريرنا',
    icon: 'IconTransparency'
  },
  {
    title: 'الاستدامة',
    description: 'نركز على حلول مستدامة طويلة الأمد',
    icon: 'IconSustainability'
  },
  {
    title: 'التمكين',
    description: 'نؤمن بتمكين المجتمعات لتحقيق التنمية الذاتية',
    icon: 'IconEmpowerment'
  },
  {
    title: 'الشراكة',
    description: 'نبني شراكات قوية مع جميع أصحاب المصلحة',
    icon: 'IconPartnership'
  }
]

const approach = [
  {
    title: 'التقييم والتخطيط',
    description: 'نبدأ بتقييم شامل لاحتياجات المجتمع ووضع خطة عمل مفصلة'
  },
  {
    title: 'التنفيذ والمتابعة',
    description: 'ننفذ المشاريع بمشاركة المجتمع مع متابعة دقيقة للتقدم'
  },
  {
    title: 'التقييم والتطوير',
    description: 'نقيم النتائج ونطور برامجنا بناءً على الدروس المستفادة'
  }
]

const partners = [
  { name: 'الأمم المتحدة', icon: '🇺🇳' },
  { name: 'البنك الدولي', icon: '🏦' },
  { name: 'منظمة الأغذية', icon: '🌾' },
  { name: 'اليونيسف', icon: '👶' }
]
</script>

<script>
const IconTransparency = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`
}

const IconSustainability = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
}

const IconEmpowerment = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
}

const IconPartnership = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
}

export default {
  components: {
    IconTransparency,
    IconSustainability,
    IconEmpowerment,
    IconPartnership
  }
}
</script>
