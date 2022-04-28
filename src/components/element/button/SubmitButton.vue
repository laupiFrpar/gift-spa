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
    >&nbsp;{{ labelLoading }}</span>
    <span v-show="!isLoading">
      <slot />
    </span>
  </button-component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonComponent from './ButtonComponent.vue';

const { t } = useI18n({});

withDefaults(
  defineProps<{
    isLoading: boolean,
    labelLoading: string,
  }>(),
  {
    isLoading: false,
    labelLoading: t('common.loading'),
  }
);
</script>
