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
        :data-test="id"
        @input="onInput"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    group?: boolean,
    groupText?: string|null,
    id: string,
    inline?: boolean,
    label: string,
    name?: string|null,
    placeholder?: string,
    readonly?: boolean,
    type?: string,
    value?: string|null,
  }>(),
  {
    group: false,
    groupText: null,
    inline: true,
    name: null,
    placeholder: '',
    readonly: false,
    type: 'text',
    value: null,
  }
);

const emit = defineEmits<{
  (e: 'updated-value', value: string|null): void
}>();

const modelValue = ref<string|null>(props.value);

const componentClass = computed<string[]>(() => {
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
  emit('updated-value', modelValue.value)
};
</script>
