<template>
  <AddTaskComponent v-show="showAddTask" @add-task="addTask" />
  <TasksComponent
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script lang="ts">
import TasksComponent from '../components/TasksComponent.vue';
import type { TasksProps } from '../components/TasksComponent.vue';
import AddTaskComponent from '../components/AddTaskComponent.vue';
import { TASKS_API } from '../utils/constants';

export default {
  name: 'HomeComponent',
  props: {
    showAddTask: Boolean,
  },
  components: {
    TasksComponent,
    AddTaskComponent,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    async fetchSingleTask(id: TasksProps) {
      const res = await fetch(`${TASKS_API}/${id}`);
      const data = await res.json();
      return data;
    },
    async fetchTasks() {
      const res = await fetch(`${TASKS_API}`);
      const data = await res.json();
      return data;
    },
    async addTask(task: TasksProps) {
      const res = await fetch(`${TASKS_API}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    async deleteTask(id: TasksProps) {
      if (confirm('Are you sure')) {
        const res = await fetch(`${TASKS_API}/${id}`, {
          method: 'DELETE',
        });

        res.status === 200
          ? //@ts-ignore
            (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task');
      }
    },

    async toggleReminder(id: TasksProps) {
      const taskToToggle = await this.fetchSingleTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`${TASKS_API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      });

      const data = await res.json();

      //@ts-ignore
      this.tasks = this.tasks.map((task) =>
        //@ts-ignore
        task.id === id ? { ...task, reminder: data.reminder } : task,
      );
    },
  },

  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
