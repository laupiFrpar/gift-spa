<template>
  <button-component
    type="submit"
    :class="{'disabled': isLoading }"
  >
    <span
      v-show="isLoading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    />
    <span
      v-show="isLoading"
      class="visually-hidden"
    >&nbsp;{{ labelLoadingWithDefaults }}</span>
    <span v-show="!isLoading">
      <slot />
    </span>
  </button-component>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ButtonComponent from './ButtonComponent.vue';

const { t } = useI18n({});

const props = withDefaults(
  defineProps<{
    isLoading?: boolean,
    labelLoading?: string | null,
  }>(),
  {
    isLoading: false,
    labelLoading: null,
  }
);

const labelLoadingWithDefaults = props.labelLoading || t('common.loading');
</script>
