<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/src/assets/images/contact-hero.jpg')"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-brand/80 to-brand/60 dark:from-brand-dark/80 dark:to-brand-dark/60"></div>
      <div class="relative z-10 container-custom text-center text-white px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
        <p class="text-xl">نحن هنا للإجابة على استفساراتك</p>
      </div>
    </section>

    <!-- Contact Form -->
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '@/components/sections/ContactForm.vue'
</script>
