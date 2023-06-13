<template>
  <button @click="onClick()" :style="{ background: color }" class="button">
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    color: String,
  },

  methods: {
    onClick() {
      this.$emit('button-click');
    },
  },
};
</script>
