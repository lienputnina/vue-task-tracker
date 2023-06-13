<template>
  <main class="container">
    <HeaderComponent
      @toggle-add-task="toggleAddTask"
      title="Task tracker"
      :showAddTask="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTaskComponent @add-task="addTask" />
    </div>
    <TasksComponent
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </main>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import TasksComponent from './components/TasksComponent.vue';
import type { TasksProps } from './components/TasksComponent.vue';
import AddTaskComponent from './components/AddTaskComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    TasksComponent,
    AddTaskComponent,
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },

  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },

    addTask(task: TasksProps) {
      this.tasks = [...this.tasks, task];
    },

    deleteTask(id: TasksProps) {
      if (confirm('Are you sure')) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },

    toggleReminder(id: TasksProps) {
      //@ts-ignore
      this.tasks = this.tasks.map((task) =>
        //@ts-ignore
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      );
    },
  },

  created() {
    this.tasks = [
      //@ts-ignore
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      //@ts-ignore
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },

      //@ts-ignore
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd at 11:00am',
        reminder: false,
      },
    ];
  },
};
</script>

<style scoped src="./assets/main.css"></style>
