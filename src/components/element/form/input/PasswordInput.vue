<template>
  <input-component
    id="password"
    :label="t('common.form.input.password.label')"
    type="password"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import InputComponent from './InputComponent.vue';

const { t } = useI18n();
</script>
