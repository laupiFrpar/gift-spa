<template>
  <input-component
    id="price"
    label="price"
    type="number"
    :group="true"
    group-text="€"
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
