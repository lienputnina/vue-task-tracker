<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonComponent text="Add Task" color="green" />
  </header>
</template>

<script lang="ts">
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'HeaderComponent',
  props: {
    title: String,
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
