<template>
  <tr>
    <th
      v-for="(column, index) in columns"
      :key="index"
    >
      {{ column.label }}
    </th>
    <th>&nbsp;</th>
  </tr>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  columns: Columns,
}>();
</script>
