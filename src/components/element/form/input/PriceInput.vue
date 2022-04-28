<template>
  <input-component
    id="price"
    :label="t('common.form.input.price.label')"
    type="number"
    :group="true"
    group-text="€"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import InputComponent from './InputComponent.vue';

const { t } = useI18n();
</script>
