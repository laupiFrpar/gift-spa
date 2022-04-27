<template>
  <div class="table-responsive-sm">
    <table class="table table-hover table-sm">
      <thead>
        <table-header :fields="fields" />
      </thead>
      <tbody>
        <table-row
          v-for="item in items"
          v-show="!loading && items.length > 0"
          :key="item['@id']"
          :item="item"
          :fields="fields"
          @edit-item="$emit('edit-item', item['@id'])"
          @remove-item="$emit('remove-item', item['@id'])"
        />
        <tr
          v-show="loading || items.length === 0"
          class="text-center"
        >
          <td colspan="3">
            <loading v-show="loading" />
            <span v-show="!loading && items.length === 0">{{ emptyMessage }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import TableRow from './TableRow.vue';
import TableHeader from './TableHeader.vue';

defineProps({
  emptyMessage: {
    type: String,
    default: 'No items',
  },
  fields: {
    type: Array,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['edit-item', 'remove-item']);
</script>
