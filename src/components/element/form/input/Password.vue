<template>
  <input-component
    id="password"
    label="Password"
    type="password"
  />
</template>

<script>
import InputComponent from './index.vue';

export default {
  name: 'PasswordInput',
  components: {
    InputComponent,
  },
};
</script>
