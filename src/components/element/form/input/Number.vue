<template>
  <input-component
    id="number"
    label="Number"
    type="number"
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
