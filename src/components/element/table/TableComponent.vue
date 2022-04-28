<template>
  <div class="table-responsive-sm">
    <table class="table table-hover table-sm">
      <thead>
        <table-header :columns="columns" />
      </thead>
      <tbody>
        <table-row
          v-for="item in items"
          v-show="!loading && items.length > 0"
          :key="item['@id']"
          :item="item"
          :columns="columns"
          @edit-item="$emit('edit-item', item['@id'])"
          @remove-item="$emit('remove-item', item['@id'])"
        />
        <tr
          v-show="loading || items.length === 0"
          class="text-center"
        >
          <td colspan="3">
            <loading v-show="loading" />
            <span v-show="!loading && items.length === 0">{{ emptyMessageDefault }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

import TableRow from './RowTable.vue';
import TableHeader from './HeaderTable.vue';

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    emptyMessage?: string | null,
    columns: Columns,
    items: Array<Resource>,
    loading: boolean,
  }>(),
  {
    emptyMessage: null,
  }
);

defineEmits<{
  (e: 'edit-item', id: string): void,
  (e: 'remove-item', id: string): void,
}>();

const emptyMessageDefault = props.emptyMessage || t('common.table.empty-message');
</script>
