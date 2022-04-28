<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a
          class="navbar-brand h1"
          href="/"
        >Gift App</a>
        <!-- <ul
          v-if="user"
          class="navbar-nav mr-auto"
        >
          <li class="nav-item">
            <a
              :class="[activeClass('people'), 'nav-link']"
              href="/peoples"
            >{{ t('header.navbar.peoples') }}</a>
          </li>
          <li class="nav-item">
            <a
              :class="[activeClass('gift'), 'nav-link']"
              href="/gifts"
            >{{ t('header.navbar.gifts') }}</a>
          </li>
        </ul> -->
        <ul class="navbar-nav ml-auto">
          <li
            v-if="store.isLogged"
            class="nav-item dropdown"
          >
            <a
              id="navbar-user-dropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ store.user?.email }}</a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbar-user-dropdown"
            >
              <li>
                <router-link
                  :to="{name: 'settingsProfile' }"
                  class="dropdown-item"
                >
                  {{ t('header.navbar.menu.my-profile') }}
                </router-link>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <router-link
                  :to="{name: 'login' }"
                  class="dropdown-item"
                  @click="logout"
                >
                  {{ t('header.navbar.menu.logout') }}
                </router-link>
              </li>
            </ul>
          </li>
          <!-- <li
            v-if="router.currentRoute.name !== login"
            class="nav-item active"
          >
            <router-link
              to="login"
              class="btn btn-primary"
            >
              Login
            </router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import securityStore from '@/stores/security';
import securityService from '@/services/security';
// import { useRouter } from 'vue-router';

const { t } = useI18n();
const store = securityStore();
// const router = useRouter();

// const activeClass = (pageName) => {
//   if (pageName === window.currentPageName) {
//     return 'active';
//   }

//   return '';
// };

const logout = () => {
  securityService.logout();
};
</script>
