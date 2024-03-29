<template>
  <form-component
    class="border bg-white rounded p-3"
    title="Gift"
    :error-message="errorLoginMessage"
    @submitted="handleSubmit"
  >
    <email-input
      :placeholder="t('security.form.email.placeholder')"
      :inline="false"
      @updated-value="onUpdatedEmail"
    />
    <password-input
      :placeholder="t('security.form.password.placeholder')"
      :inline="false"
      @updated-value="onUpdatedPassword"
    />
    <div class="text-center">
      <submit-button
        :is-loading="isLoading"
        :label-loading="t('security.form.submit.loading')"
      >
        {{ t('security.form.submit.label') }}
      </submit-button>
    </div>
  </form-component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import securityService from '@/services/security';

import FormComponent from '@/components/element/form/FormComponent.vue';
import EmailInput from '@/components/element/form/input/EmailInput.vue';
import PasswordInput from '@/components/element/form/input/PasswordInput.vue';
import SubmitButton from '@/components/element/button/SubmitButton.vue';

const { t } = useI18n();

withDefaults(
  defineProps<{
    user?: string | null,
  }>(),
  {
    user: null,
  }
);

const emit = defineEmits<{
  (e: 'user-authenticated'): void,
}>();

let email = '';
let password = '';
let errorLoginMessage = ref<string | null>(null);
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
    errorLoginMessage.value = null;

    securityService
      .login({ username: email, password })
      .then(
        () => {
          emit('user-authenticated')
        },
      )
      .catch((errorMessage: string) => {
        errorLoginMessage.value = errorMessage;
      })
      .finally(() => {
        isLoading.value = false;
      });
  } else {
    errorLoginMessage.value = t('security.error.missing');
  }
};
</script>
