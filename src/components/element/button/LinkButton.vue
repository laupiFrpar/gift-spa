<template>
  <button-component
    :href="href"
    role="button"
  >
    <slot />
  </button-component>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';

defineProps<{
  href: string | null,
}>();
</script>
