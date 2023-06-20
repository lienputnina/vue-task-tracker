<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComponent
      v-show="homePage"
      @button-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
    showAddTask: Boolean,
  },

  components: {
    ButtonComponent,
  },

  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
