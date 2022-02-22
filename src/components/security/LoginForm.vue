<template>
  <form-component
    class="border bg-white rounded p-3"
    title="Gift"
    :error="error"
    @submitted="handleSubmit"
  >
    <email-input
      placeholder="Enter email"
      :inline="false"
      @updated-value="onUpdatedEmail"
    />
    <password-input
      placeholder="Password"
      :inline="false"
      @updated-value="onUpdatedPassword"
    />
    <div class="text-center">
      <submit-button
        :is-loading="isLoading"
        label-loading="Logging..."
      >
        Log In
      </submit-button>
    </div>
  </form-component>
</template>

<script>
import FormComponent from '@/components/element/form/index.vue';
import EmailInput from '@/components/element/form/input/Email.vue';
import PasswordInput from '@/components/element/form/input/Password.vue';
import SubmitButton from '@/components/element/button/Submit.vue';

export default {
  name: 'LoginForm',
  components: {
    FormComponent,
    EmailInput,
    PasswordInput,
    SubmitButton,
  },
  props: {
    user: {
      type: String,
      default: null,
    },
  },
  emits: ['user-authenticated'],
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      this.error = '';
      this.$store.dispatch('auth/login', { username: this.email, password: this.password })
        .then(
          () => {
            this.$emit('user-authenticated');
          },
          (errorMessage) => {
            this.isLoading = false;
            this.error = errorMessage;
          },
        );
    },
    onUpdatedEmail(event) {
      this.email = event.value;
    },
    onUpdatedPassword(event) {
      this.password = event.value;
    },
  },
};
</script>
