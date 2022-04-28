<template>
  <form @submit.prevent="handleSubmit">
    <h2
      v-if="title"
      class="text-center"
    >
      {{ title }}
    </h2>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert"
    >
      {{ error }}
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

withDefaults(
  defineProps<{
    error?: string | null,
    title?: string | null,
  }>(),
  {
    error: null,
    title: null,
  }
);

const emit = defineEmits<{
  (e: 'submitted'): void,
}>();

const handleSubmit = () => {
  emit('submitted');
};
</script>
