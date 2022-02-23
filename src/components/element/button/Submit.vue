<template>
  <button-component
    type="submit"
    :class="{'disabled': isLoading }"
  >
    <span
      v-show="isLoading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    />
    <span
      v-show="isLoading"
      class="visually-hidden"
    >&nbsp;{{ labelLoading }}</span>
    <span v-show="!isLoading">
      <slot />
    </span>
  </button-component>
</template>

<script setup>
import { defineProps } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  labelLoading: {
    type: String,
    default: 'Loading...',
  },
});
</script>
