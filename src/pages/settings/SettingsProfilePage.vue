<template>
  <div class="row justify-content-md-center">
    <div class="col-lg-6 mt-4">
      <h2 class="text-center">
        My profile
      </h2>
      <settings-profile-form />
    </div>
  </div>
</template>

<script setup lang="ts">
import SettingsProfileForm from '@/components/settings/profile/ProfileForm.vue';
// import { fetchPeoples } from '@/services/peoples.js';

// const peoples = [];

// if (!this.user.people) {
//   this.user.people = {
//     firstName: null,
//     lastName: null,
//   };
// }

// const loadPeoples = () => {
//   let response;

//   try {
//     response = await fetchPeoples();
//   } catch (e) {
//     return;
//   }

//   peoples = response.data['hydra:member'];
// }

// export default {
//   name: 'MyProfilePage',
//   components: {
//     MyProfileForm,
//   },
//   data() {
//     return {
//       // peoples: [],
//     };
//   },
//   created() {
//     // if (!this.user.people) {
//     //   this.user.people = {
//     //     firstName: null,
//     //     lasteName: null,
//     //   };
//     // }
//     // this.loadPeoples(this.currentPage);
//   },
//   methods: {
//     // async loadPeoples() {
//     //   let response;

//     //   try {
//     //     response = await fetchPeoples();
//     //   } catch (e) {
//     //     return;
//     //   }

//     //   this.peoples = response.data['hydra:member'];
//     // },
//   },
// };
</script>
