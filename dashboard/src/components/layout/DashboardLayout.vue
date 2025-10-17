<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark-primary">
    <!-- Sidebar -->
    <Sidebar :isSidebarOpen="isSidebarOpen" />

    <!-- Main Content -->
    <div class="main-content" :class="{ 'main-content-sidebar-open': isSidebarOpen }">
      <!-- Top Navigation -->
      <TopNavigation @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="p-6">
        <div class="max-w-7xl mx-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import TopNavigation from './TopNavigation.vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
