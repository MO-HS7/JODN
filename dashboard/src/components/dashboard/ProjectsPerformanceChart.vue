<template>
  <div class="h-80">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
)

const chartCanvas = ref(null)

onMounted(() => {
  if (chartCanvas.value) {
    // Ensure components are registered before creating chart
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      BarController,
      Title,
      Tooltip,
      Legend
    )
    
    new ChartJS(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: ['التعليم', 'الصحة', 'البيئة', 'التنمية', 'الطوارئ'],
        datasets: [
          {
            label: 'نسبة الإنجاز %',
            data: [85, 72, 90, 65, 78],
            backgroundColor: '#0079BF',
            borderColor: '#0079BF',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    })
  }
})
</script>
