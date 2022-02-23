<template>
  <tr>
    <th
      v-for="(field, index) in fields"
      :key="index"
    >
      {{ field.label }}
    </th>
    <th>&nbsp;</th>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  fields: {
    type: Array,
    required: true,
  },
});
</script>
