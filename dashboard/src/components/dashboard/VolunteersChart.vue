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
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartCanvas = ref(null)

onMounted(() => {
  if (chartCanvas.value) {
    // Ensure components are registered before creating chart
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      LineController,
      Title,
      Tooltip,
      Legend,
      Filler
    )
    
    new ChartJS(chartCanvas.value, {
      type: 'line',
      data: {
        labels: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران'],
        datasets: [
          {
            label: 'متطوعين جدد',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#0079BF',
            backgroundColor: 'rgba(0, 121, 191, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
})
</script>
