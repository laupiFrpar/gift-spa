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

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  fields: {
    type: Object,
    required: true,
  },
});
</script>
