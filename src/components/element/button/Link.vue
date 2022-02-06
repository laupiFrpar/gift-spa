<template>
  <button-component
    :href="href"
    role="button"
  >
    <slot />
  </button-component>
</template>

<script>
import ButtonComponent from './index.vue';

export default {
  name: 'LinkButton',
  components: {
    ButtonComponent,
  },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
