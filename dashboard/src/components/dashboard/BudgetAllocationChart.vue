<template>
  <div class="h-80">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend,
} from 'chart.js'

// Register the required components
ChartJS.register(
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend
)

const chartCanvas = ref(null)

onMounted(() => {
  if (chartCanvas.value) {
    // Ensure components are registered before creating chart
    ChartJS.register(
      ArcElement,
      DoughnutController,
      Tooltip,
      Legend
    )
    
    new ChartJS(chartCanvas.value, {
      type: 'doughnut',
      data: {
        labels: ['التعليم', 'الصحة', 'البيئة', 'التنمية', 'الطوارئ'],
        datasets: [
          {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
              '#0079BF',
              '#F0B331',
              '#28a745',
              '#dc3545',
              '#6f42c1'
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    })
  }
})
</script>
