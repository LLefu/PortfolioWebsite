<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="primaryBackground">
    <div class="primaryComponent content">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
}
</style>
