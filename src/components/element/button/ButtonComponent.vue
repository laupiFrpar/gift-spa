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

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    href?: string | null,
    role?: string | null,
    type?: string | null,
    variant?: string,
  }>(),
  {
    href: null,
    role: null,
    type: null,
    variant: 'primary',
  }
)

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
