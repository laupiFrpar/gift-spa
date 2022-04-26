<template>
  <div :class="componentClass">
    <label
      :for="id"
      :class="labelClass"
    >{{ label }}</label>
    <div
      :class="{
        'col-sm-8': inline,
        'input-group': group
      }"
    >
      <span
        v-if="group"
        class="input-group-text"
      >{{ groupText }}</span>
      <input
        :id="id"
        v-model="modelValue"
        :name="computeName"
        :type="type"
        :class="inputClass"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="onInput"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps, defineEmits, ref,
} from 'vue';

const props = defineProps({
  group: {
    type: Boolean,
    default: false,
  },
  groupText: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  inline: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['updated-value']);

const modelValue = ref(props.value);

const componentClass = computed(() => {
  const classes = ['mb-3'];

  // if (this.group) {
  //   classes.push('input-group');
  // }

  if (props.inline) {
    classes.push('row');
  }

  return classes;
});

const labelClass = computed(() => {
  let classes = ['form-label'];

  if (props.inline) {
    classes = ['col-sm-4', 'col-form-label'];
  }

  return classes;
});

const inputClass = computed(() => {
  let classes = ['form-control'];

  if (props.readonly) {
    classes = ['form-control-plaintext'];
  }

  return classes;
});

const computeName = computed(() => (props.name ? props.name : props.id));

const onInput = () => {
  emit('updated-value', { value: modelValue.value });
};
</script>
