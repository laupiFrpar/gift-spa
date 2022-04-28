<template>
  <input-component
    id="email"
    :label="t('common.form.input.email.label')"
    type="email"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import InputComponent from './InputComponent.vue';

const { t } = useI18n();
</script>
