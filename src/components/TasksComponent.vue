<template>
  <div :key="task.id" v-for="task in tasks">
    <SingleTaskComponent
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
import SingleTaskComponent from './SingleTaskComponent.vue';

export interface TasksProps {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export default {
  name: 'TasksComponent',
  props: {
    tasks: Array,
  },
  components: {
    SingleTaskComponent,
  },
  emits: ['delete-task', 'toggle-reminder'],
};
</script>
