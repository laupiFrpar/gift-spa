<template>
  <input-component
    id="number"
    :label="t('common.form.input.number.label')"
    type="number"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import InputComponent from './InputComponent.vue';

const { t } = useI18n();
</script>
