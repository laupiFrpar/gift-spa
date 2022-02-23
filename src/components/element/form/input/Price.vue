<template>
  <input-component
    id="price"
    label="price"
    type="number"
    :group="true"
    group-text="€"
  />
</template>

<script setup>
import InputComponent from './InputComponent.vue';
</script>
