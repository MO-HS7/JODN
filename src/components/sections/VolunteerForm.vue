<template>
  <section class="section-padding bg-cream dark:bg-dark-secondary">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-4">
            انضم كمتطوع
          </h2>
          <p class="text-gray-600 dark:text-dark-text-secondary">
            كن جزءًا من التغيير الإيجابي في المجتمع
          </p>
        </div>
        
        <!-- Form Card -->
        <div class="bg-white dark:bg-dark-primary rounded-2xl shadow-xl p-8 md:p-12">
          <form @submit.prevent="handleSubmit">
            <div class="space-y-6">
              <!-- Personal Information -->
              <div class="grid md:grid-cols-2 gap-6">
                <BaseInput
                  id="firstName"
                  v-model="formData.firstName"
                  label="الاسم الأول"
                  placeholder="أدخل اسمك الأول"
                  required
                  :error="errors.firstName"
                />
                
                <BaseInput
                  id="lastName"
                  v-model="formData.lastName"
                  label="اسم العائلة"
                  placeholder="أدخل اسم العائلة"
                  required
                  :error="errors.lastName"
                />
              </div>
              
              <!-- Contact Information -->
              <div class="grid md:grid-cols-2 gap-6">
                <BaseInput
                  id="email"
                  v-model="formData.email"
                  type="email"
                  label="البريد الإلكتروني"
                  placeholder="example@email.com"
                  required
                  :error="errors.email"
                />
                
                <BaseInput
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  label="رقم الهاتف"
                  placeholder="+967 XXX XXX XXX"
                  required
                  :error="errors.phone"
                />
              </div>
              
              <!-- Location -->
              <BaseInput
                id="city"
                v-model="formData.city"
                label="المدينة"
                placeholder="أدخل مدينتك"
                required
                :error="errors.city"
              />
              
              <!-- Area of Interest -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  مجال الاهتمام <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="formData.interest"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand dark:focus:ring-brand-dark focus:border-brand dark:focus:border-brand-dark transition-all bg-white dark:bg-dark-secondary text-gray-900 dark:text-dark-text"
                >
                  <option value="">اختر مجال الاهتمام</option>
                  <option value="agriculture">الزراعة والتنمية الريفية</option>
                  <option value="women">تمكين المرأة</option>
                  <option value="peace">بناء السلام</option>
                  <option value="environment">حماية البيئة</option>
                  <option value="education">التعليم والتدريب</option>
                  <option value="health">الصحة المجتمعية</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              
              <!-- Skills -->
              <BaseInput
                id="skills"
                v-model="formData.skills"
                type="textarea"
                label="المهارات والخبرات"
                placeholder="أخبرنا عن مهاراتك وخبراتك التي يمكن أن تساهم بها"
                :rows="4"
                hint="مثال: إدارة المشاريع، التصميم، التدريب، إلخ"
              />
              
              <!-- Availability -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                  التفرغ <span class="text-red-500">*</span>
                </label>
                <div class="space-y-2">
                  <label
                    v-for="option in availabilityOptions"
                    :key="option.value"
                    class="flex items-center gap-3 p-3 border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-tertiary cursor-pointer transition-colors"
                  >
                    <input
                      v-model="formData.availability"
                      type="radio"
                      :value="option.value"
                      required
                      class="w-4 h-4 text-brand dark:text-brand-dark focus:ring-brand dark:focus:ring-brand-dark"
                    />
                    <div>
                      <div class="font-semibold text-gray-800 dark:text-dark-text">{{ option.label }}</div>
                      <div class="text-sm text-gray-500 dark:text-dark-text-secondary">{{ option.description }}</div>
                    </div>
                  </label>
                </div>
              </div>
              
              <!-- Message -->
              <BaseInput
                id="message"
                v-model="formData.message"
                type="textarea"
                label="رسالة إضافية"
                placeholder="أخبرنا لماذا تريد الانضمام كمتطوع"
                :rows="4"
              />
              
              <!-- Terms Agreement -->
              <div class="flex items-start gap-3">
                <input
                  id="terms"
                  v-model="formData.agreeToTerms"
                  type="checkbox"
                  required
                  class="mt-1 w-4 h-4 text-brand dark:text-brand-dark focus:ring-brand dark:focus:ring-brand-dark rounded"
                />
                <label for="terms" class="text-sm text-gray-600 dark:text-dark-text-secondary">
                  أوافق على <a href="#" class="text-brand dark:text-brand-dark hover:text-gold dark:hover:text-gold-dark font-semibold">الشروط والأحكام</a> 
                  و <a href="#" class="text-brand dark:text-brand-dark hover:text-gold dark:hover:text-gold-dark font-semibold">سياسة الخصوصية</a>
                </label>
              </div>
              
              <!-- Submit Button -->
              <div class="flex gap-4">
                <BaseButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isSubmitting"
                  full-width
                >
                  إرسال الطلب
                </BaseButton>
              </div>
              
              <!-- Success Message -->
              <div
                v-if="showSuccess"
                class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300 text-center"
              >
                ✓ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  interest: '',
  skills: '',
  availability: '',
  message: '',
  agreeToTerms: false
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const availabilityOptions = [
  {
    value: 'full-time',
    label: 'دوام كامل',
    description: 'متاح للعمل بدوام كامل'
  },
  {
    value: 'part-time',
    label: 'دوام جزئي',
    description: 'متاح لعدة ساعات في الأسبوع'
  },
  {
    value: 'weekends',
    label: 'عطلة نهاية الأسبوع',
    description: 'متاح في عطلة نهاية الأسبوع فقط'
  },
  {
    value: 'flexible',
    label: 'مرن',
    description: 'متاح حسب الحاجة'
  }
]

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'البريد الإلكتروني غير صحيح'
    isValid = false
  }
  
  // Validate phone
  const phoneRegex = /^[+]?[0-9]{10,15}$/
  if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'رقم الهاتف غير صحيح'
    isValid = false
  }
  
  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'boolean') {
        formData[key] = false
      } else {
        formData[key] = ''
      }
    })
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
