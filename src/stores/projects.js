import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  // State
  const projects = ref([
    {
      id: 1,
      title: 'مشروع تمكين المزارعين',
      description: 'برنامج شامل لتمكين المزارعين اقتصاديًا من خلال توفير التدريب والموارد اللازمة لتحسين الإنتاجية الزراعية.',
      category: 'agriculture',
      location: 'تعز، اليمن',
      status: 'نشط',
      progress: 75,
      beneficiaries: 500,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070',
      startDate: '2023-01-15',
      endDate: '2024-12-31',
      budget: 50000,
      partners: ['منظمة الأغذية والزراعة', 'البنك الدولي'],
      objectives: [
        'تحسين الإنتاجية الزراعية بنسبة 40%',
        'تدريب 500 مزارع على تقنيات حديثة',
        'توفير البذور والأدوات الزراعية'
      ],
      achievements: [
        'تدريب 375 مزارع حتى الآن',
        'توزيع 10,000 كجم من البذور المحسنة',
        'زيادة الإنتاج بنسبة 30%'
      ]
    },
    {
      id: 2,
      title: 'برنامج تمكين المرأة الريفية',
      description: 'مبادرة لتمكين المرأة الريفية اقتصاديًا واجتماعيًا من خلال التدريب المهني وتوفير فرص العمل.',
      category: 'women',
      location: 'تعز، اليمن',
      status: 'نشط',
      progress: 60,
      beneficiaries: 300,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031',
      startDate: '2023-03-01',
      endDate: '2024-06-30',
      budget: 35000,
      partners: ['هيئة الأمم المتحدة للمرأة'],
      objectives: [
        'تدريب 300 امرأة على مهارات مهنية',
        'إنشاء 50 مشروع صغير',
        'تحسين الدخل الأسري بنسبة 50%'
      ],
      achievements: [
        'تدريب 180 امرأة',
        'إطلاق 30 مشروع صغير',
        'زيادة الدخل بنسبة 35%'
      ]
    },
    {
      id: 3,
      title: 'مبادرة بناء السلام المجتمعي',
      description: 'برنامج لتعزيز السلام والتماسك الاجتماعي في المجتمعات الريفية من خلال الحوار وبناء الثقة.',
      category: 'peace',
      location: 'تعز، اليمن',
      status: 'نشط',
      progress: 85,
      beneficiaries: 1000,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073',
      startDate: '2023-02-01',
      endDate: '2024-01-31',
      budget: 40000,
      partners: ['برنامج الأمم المتحدة الإنمائي'],
      objectives: [
        'تنظيم 20 ورشة حوار مجتمعي',
        'تدريب 100 قائد مجتمعي',
        'حل 50 نزاع محلي'
      ],
      achievements: [
        'تنظيم 17 ورشة حوار',
        'تدريب 85 قائد',
        'حل 42 نزاع بنجاح'
      ]
    },
    {
      id: 4,
      title: 'مشروع الزراعة المستدامة',
      description: 'تعزيز الممارسات الزراعية المستدامة والحفاظ على الموارد الطبيعية.',
      category: 'environment',
      location: 'تعز، اليمن',
      status: 'قريباً',
      progress: 20,
      beneficiaries: 400,
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070',
      startDate: '2024-01-01',
      endDate: '2025-12-31',
      budget: 60000,
      partners: ['الصندوق العالمي للبيئة'],
      objectives: [
        'تدريب على الزراعة العضوية',
        'إنشاء أنظمة ري حديثة',
        'حماية التنوع البيولوجي'
      ],
      achievements: []
    }
  ])

  const loading = ref(false)
  const error = ref(null)

  // Getters
  const activeProjects = computed(() => 
    projects.value.filter(p => p.status === 'نشط')
  )

  const projectsByCategory = computed(() => (category) => 
    projects.value.filter(p => p.category === category)
  )

  const totalBeneficiaries = computed(() => 
    projects.value.reduce((sum, p) => sum + p.beneficiaries, 0)
  )

  const totalBudget = computed(() => 
    projects.value.reduce((sum, p) => sum + p.budget, 0)
  )

  // Actions
  const fetchProjects = async () => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Projects are already loaded in state
      return projects.value
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const getProjectById = (id) => {
    return projects.value.find(p => p.id === id)
  }

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: projects.value.length + 1,
      createdAt: new Date().toISOString()
    }
    projects.value.push(newProject)
    return newProject
  }

  const updateProject = (id, updates) => {
    const index = projects.value.findIndex(p => p.id === id)
    if (index !== -1) {
      projects.value[index] = { ...projects.value[index], ...updates }
      return projects.value[index]
    }
    return null
  }

  const deleteProject = (id) => {
    const index = projects.value.findIndex(p => p.id === id)
    if (index !== -1) {
      projects.value.splice(index, 1)
      return true
    }
    return false
  }

  return {
    // State
    projects,
    loading,
    error,
    
    // Getters
    activeProjects,
    projectsByCategory,
    totalBeneficiaries,
    totalBudget,
    
    // Actions
    fetchProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject
  }
})
