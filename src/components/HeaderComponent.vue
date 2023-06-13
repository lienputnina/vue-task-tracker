<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComponent
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
