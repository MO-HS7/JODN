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
        labels: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران'],
        datasets: [
          {
            label: 'مكتملة',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#0079BF',
            borderColor: '#0079BF',
            borderWidth: 1
          },
          {
            label: 'قيد التنفيذ',
            data: [7, 11, 5, 8, 3, 7],
            backgroundColor: '#F0B331',
            borderColor: '#F0B331',
            borderWidth: 1
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
