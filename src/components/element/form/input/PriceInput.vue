<template>
  <input-component
    id="price"
    label="price"
    type="number"
    :group="true"
    group-text="€"
  />
</template>

<script setup lang="ts">
import InputComponent from './InputComponent.vue';
</script>
