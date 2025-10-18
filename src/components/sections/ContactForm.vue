<template>
  <section class="section-padding bg-white dark:bg-dark-primary">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-brand dark:text-brand-dark mb-6">
            تواصل معنا
          </h2>
          <p class="text-gray-600 dark:text-dark-text-secondary mb-8 leading-relaxed">
            نحن هنا للإجابة على استفساراتك ومساعدتك. لا تتردد في التواصل معنا عبر أي من الوسائل التالية.
          </p>
          
          <!-- Contact Details -->
          <div class="space-y-6 mb-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand/10 dark:bg-brand-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-dark-text mb-1">العنوان</h3>
                <p class="text-gray-600 dark:text-dark-text-secondary">محافظة تعز - اليمن</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand/10 dark:bg-brand-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-dark-text mb-1">البريد الإلكتروني</h3>
                <a href="mailto:info@jodp.org" class="text-brand dark:text-brand-dark hover:text-gold dark:hover:text-gold-dark transition-colors">
                  info@jodp.org
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand/10 dark:bg-brand-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-dark-text mb-1">الهاتف</h3>
                <a href="tel:+967123456789" class="text-brand dark:text-brand-dark hover:text-gold dark:hover:text-gold-dark transition-colors">
                  +967 123 456 789
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand/10 dark:bg-brand-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-brand dark:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 dark:text-dark-text mb-1">ساعات العمل</h3>
                <p class="text-gray-600 dark:text-dark-text-secondary">السبت - الخميس: 8:00 ص - 4:00 م</p>
              </div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div>
            <h3 class="font-bold text-gray-800 dark:text-dark-text mb-4">تابعنا على</h3>
            <div class="flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-brand dark:bg-brand-dark hover:bg-gold dark:hover:bg-gold-dark text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-cream dark:bg-dark-secondary rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-brand dark:text-brand-dark mb-6">أرسل رسالة</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <BaseInput
              id="name"
              v-model="formData.name"
              label="الاسم الكامل"
              placeholder="أدخل اسمك الكامل"
              required
              :error="errors.name"
            />
            
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
              :error="errors.phone"
            />
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                الموضوع <span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand dark:focus:ring-brand-dark focus:border-brand dark:focus:border-brand-dark transition-all bg-white dark:bg-dark-secondary text-gray-900 dark:text-dark-text"
              >
                <option value="">اختر الموضوع</option>
                <option value="general">استفسار عام</option>
                <option value="volunteer">التطوع</option>
                <option value="donation">التبرع</option>
                <option value="partnership">الشراكة</option>
                <option value="media">استفسار إعلامي</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            
            <BaseInput
              id="message"
              v-model="formData.message"
              type="textarea"
              label="الرسالة"
              placeholder="اكتب رسالتك هنا..."
              :rows="5"
              required
              :error="errors.message"
            />
            
            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              :loading="isSubmitting"
              full-width
            >
              إرسال الرسالة
            </BaseButton>
            
            <!-- Success Message -->
            <div
              v-if="showSuccess"
              class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300 text-center"
            >
              ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
            </div>
          </form>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-12">
        <div class="bg-gray-200 dark:bg-dark-tertiary rounded-2xl overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.123456789!2d44.0!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiA0NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'IconFacebook' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'IconTwitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'IconInstagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'IconLinkedIn' }
]

const validateForm = () => {
  let isValid = true
  
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    errors.email = 'البريد الإلكتروني غير صحيح'
    isValid = false
  }
  
  if (formData.message.length < 10) {
    errors.message = 'الرسالة يجب أن تكون 10 أحرف على الأقل'
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
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Contact form submitted:', formData)
    
    showSuccess.value = true
    
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<script>
const IconFacebook = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
}

const IconTwitter = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
}

const IconInstagram = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`
}

const IconLinkedIn = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
}

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconLinkedIn
  }
}
</script>
