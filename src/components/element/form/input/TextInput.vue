<template>
  <input-component
    id="text"
    :label="t('common.form.input.text.label')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import InputComponent from './InputComponent.vue';

const { t } = useI18n();
</script>
