<template>
  <component
    :is="element"
    :class="componentClass"

    :type="componentType"

    :href="href"
    :role="componentRole"
  >
    <slot />
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary',
  },
});

const componentClass = computed(() => {
  const classes = [`btn-${props.variant}`];

  if (props.variant !== 'close') {
    classes.push('btn');
  }

  return classes;
});

const componentType = computed(() => (props.href ? null : props.type));

const componentRole = computed(() => (props.href ? props.role : null));

const element = computed(() => (props.href ? 'a' : 'button'));
</script>
