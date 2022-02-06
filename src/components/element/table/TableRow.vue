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

<script>
import ButtonComponent from '../button/index.vue';

export default {
  name: 'TableRow',
  components: {
    ButtonComponent,
  },
  props: {
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
  },
  emits: [
    'edit-item',
    'remove-item',
  ],
  // methods: {
  //   edit() {
  //     this.$emit('edit-item', this.item[this.fieldKey]);
  //   },
  //   remove() {
  //     this.$emit('remove-item', this.item[this.fieldKey]);
  //   },
  // },
};
</script>
