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
      data-test="error-message"
    >
      {{ errorMessage }}
    </div>
    <slot />
  </form>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    errorMessage?: string | null,
    title?: string | null,
  }>(),
  {
    errorMessage: null,
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
