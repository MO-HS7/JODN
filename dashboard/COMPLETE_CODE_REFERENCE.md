# مرجع الكود الكامل - Dashboard

هذا الملف يحتوي على كل الكود المطلوب لإعادة بناء Dashboard

---

## 1. package.json
```json
{
  "name": "jodn-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.5",
    "pinia": "^2.1.7",
    "chart.js": "^4.4.1",
    "@heroicons/vue": "^2.1.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0"
  }
}
```

---

## 2. tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0079BF',
          dark: '#4A90E2',
        },
        gold: {
          DEFAULT: '#F0B331',
          dark: '#FFD700',
        },
        cream: '#FDF4E7',
        accent: '#CCE6F5',
        dark: {
          primary: '#1A1A1A',
          secondary: '#2D2D2D',
          tertiary: '#3A3A3A',
          border: '#404040',
          text: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 3. vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

## 4. postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 5. index.html
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>لوحة التحكم - جودن</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 6. src/main.js
```js
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
  console.log('Router is ready:', router.getRoutes())
  app.mount('#app')
  console.log('App mounted successfully')
})
```

---

## 7. src/App.vue
```vue
<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-dark-primary">
    <router-view />
  </div>
</template>

<script setup>
// App now uses router-view to enable proper navigation
</script>
```

---

## 8. src/assets/styles/main.css
```css
/* Using system fonts instead of Google Fonts for better performance and offline support */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables for Brand Colors */
:root {
  --brand: #0079BF;
  --gold: #F0B331;
  --cream: #FDF4E7;
  --accent: #CCE6F5;
  
  /* Light theme colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}

/* Dark theme colors */
.dark {
  --brand: #4A90E2;
  --gold: #FFD700;
  --cream: #2D2D2D;
  --accent: #1A365D;
  
  --bg-primary: #1A1A1A;
  --bg-secondary: #2D2D2D;
  --text-primary: #E5E5E5;
  --text-secondary: #B0B0B0;
  --border-color: #404040;
}

/* Base Styles */
@layer base {
  * {
    @apply box-border;
  }

  body {
    @apply bg-white dark:bg-dark-primary text-gray-800 dark:text-dark-text;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arial', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-brand dark:text-brand-dark;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl md:text-4xl lg:text-5xl;
  }

  h3 {
    @apply text-2xl md:text-3xl;
  }

  a {
    @apply transition-colors duration-300;
  }

  /* Dark theme specific styles */
  .dark {
    color-scheme: dark;
  }
}

/* Custom Utilities */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent;
  }

  .btn-primary {
    @apply bg-brand text-white px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-all duration-300 shadow-md hover:shadow-lg;
  }

  .btn-secondary {
    @apply bg-gold text-brand px-6 py-3 rounded-lg font-bold hover:bg-gold/90 transition-all duration-300 shadow-md hover:shadow-lg;
  }

  .section-padding {
    @apply py-16 md:py-24 px-4 md:px-8;
  }

  .container-custom {
    @apply max-w-7xl mx-auto;
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
  }

  /* Dashboard specific styles */
  .sidebar {
    @apply fixed top-0 right-0 h-full w-64 bg-white dark:bg-dark-secondary shadow-lg transform transition-transform duration-300 ease-in-out;
  }

  .sidebar-closed {
    @apply translate-x-full;
  }

  .main-content {
    @apply transition-all duration-300 ease-in-out;
  }

  .main-content-sidebar-open {
    @apply mr-64;
  }

  .dashboard-card {
    @apply bg-white dark:bg-dark-secondary rounded-lg shadow-md p-6 border border-gray-200 dark:border-dark-border;
  }

  .stat-card {
    @apply dashboard-card hover:shadow-lg transition-all duration-300;
  }

  .chart-container {
    @apply dashboard-card h-96;
  }
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* RTL Support */
[dir="rtl"] {
  direction: rtl;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--brand);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gold);
}

/* Loading Spinner */
.spinner {
  border: 3px solid rgba(0, 121, 191, 0.1);
  border-top: 3px solid var(--brand);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

تابع في الملف التالي...
