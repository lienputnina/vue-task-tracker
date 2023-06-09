<script setup lang="ts"></script>

<template>
  <main class="container">
    <HeaderComponent title="Task tracker" />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped src="./assets/main.css"></style>
