<template>
  <tr>
    <td
      v-for="(column, index) in columns"
      :key="index"
    >
      {{ item[column.id] }}
    </td>
    <td>
      <button-component @click="$emit('edit-item', item[columnId])">
        <i class="fas fa-edit" />
      </button-component>
      &nbsp;
      <button-component
        variant="danger"
        @click="$emit('remove-item', item[columnId])"
      >
        <i class="fas fa-trash" />
      </button-component>
    </td>
  </tr>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/element/button/ButtonComponent.vue';

withDefaults(
  defineProps<{
    columns: Columns,
    columnId?: string,
    item: Resource,
  }>(),
  {
    columnId: '@id',
  }
);

defineEmits<{
  (e: 'edit-item', id: string): void,
  (e: 'remove-item', id: string): void,
}>();
</script>
