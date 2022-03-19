<template>
  <div class="vh-100 row align-items-center no-gutter justify-content-center">
    <div class="col-lg-4">
      <login-form
        @user-authenticated="onUserAuthenticated"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '@/components/security/LoginForm.vue';

const router = useRouter();

const onUserAuthenticated = () => {
  router.push('/');
};
</script>
