<template>
  <form-component
    :error="error"
    title="My profile"
    @submitted="handleSubmit"
  >
    <email-input
      id="email-readonly"
      :value="user?.email"
      :readonly="true"
    />
    <password-input
      :value="user?.password"
      @updated-value="onUpdatedPasswordInput"
    />
    <!-- <div
      v-if="null === user.people"
      class="mb-3 row"
    >
      <label
        for="selectPeople"
        class="col-sm-4 col-form-label"
      >
        Linked with
      </label>
      <div
        class="col-sm-8"
      >
        <select
          id="selectPeople"
          class="form-select"
          aria-label="Default select example"
        >
          <option
            v-for="people in peoples"
            :key="people['@id']"
            :value="people['@id']"
          >
            {{ people.firstName }} {{ people.lastName }}
          </option>
        </select>
      </div>
    </div> -->
    <div class="text-center">
      <submit-button :is-loading="isLoading">
        Save
      </submit-button>
    </div>
  </form-component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '@/services/api';
import securityService from '@/services/security';

import FormComponent from '@/components/element/form/FormComponent.vue';
import EmailInput from '@/components/element/form/input/Email.vue';
import PasswordInput from '@/components/element/form/input/Password.vue';
import SubmitButton from '@/components/element/button/Submit.vue';

let isLoading = false;
let error = ref<string | null>(null);
const user: User|null = securityService.getUser();

const onUpdatedPasswordInput = (value: string) => {
  if (user) {
    user.password = value;
  }
};

const handleSubmit = () => {
  isLoading = true;
  if (!user) {
    // Todo redirect to login page
    return;
  }

  api.put(user['@id'], {
    password: user.password,
    // people: user.people,
  })
    .then(() => {
      user.password = null;
    }).catch((error) => {
      if (error.response.data.error) {
        error = error.response.data.error;
      } else {
        error = 'Unknown error';
      }
    }).finally(() => {
      isLoading = false;
    });
};
// export default {
//   name: 'MyProfileForm',
//   components: {
//     FormComponent,
//     EmailInput,
//     PasswordInput,
//     SubmitButton,
//     TextInput,
//   },
//   data() {
//     return {
//       isLoading: false,
//       // peoples: [],
//       user: window.user,
//     };
//   },
//   methods: {
//     onUpdatedPasswordInput(event) {
//       this.user.password = event.value;
//     },
//     onUpdatedFirstNameInput(event) {
//       this.user.people.firstName = event.value;
//     },
//     onUpdatedLastNameInput(event) {
//       this.user.people.lastName = event.value;
//     },
//     handleSubmit() {
//       this.isLoading = true;
//       axios
//         .put(this.user['@id'], {
//           password: this.user.password,
//           // people: this.user.people,
//         })
//         .then(() => {
//           this.user.password = null;
//         }).catch((error) => {
//           if (error.response.data.error) {
//             this.error = error.response.data.error;
//           } else {
//             this.error = 'Unknown error';
//           }
//         }).finally(() => {
//           this.isLoading = false;
//         });
//     },
//   },
// };
</script>
