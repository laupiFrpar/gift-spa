<template>
  <form @submit.prevent="handleSubmit">
    <h2
      v-if="title"
      class="text-center"
    >
      {{ title }}
    </h2>
    <div
      v-if="errorMessage"
      class="alert alert-danger"
      role="alert"
    >
      {{ errorMessage }}
    </div>
    <slot />
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  errorMessage: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['submitted']);

const handleSubmit = () => {
  emit('submitted');
};
</script>
