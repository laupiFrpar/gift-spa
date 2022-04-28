<template>
  <div class="row justify-content-md-center">
    <div class="col-lg-6 mt-4">
      <h2 class="text-center">
        {{ t('settings.profile.title') }}
      </h2>
      <settings-profile-form />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import SettingsProfileForm from '@/components/settings/profile/ProfileForm.vue';

const { t } = useI18n();
</script>
