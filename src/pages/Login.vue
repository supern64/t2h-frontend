<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import * as Auth from '../api/auth';
import Error from '../components/Error.vue';
const user = useUserStore();
const error = ref("");
const router = useRouter();

const email = ref();
const password = ref();

const login = () => {
  Auth.login(email.value, password.value).then((res) => {
    if (res.status === "ERROR") {
      error.value = res.data.error;
    } else {
      user.setUser(res.data.user);
      router.push("/");
    }
  });
}
</script>

<template>
  <div class="login-form">
    <span style="font-size: 1.5rem; font-weight: 700;">Login</span>
    <Error v-if="error !== ''" :message="error" />
    <div class="input-group">
      E-mail:
      <input type="text" id="email" v-model="email" placeholder="E-mail" />
      Password:
      <input type="password" id="password" v-model="password" placeholder="Password" />
    </div>
    <div class="input-group">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<style scoped>
.login-form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: 500px;
    border-radius: 5px;
    background-color: #303030;
}
.input-group {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.input-group input {
    margin-top: 0.5rem;
    padding: 0.35rem;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
}
button {
  background-color: #242424;
}
</style>
