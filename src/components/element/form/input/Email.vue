<template>
  <input-component
    id="email"
    label="Email"
    type="email"
  />
</template>

<script>
import InputComponent from './index.vue';

export default {
  name: 'EmailInput',
  components: {
    InputComponent,
  },
};
</script>
