import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMediaStore = defineStore('media', () => {
  // State
  const images = ref([
    {
      id: 1,
      title: 'تدريب المزارعين على التقنيات الحديثة',
      description: 'ورشة تدريبية للمزارعين في محافظة تعز',
      image: '/src/assets/images/gallery-1.jpg',
      category: 'training',
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'تمكين المرأة الريفية',
      description: 'برنامج تدريب المرأة على المهارات المهنية',
      image: '/src/assets/images/gallery-2.jpg',
      category: 'women',
      date: '2024-01-10',
      featured: false
    },
    {
      id: 3,
      title: 'ورشة بناء السلام',
      description: 'جلسة حوار مجتمعي لتعزيز السلام',
      image: '/src/assets/images/gallery-3.jpg',
      category: 'peace',
      date: '2024-01-05',
      featured: false
    },
    {
      id: 4,
      title: 'الزراعة المستدامة',
      description: 'مشروع الزراعة العضوية في المناطق الريفية',
      image: '/src/assets/images/gallery-4.jpg',
      category: 'agriculture',
      date: '2023-12-20',
      featured: false
    },
    {
      id: 5,
      title: 'توزيع البذور المحسنة',
      description: 'توزيع البذور على المزارعين المستفيدين',
      image: '/src/assets/images/gallery-5.jpg',
      category: 'agriculture',
      date: '2023-12-15',
      featured: false
    },
    {
      id: 6,
      title: 'مشاريع المرأة الصغيرة',
      description: 'افتتاح مشاريع صغيرة للنساء الريفيات',
      image: '/src/assets/images/gallery-6.jpg',
      category: 'women',
      date: '2023-12-10',
      featured: false
    }
  ])

  const videos = ref([
    {
      id: 1,
      title: 'قصة نجاح: تحول حياة مزارع',
      description: 'كيف غير مشروعنا حياة أحد المزارعين',
      thumbnail: '/src/assets/images/gallery-1.jpg',
      url: 'https://www.youtube.com/watch?v=example1',
      duration: '5:30',
      category: 'success-stories',
      date: '2024-01-20'
    },
    {
      id: 2,
      title: 'برنامج تمكين المرأة',
      description: 'نظرة على برنامج تمكين المرأة الريفية',
      thumbnail: '/src/assets/images/gallery-2.jpg',
      url: 'https://www.youtube.com/watch?v=example2',
      duration: '7:15',
      category: 'programs',
      date: '2024-01-15'
    },
    {
      id: 3,
      title: 'ورشة بناء السلام المجتمعي',
      description: 'تغطية ورشة الحوار المجتمعي',
      thumbnail: '/src/assets/images/gallery-3.jpg',
      url: 'https://www.youtube.com/watch?v=example3',
      duration: '10:45',
      category: 'events',
      date: '2024-01-10'
    }
  ])

  const reports = ref([
    {
      id: 1,
      title: 'التقرير السنوي 2023',
      description: 'تقرير شامل عن إنجازات المنظمة خلال عام 2023',
      type: 'annual',
      year: 2023,
      fileUrl: '/reports/annual-report-2023.pdf',
      fileSize: '2.5 MB',
      pages: 45,
      date: '2024-01-01',
      coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070'
    },
    {
      id: 2,
      title: 'تقرير الربع الرابع 2023',
      description: 'تقرير ربع سنوي للفترة أكتوبر - ديسمبر 2023',
      type: 'quarterly',
      year: 2023,
      quarter: 4,
      fileUrl: '/reports/q4-2023.pdf',
      fileSize: '1.2 MB',
      pages: 20,
      date: '2023-12-31',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
    },
    {
      id: 3,
      title: 'تقرير مشروع تمكين المزارعين',
      description: 'تقرير تفصيلي عن مشروع تمكين المزارعين',
      type: 'project',
      year: 2023,
      fileUrl: '/reports/farmers-project-2023.pdf',
      fileSize: '1.8 MB',
      pages: 30,
      date: '2023-11-15',
      coverImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070'
    }
  ])

  const loading = ref(false)
  const error = ref(null)

  // Getters
  const featuredImages = computed(() => 
    images.value.filter(img => img.featured)
  )

  const imagesByCategory = computed(() => (category) => 
    images.value.filter(img => img.category === category)
  )

  const recentVideos = computed(() => 
    videos.value.slice(0, 3)
  )

  const annualReports = computed(() => 
    reports.value.filter(r => r.type === 'annual')
  )

  const quarterlyReports = computed(() => 
    reports.value.filter(r => r.type === 'quarterly')
  )

  // Actions
  const fetchMedia = async () => {
    loading.value = true
    error.value = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return {
        images: images.value,
        videos: videos.value,
        reports: reports.value
      }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const addImage = (image) => {
    const newImage = {
      ...image,
      id: images.value.length + 1,
      date: new Date().toISOString()
    }
    images.value.unshift(newImage)
    return newImage
  }

  const addVideo = (video) => {
    const newVideo = {
      ...video,
      id: videos.value.length + 1,
      date: new Date().toISOString()
    }
    videos.value.unshift(newVideo)
    return newVideo
  }

  const addReport = (report) => {
    const newReport = {
      ...report,
      id: reports.value.length + 1,
      date: new Date().toISOString()
    }
    reports.value.unshift(newReport)
    return newReport
  }

  const deleteImage = (id) => {
    const index = images.value.findIndex(img => img.id === id)
    if (index !== -1) {
      images.value.splice(index, 1)
      return true
    }
    return false
  }

  return {
    // State
    images,
    videos,
    reports,
    loading,
    error,
    
    // Getters
    featuredImages,
    imagesByCategory,
    recentVideos,
    annualReports,
    quarterlyReports,
    
    // Actions
    fetchMedia,
    addImage,
    addVideo,
    addReport,
    deleteImage
  }
})
