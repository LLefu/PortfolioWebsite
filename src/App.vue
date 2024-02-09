<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
</script>

<template>
  <div class="primaryBackground">
    <div class="primaryComponent content">
      <Navbar />
      <Profile />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
}
</style>
