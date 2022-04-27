<template>
  <button-component
    :href="href"
    role="button"
  >
    <slot />
  </button-component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
