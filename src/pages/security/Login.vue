<template>
  <div class="vh-100 row align-items-center no-gutter justify-content-center">
    <div class="col-lg-4">
      <login-form
        @user-authenticated="onUserAuthenticated"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/security/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  methods: {
    onUserAuthenticated() {
      this.$router.push('/');
    },
  },
};
</script>
