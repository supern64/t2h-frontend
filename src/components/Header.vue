<script setup>
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import * as Auth from '../api/auth';
const user = useUserStore();
const router = useRouter();

const logout = () => {
  Auth.logout().then((res) => {
    if (res.status === "SUCCESS") {
      user.logout();
      router.push("/");
    }
  });
}
</script>

<template>
  <div id="header">
    <nav id="header-nav">
      <div class="left-header">
        <router-link class="big-icon" to="/">Placeholder</router-link>
      </div>
      <div class="right-header">
        <div v-if="user.isLoggedIn">
          <router-link class="link" to="/user/me">{{ user.user.nickname }}</router-link>
          <router-link class="link" @click="logout" to="/">Logout</router-link>
        </div>
        <div v-else>
          <router-link class="link" to="/login">Login</router-link>
          <router-link class="link" to="/signup">Signup</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#header {
    color: #fff;
    margin-bottom: 1.5rem;
    border-radius: 5px;
    width: 100%;
}
#header-nav {
    width: 100%;
    display: flex;
    align-items: center;
}
.left-header {
    align-content: flex-start;
    justify-content: center;
}
.right-header {
    align-content: flex-end;
    margin-left: auto;
    margin-right: 1rem;
}
.big-icon {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
}
.link {
    font-size: 1.1rem;
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    font-weight: 600;
}
</style>
