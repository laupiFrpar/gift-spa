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
defineProps<{
  columns: Columns,
}>();
</script>
