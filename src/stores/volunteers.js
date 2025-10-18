import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useVolunteersStore = defineStore('volunteers', () => {
  // State
  const volunteers = ref([])
  const applications = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Statistics
  const stats = ref({
    totalVolunteers: 150,
    activeVolunteers: 85,
    totalHours: 3500,
    projectsCompleted: 25
  })

  // Volunteer opportunities
  const opportunities = ref([
    {
      id: 1,
      title: 'مدرب زراعي',
      description: 'نبحث عن مدربين لتدريب المزارعين على التقنيات الحديثة',
      category: 'agriculture',
      location: 'تعز',
      type: 'part-time',
      duration: '3 أشهر',
      requirements: [
        'خبرة في المجال الزراعي',
        'مهارات تدريبية جيدة',
        'القدرة على العمل الميداني'
      ],
      benefits: [
        'شهادة تطوع',
        'تدريب مجاني',
        'فرصة للتواصل'
      ],
      status: 'open',
      applicants: 12
    },
    {
      id: 2,
      title: 'منسق برامج المرأة',
      description: 'منسق لبرامج تمكين المرأة الريفية',
      category: 'women',
      location: 'تعز',
      type: 'full-time',
      duration: '6 أشهر',
      requirements: [
        'خبرة في العمل مع المجتمعات',
        'مهارات تنظيمية قوية',
        'إجادة اللغة العربية والإنجليزية'
      ],
      benefits: [
        'شهادة تطوع',
        'بدل مواصلات',
        'تأمين صحي'
      ],
      status: 'open',
      applicants: 8
    },
    {
      id: 3,
      title: 'مصمم جرافيك',
      description: 'مصمم لإنشاء محتوى بصري للحملات التوعوية',
      category: 'media',
      location: 'عن بعد',
      type: 'flexible',
      duration: 'مستمر',
      requirements: [
        'إتقان برامج التصميم',
        'خبرة في التصميم للمنظمات',
        'إبداع وابتكار'
      ],
      benefits: [
        'شهادة تطوع',
        'عمل عن بعد',
        'مرونة في الوقت'
      ],
      status: 'open',
      applicants: 15
    },
    {
      id: 4,
      title: 'ميسر حوار مجتمعي',
      description: 'ميسر لورش بناء السلام والحوار المجتمعي',
      category: 'peace',
      location: 'تعز',
      type: 'part-time',
      duration: '4 أشهر',
      requirements: [
        'خبرة في التيسير',
        'مهارات تواصل ممتازة',
        'فهم للسياق المحلي'
      ],
      benefits: [
        'شهادة تطوع',
        'تدريب متخصص',
        'بدل مواصلات'
      ],
      status: 'open',
      applicants: 6
    }
  ])

  // Success stories from volunteers
  const successStories = ref([
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مدرب زراعي متطوع',
      location: 'تعز',
      quote: 'التطوع مع منظمة جودن أعطاني فرصة لإحداث تغيير حقيقي في مجتمعي. رؤية المزارعين يحسنون إنتاجهم بفضل التدريب الذي قدمته كان أمراً رائعاً.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070',
      duration: '6 أشهر',
      impact: [
        'درب 50 مزارعاً',
        'زيادة الإنتاج 35%',
        'تحسين تقنيات الري'
      ]
    },
    {
      id: 2,
      name: 'فاطمة علي',
      role: 'منسقة برامج المرأة',
      location: 'تعز',
      quote: 'العمل مع النساء الريفيات وتمكينهن اقتصادياً كان تجربة غيرت حياتي. كل امرأة نجحت في إطلاق مشروعها الصغير هي قصة نجاح تستحق الاحتفال.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187',
      duration: '8 أشهر',
      impact: [
        'دعمت 40 امرأة',
        'أطلقت 15 مشروعاً',
        'زيادة الدخل 45%'
      ]
    },
    {
      id: 3,
      name: 'خالد حسن',
      role: 'ميسر حوار مجتمعي',
      location: 'تعز',
      quote: 'المساهمة في بناء السلام المجتمعي من خلال الحوار كانت تجربة مؤثرة. رؤية المجتمعات تتصالح وتتعاون كان أمراً يستحق كل الجهد.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187',
      duration: '5 أشهر',
      impact: [
        'نظم 12 ورشة حوار',
        'حل 8 نزاعات',
        'درب 25 قائداً'
      ]
    }
  ])

  // Getters
  const totalVolunteers = computed(() => stats.value.totalVolunteers)
  const activeVolunteers = computed(() => stats.value.activeVolunteers)
  const openOpportunities = computed(() => 
    opportunities.value.filter(opp => opp.status === 'open')
  )
  const opportunitiesByCategory = computed(() => (category) => 
    opportunities.value.filter(opp => opp.category === category)
  )

  // Actions
  const submitApplication = async (applicationData) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const newApplication = {
        ...applicationData,
        id: applications.value.length + 1,
        status: 'pending',
        submittedAt: new Date().toISOString()
      }
      
      applications.value.push(newApplication)
      
      return {
        success: true,
        message: 'تم إرسال طلبك بنجاح',
        application: newApplication
      }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchOpportunities = async () => {
    loading.value = true
    error.value = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return opportunities.value
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const getOpportunityById = (id) => {
    return opportunities.value.find(opp => opp.id === id)
  }

  const fetchStats = async () => {
    loading.value = true
    error.value = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return stats.value
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const addVolunteer = (volunteer) => {
    const newVolunteer = {
      ...volunteer,
      id: volunteers.value.length + 1,
      joinedAt: new Date().toISOString()
    }
    volunteers.value.push(newVolunteer)
    stats.value.totalVolunteers++
    return newVolunteer
  }

  return {
    // State
    volunteers,
    applications,
    opportunities,
    successStories,
    stats,
    loading,
    error,
    
    // Getters
    totalVolunteers,
    activeVolunteers,
    openOpportunities,
    opportunitiesByCategory,
    
    // Actions
    submitApplication,
    fetchOpportunities,
    getOpportunityById,
    fetchStats,
    addVolunteer
  }
})
