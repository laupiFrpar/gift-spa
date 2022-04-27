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

interface Props {
  error: string | null;
  title: string;
}

defineProps<Props>();
// defineProps({
//   error: {
//     type: String,
//     default: null,
//   },
//   title: {
//     type: String,
//     default: null,
//   },
// });

const emit = defineEmits(['submitted']);

const handleSubmit = () => {
  emit('submitted');
};
</script>
