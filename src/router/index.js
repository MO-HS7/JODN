import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'الصفحة الرئيسية - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: {
      title: 'من نحن - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/Projects.vue'),
    meta: {
      title: 'المشاريع - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/media',
    name: 'Media',
    component: () => import('@/pages/Media.vue'),
    meta: {
      title: 'المركز الإعلامي - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('@/pages/GetInvolved.vue'),
    meta: {
      title: 'شارك معنا - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('@/pages/Reports.vue'),
    meta: {
      title: 'التقارير والشفافية - منظمة جودن للتنمية والسلام'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      title: 'اتصل بنا - منظمة جودن للتنمية والسلام'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'منظمة جودن للتنمية والسلام'
  next()
})

export default router
