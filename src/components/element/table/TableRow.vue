<template>
  <tr>
    <td
      v-for="(field, index) in fields"
      :key="index"
    >
      {{ item[field.key] }}
    </td>
    <td>
      <button-component @click="$emit('edit-item', item[fieldKey])">
        <i class="fas fa-edit" />
      </button-component>
      &nbsp;
      <button-component
        variant="danger"
        @click="$emit('remove-item', item[fieldKey])"
      >
        <i class="fas fa-trash" />
      </button-component>
    </td>
  </tr>
</template>

<script setup>
import {
  defineProps, defineEmits,
} from 'vue';
import ButtonComponent from '@/components/element/button/index.vue';

defineProps({
  fields: {
    type: Array,
    required: true,
  },
  fieldKey: {
    type: String,
    default: '@id',
  },
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(['edit-item', 'remove-item']);
</script>
