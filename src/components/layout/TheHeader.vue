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
            >Peoples</a>
          </li>
          <li class="nav-item">
            <a
              :class="[activeClass('gift'), 'nav-link']"
              href="/gifts"
            >Gifts</a>
          </li>
        </ul> -->
        <ul class="navbar-nav ml-auto">
          <li
            v-if="user"
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
            >{{ user.email }}</a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbar-user-dropdown"
            >
              <li>
                <a
                  href="/my-profile"
                  class="dropdown-item"
                >My profile</a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a
                  href="/api/logout"
                  class="dropdown-item"
                >Log out</a>
              </li>
            </ul>
          </li>
          <li
            v-else
            class="nav-item active"
          >
            <router-link
              to="login"
              class="btn btn-primary"
            >
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

let user = null;

onMounted(() => {
  if (window.user) {
    user = window.user;
  }
});

const activeClass = (pageName) => {
  if (pageName === window.currentPageName) {
    return 'active';
  }

  return '';
};
</script>
