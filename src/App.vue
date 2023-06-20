<template>
  <main class="container">
    <HeaderComponent
      @toggle-add-task="toggleAddTask"
      title="Task tracker"
      :showAddTask="showAddTask"
    />
    <router-view :showAddTask="showAddTask"></router-view>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },

  methods: {
    async toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },

  emits: ['toggleAddTask', 'showAddTask'],
};
</script>

<style scoped src="./assets/main.css"></style>
