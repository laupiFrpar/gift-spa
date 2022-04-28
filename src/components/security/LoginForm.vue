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

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import securityService from '@/services/security';

import FormComponent from '@/components/element/form/FormComponent.vue';
import EmailInput from '@/components/element/form/input/EmailInput.vue';
import PasswordInput from '@/components/element/form/input/PasswordInput.vue';
import SubmitButton from '@/components/element/button/SubmitButton.vue';

defineProps({
  user: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['user-authenticated']);

let email = '';
let password = '';
let error = ref<string | null>(null);
const isLoading = ref<boolean>(false);

const onUpdatedEmail = (value: string) => {
  email = value;
};

const onUpdatedPassword = (value: string) => {
  password = value;
};

const handleSubmit = () => {
  if (email && password) {
    isLoading.value = true;
    error.value = null;

    // const value = securityService.login({ username: email, password });
    securityService.login({ username: email, password })
      .then(
        () => {
          emit('user-authenticated')
        },
        (errorMessage) => {
          error = errorMessage;
        }
      )
      .finally(() => {
        isLoading.value = false;
      });
  } else {
    error.value = 'You must set username and password';
  }
};
</script>
