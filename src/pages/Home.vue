<template>
  <div class="home-page">
    <!-- Hero Section -->
    <Hero
      title="منظمة جودن للتنمية والسلام"
      subtitle="تمكين المزارعين اقتصاديًا وتحسين جودة حياتهم في الريف اليمني"
      description="نعمل على خلق بيئة إنتاجية شاملة وآمنة، تساهم في ترسيخ الاستقرار والتنمية المستدامة"
      badge="منذ 2023"
      background-image="/src/assets/images/hero-farming.jpg"
      primary-cta="تبرع الآن"
      secondary-cta="انضم كمتطوع"
      :show-stats="true"
      :stats="heroStats"
      @primary-cta="handleDonateCta"
      @secondary-cta="handleVolunteerCta"
    />

    <!-- Stats Section -->
    <Stats
      title="إنجازاتنا بالأرقام"
      subtitle="نفخر بما حققناه من إنجازات في خدمة المجتمع"
      :stats="statsData"
    />

    <!-- About Preview -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-6">
              من نحن
            </h2>
            <p class="text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-6">
              منظمة جودن للتنمية والسلام هي منظمة غير ربحية تأسست عام 2023 في محافظة تعز باليمن. 
              نعمل على تمكين المزارعين اقتصاديًا وتحسين جودة حياتهم في الريف اليمني، مع التركيز على 
              دعم المرأة الريفية وتعزيز السلام المجتمعي والحفاظ على الموارد الطبيعية.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-gold dark:bg-gold-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-dark-text">رؤيتنا</h4>
                  <p class="text-gray-600 dark:text-dark-text-secondary text-sm">خلق بيئة إنتاجية شاملة وآمنة تساهم في ترسيخ الاستقرار والتنمية</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-gold dark:bg-gold-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-dark-text">رسالتنا</h4>
                  <p class="text-gray-600 dark:text-dark-text-secondary text-sm">تمكين المزارعين اقتصاديًا ودعم المرأة الريفية وتعزيز السلام المجتمعي</p>
                </div>
              </div>
            </div>
            
            <BaseButton variant="primary" size="lg" @click="$router.push('/about')">
              اعرف المزيد عنا
            </BaseButton>
          </div>
          
          <div class="order-1 lg:order-2">
            <div class="relative">
              <img
                src="/src/assets/images/hero-farming.jpg"
                alt="عن المنظمة"
                class="rounded-2xl shadow-2xl w-full"
              />
              <div class="absolute -bottom-6 -right-6 bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark p-6 rounded-xl shadow-xl">
                <div class="text-4xl font-bold">2023</div>
                <div class="text-sm font-semibold">سنة التأسيس</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <ProjectsGrid
      title="مشاريعنا"
      subtitle="نعمل على مشاريع متنوعة لتحسين حياة المجتمعات الريفية"
      :projects="featuredProjects"
      :show-filters="false"
      :show-load-more="true"
      @load-more="$router.push('/projects')"
    />

    <!-- Success Stories -->
    <SuccessStories
      title="قصص النجاح"
      subtitle="تعرف على قصص الأشخاص الذين غيرت مشاريعنا حياتهم"
      :stories="successStories"
      :auto-play="true"
    />

    <!-- Gallery Preview -->
    <Gallery
      title="معرض الصور"
      subtitle="لحظات من عملنا الميداني وتأثيرنا في المجتمع"
      :items="galleryItems"
    />

    <!-- Call to Action -->
    <section class="section-padding bg-gradient-to-br from-brand to-brand/90 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          كن جزءًا من التغيير
        </h2>
        <p class="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          انضم إلينا في رحلتنا لتحسين حياة المجتمعات الريفية وبناء مستقبل أفضل
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton 
            variant="secondary" 
            size="lg"
            @click="$router.push('/get-involved')"
          >
            تطوع معنا
          </BaseButton>
          <BaseButton 
            variant="outline" 
            size="lg"
            class="!text-white !border-white hover:!bg-white hover:!text-brand"
            @click="handleDonateCta"
          >
            تبرع الآن
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'
import { useMediaStore } from '@/stores/media'
import { useVolunteersStore } from '@/stores/volunteers'
import Hero from '@/components/layout/Hero.vue'
import Stats from '@/components/sections/Stats.vue'
import ProjectsGrid from '@/components/sections/ProjectsGrid.vue'
import SuccessStories from '@/components/sections/SuccessStories.vue'
import Gallery from '@/components/sections/Gallery.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()
const projectsStore = useProjectsStore()
const mediaStore = useMediaStore()
const volunteersStore = useVolunteersStore()

// Hero Stats
const heroStats = [
  { value: '500+', label: 'مستفيد' },
  { value: '15', label: 'مشروع' },
  { value: '150+', label: 'متطوع' },
  { value: '4', label: 'سنوات خبرة' }
]

// Stats Data
const statsData = [
  {
    value: 500,
    suffix: '+',
    label: 'مستفيد',
    description: 'من برامجنا المختلفة',
    icon: 'users'
  },
  {
    value: 15,
    suffix: '',
    label: 'مشروع نشط',
    description: 'في مجالات متعددة',
    icon: 'project'
  },
  {
    value: 150,
    suffix: '+',
    label: 'متطوع',
    description: 'يعملون معنا',
    icon: 'heart'
  },
  {
    value: 25,
    suffix: '',
    label: 'شراكة',
    description: 'مع منظمات محلية ودولية',
    icon: 'award'
  }
]

// Featured Projects
const featuredProjects = computed(() => 
  projectsStore.activeProjects.slice(0, 3)
)

// Success Stories
const successStories = computed(() => 
  volunteersStore.successStories
)

// Gallery Items
const galleryItems = computed(() => 
  mediaStore.images.slice(0, 6)
)

// Actions
const handleDonateCta = () => {
  router.push('/get-involved#donate')
}

const handleVolunteerCta = () => {
  router.push('/get-involved')
}
</script>
