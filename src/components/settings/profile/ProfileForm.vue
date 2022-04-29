<template>
  <form-component
    :error-message="errorMessage"
    @submitted="handleSubmit"
  >
    <email-input
      id="email-readonly"
      :value="user?.email"
      :readonly="true"
    />
    <password-input
      :value="user?.password"
      @updated-value="onUpdatedPasswordInput"
    />
    <div class="text-center">
      <submit-button
        :is-loading="isLoading"
        :label-loading="t('settings.profile.form.submit.loading')"
      >
        {{ t('settings.profile.form.submit.label') }}
      </submit-button>
    </div>
  </form-component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import api from '@/services/api';
import securityService from '@/services/security';

import FormComponent from '@/components/element/form/FormComponent.vue';
import EmailInput from '@/components/element/form/input/EmailInput.vue';
import PasswordInput from '@/components/element/form/input/PasswordInput.vue';
import SubmitButton from '@/components/element/button/SubmitButton.vue';

const { t } = useI18n();

let isLoading = false;
let errorMessage = ref<string | null>(null);
const user: User|null = securityService.getUser();

const onUpdatedPasswordInput = (value: string) => {
  if (user) {
    user.password = value;
  }
};

const handleSubmit = () => {
  isLoading = true;
  if (!user) {
    // Todo redirect to login page
    return;
  }

  api.put(user['@id'], {
    password: user.password,
  })
    .then(() => {
      user.password = null;
    }).catch((errorResponse: ErrorResponse) => {
      if (errorResponse.response?.data.message) {
        errorMessage.value = errorResponse.response.data.message;
      } else {
        errorMessage.value = t('common.error.unknown');
      }
    }).finally(() => {
      isLoading = false;
    });
};
</script>
