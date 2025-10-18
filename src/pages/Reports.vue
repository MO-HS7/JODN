<template>
  <div class="reports-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">التقارير والشفافية</h1>
        <p class="text-xl">تقارير سنوية وفصلية عن أنشطتنا وإنجازاتنا</p>
      </div>
    </section>

    <!-- Reports Section -->
    <section class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">تقاريرنا</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            نلتزم بالشفافية الكاملة في نشر تقاريرنا ومخرجاتنا
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="filter in filters"
            :key="filter.value"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all duration-300',
              activeFilter === filter.value
                ? 'bg-brand dark:bg-brand-dark text-white shadow-lg'
                : 'bg-gray-100 dark:bg-dark-secondary text-gray-600 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-tertiary'
            ]"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Reports Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="report in filteredReports"
            :key="report.id"
            class="bg-white dark:bg-dark-secondary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <!-- Cover Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="report.coverImage"
                :alt="report.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute top-4 right-4 bg-gold dark:bg-gold-dark text-brand dark:text-brand-dark px-3 py-1 rounded-full text-sm font-bold">
                {{ report.year }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand dark:text-brand-dark mb-2">{{ report.title }}</h3>
              <p class="text-gray-600 dark:text-dark-text-secondary text-sm mb-4">{{ report.description }}</p>

              <!-- Meta Info -->
              <div class="flex items-center justify-between text-sm text-gray-500 dark:text-dark-text-secondary mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{{ report.pages }} صفحة</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span>{{ report.fileSize }}</span>
                </div>
              </div>

              <!-- Download Button -->
              <BaseButton variant="primary" size="sm" full-width @click="downloadReport(report)">
                تحميل التقرير
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparency Statement -->
    <section class="section-padding bg-cream dark:bg-dark-secondary">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-20 h-20 bg-brand dark:bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-6">التزامنا بالشفافية</h2>
          <p class="text-gray-700 dark:text-dark-text-secondary leading-relaxed text-lg mb-8">
            نؤمن بأهمية الشفافية والمساءلة في عملنا. نلتزم بنشر تقارير دورية عن أنشطتنا، 
            مخرجاتنا، وميزانياتنا. جميع تقاريرنا متاحة للجمهور ويمكن تحميلها مجاناً.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
              <div class="text-4xl font-bold text-brand dark:text-brand-dark mb-2">100%</div>
              <div class="text-gray-600 dark:text-dark-text-secondary">شفافية مالية</div>
            </div>
            <div class="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
              <div class="text-4xl font-bold text-brand dark:text-brand-dark mb-2">{{ reports.length }}</div>
              <div class="text-gray-600 dark:text-dark-text-secondary">تقرير منشور</div>
            </div>
            <div class="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
              <div class="text-4xl font-bold text-brand dark:text-brand-dark mb-2">4</div>
              <div class="text-gray-600 dark:text-dark-text-secondary">تقارير سنوية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMediaStore } from '@/stores/media'
import BaseButton from '@/components/base/BaseButton.vue'

const mediaStore = useMediaStore()

const activeFilter = ref('all')

const filters = [
  { label: 'الكل', value: 'all' },
  { label: 'تقارير سنوية', value: 'annual' },
  { label: 'تقارير ربع سنوية', value: 'quarterly' },
  { label: 'تقارير المشاريع', value: 'project' }
]

const reports = computed(() => mediaStore.reports)

const filteredReports = computed(() => {
  if (activeFilter.value === 'all') {
    return reports.value
  }
  return reports.value.filter(report => report.type === activeFilter.value)
})

const downloadReport = (report) => {
  alert(`جاري تحميل: ${report.title}`)
  // In production, this would trigger actual file download
  // window.open(report.fileUrl, '_blank')
}
</script>
