<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <div class="background"></div>
    <div class="content">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: radial-gradient(at 10% 20%, #078d70 0px, transparent 50%),
    radial-gradient(at 20% 20%, #26ceaa 0px, transparent 50%),
    radial-gradient(at 40% 20%, #98e8c1 0px, transparent 50%),
    radial-gradient(at 45% 20%, #ffffff 0px, transparent 50%),
    radial-gradient(at 55% 20%, #7bade2 0px, transparent 50%),
    radial-gradient(at 80% 20%, #7bade2 0px, transparent 50%),
    radial-gradient(at 90% 20%, #5049cc 0px, transparent 50%),
    radial-gradient(at 100% 20%, #3d1a78 0px, transparent 50%),
    radial-gradient(at 10% 60%, #078d70 0px, transparent 50%),
    radial-gradient(at 20% 60%, #26ceaa 0px, transparent 50%),
    radial-gradient(at 30% 60%, #98e8c1 0px, transparent 50%),
    radial-gradient(at 40% 60%, #ffffff 0px, transparent 50%),
    radial-gradient(at 50% 60%, #7bade2 0px, transparent 50%),
    radial-gradient(at 60% 60%, #7bade2 0px, transparent 50%),
    radial-gradient(at 70% 60%, #5049cc 0px, transparent 50%),
    radial-gradient(at 80% 60%, #3d1a78 0px, transparent 50%),
    radial-gradient(at 100% 60%, #3d1a78 0px, transparent 50%),
    radial-gradient(at 10% 80%, #078d70 0px, transparent 50%),
    radial-gradient(at 20% 80%, #26ceaa 0px, transparent 50%),
    radial-gradient(at 40% 80%, #98e8c1 0px, transparent 50%),
    radial-gradient(at 45% 80%, #ffffff 0px, transparent 50%),
    radial-gradient(at 55% 80%, #7bade2 0px, transparent 50%),
    radial-gradient(at 80% 80%, #7bade2 0px, transparent 50%),
    radial-gradient(at 90% 80%, #5049cc 0px, transparent 50%),
    radial-gradient(at 100% 80%, #3d1a78 0px, transparent 50%);

  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  transform: translateZ(0px);
}

.content {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
}
</style>
