<script setup lang="ts">
  import HeaderNav from './layout/HeaderNav.vue';
</script>

<template>
  <div class="container">
    <HeaderNav />
    <div class="pajes mt-2">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  .container{
    max-width: 1280px;
    margin: auto;
  }
</style>
