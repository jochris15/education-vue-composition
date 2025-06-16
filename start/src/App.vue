<script>
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";

export default {
  // local registration
  components: {
    LoginPage,
    HomePage,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    // emit example
    login(email, password) {
      console.log(`Logging in with email: ${email} and password: ${password}`);
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<template>
  <div class="p-5">
    <LoginPage @login="login" v-if="!isLoggedIn" />
    <div v-else>
      <NavBar @logout="logout"></NavBar>
      <HomePage />
    </div>
  </div>
</template>
