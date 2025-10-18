<template>
  <div class="get-involved-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">شارك معنا</h1>
        <p class="text-xl">كن جزءًا من التغيير الإيجابي في المجتمع</p>
      </div>
    </section>

    <!-- Volunteer Form -->
    <VolunteerForm />

    <!-- Donate Section -->
    <section id="donate" class="section-padding bg-white dark:bg-dark-primary">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">تبرع الآن</h2>
            <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
              تبرعك يساعدنا في تحسين حياة المجتمعات الريفية
            </p>
          </div>

          <div class="bg-gradient-to-br from-cream to-white dark:from-dark-secondary dark:to-dark-primary rounded-2xl shadow-xl p-8 md:p-12">
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <button
                v-for="amount in donationAmounts"
                :key="amount"
                :class="[
                  'p-6 rounded-xl border-2 transition-all duration-300',
                  selectedAmount === amount
                    ? 'border-brand dark:border-brand-dark bg-brand dark:bg-brand-dark text-white'
                    : 'border-gray-200 dark:border-dark-border hover:border-brand dark:hover:border-brand-dark'
                ]"
                @click="selectedAmount = amount"
              >
                <div class="text-3xl font-bold mb-2">${{ amount }}</div>
                <div class="text-sm">{{ getDonationDescription(amount) }}</div>
              </button>
            </div>

            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                أو أدخل مبلغ مخصص
              </label>
              <input
                v-model="customAmount"
                type="number"
                placeholder="أدخل المبلغ"
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand dark:focus:ring-brand-dark bg-white dark:bg-dark-secondary text-gray-900 dark:text-dark-text"
              />
            </div>

            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                نوع التبرع
              </label>
              <div class="flex gap-4">
                <label class="flex-1 flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-dark-border rounded-lg cursor-pointer hover:border-brand dark:hover:border-brand-dark transition-colors">
                  <input v-model="donationType" type="radio" value="once" class="w-4 h-4 text-brand dark:text-brand-dark" />
                  <span class="font-semibold text-gray-900 dark:text-dark-text">مرة واحدة</span>
                </label>
                <label class="flex-1 flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-dark-border rounded-lg cursor-pointer hover:border-brand dark:hover:border-brand-dark transition-colors">
                  <input v-model="donationType" type="radio" value="monthly" class="w-4 h-4 text-brand dark:text-brand-dark" />
                  <span class="font-semibold text-gray-900 dark:text-dark-text">شهري</span>
                </label>
              </div>
            </div>

            <BaseButton variant="primary" size="lg" full-width @click="handleDonate">
              تبرع الآن
            </BaseButton>

            <p class="text-center text-sm text-gray-500 dark:text-dark-text-secondary mt-4">
              جميع التبرعات آمنة ومشفرة 🔒
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Opportunities -->
    <section class="section-padding bg-cream dark:bg-dark-secondary">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">فرص التطوع</h2>
          <p class="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            اكتشف الفرص المتاحة للتطوع معنا
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <BaseCard
            v-for="opportunity in opportunities"
            :key="opportunity.id"
            :title="opportunity.title"
            :subtitle="opportunity.location"
            :hoverable="true"
          >
            <p class="text-gray-600 dark:text-dark-text-secondary mb-4">{{ opportunity.description }}</p>
            
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ opportunity.duration }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ opportunity.type }}</span>
              </div>
            </div>

            <template #footer>
              <BaseButton variant="primary" size="sm" full-width>
                تقدم الآن
              </BaseButton>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVolunteersStore } from '@/stores/volunteers'
import VolunteerForm from '@/components/sections/VolunteerForm.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const volunteersStore = useVolunteersStore()

const selectedAmount = ref(50)
const customAmount = ref('')
const donationType = ref('once')

const donationAmounts = [25, 50, 100]

const opportunities = computed(() => volunteersStore.opportunities)

const getDonationDescription = (amount) => {
  const descriptions = {
    25: 'يساعد مزارع واحد',
    50: 'يدعم عائلة ريفية',
    100: 'يمول ورشة تدريبية'
  }
  return descriptions[amount] || ''
}

const handleDonate = () => {
  const amount = customAmount.value || selectedAmount.value
  alert(`شكراً لتبرعك بمبلغ $${amount}!`)
}
</script>
