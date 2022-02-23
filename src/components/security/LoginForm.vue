<template>
  <form-component
    class="border bg-white rounded p-3"
    title="Gift"
    :error="error"
    @submitted="handleSubmit"
  >
    <email-input
      placeholder="Enter email"
      :inline="false"
      @updated-value="onUpdatedEmail"
    />
    <password-input
      placeholder="Password"
      :inline="false"
      @updated-value="onUpdatedPassword"
    />
    <div class="text-center">
      <submit-button
        :is-loading="isLoading"
        label-loading="Logging..."
      >
        Log In
      </submit-button>
    </div>
  </form-component>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import securityStore from '@/stores/security';

import FormComponent from '@/components/element/form/FormComponent.vue';
import EmailInput from '@/components/element/form/input/Email.vue';
import PasswordInput from '@/components/element/form/input/Password.vue';
import SubmitButton from '@/components/element/button/Submit.vue';

defineProps({
  user: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['user-authenticated']);

let email = '';
let password = '';
const error = ref(null);
const isLoading = ref(false);

const onUpdatedEmail = (event) => {
  email = event.value;
};

const onUpdatedPassword = (event) => {
  password = event.value;
};

const security = securityStore();

const handleSubmit = () => {
  if (email && password) {
    isLoading.value = true;
    error.value = null;

    security.login({ username: email, password })
      .then(
        () => {
          emit('user-authenticated');
        },
        (errorMessage) => {
          isLoading.value = false;
          error.value = errorMessage;
        },
      );
  } else {
    error.value = 'You must set username and password';
  }
};
</script>
