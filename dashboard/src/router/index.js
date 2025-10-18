import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'

// Lazy load page components
const Dashboard = () => import('@/pages/Dashboard.vue')
const Projects = () => import('@/pages/Projects.vue')
const Volunteers = () => import('@/pages/Volunteers.vue')
const Reports = () => import('@/pages/Reports.vue')
const Media = () => import('@/pages/Media.vue')
const News = () => import('@/pages/News.vue')
const Settings = () => import('@/pages/Settings.vue')
const Notifications = () => import('@/pages/Notifications.vue')

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: 'volunteers',
        name: 'Volunteers',
        component: Volunteers
      },
      {
        path: 'reports',
        name: 'Reports',
        component: Reports
      },
      {
        path: 'media',
        name: 'Media',
        component: Media
      },
      {
        path: 'news',
        name: 'News',
        component: News
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: () => {
      console.log('Logging out...')
      window.location.href = '/'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/JODN_Dashboard-/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('Navigating from:', from.path, 'to:', to.path)
  console.log('Route exists:', router.hasRoute(to.name))
  next()
})

router.afterEach((to, from) => {
  console.log('Navigation completed to:', to.path)
})

export default router
