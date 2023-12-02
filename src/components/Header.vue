<script setup>
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import * as Auth from '../api/auth';

const user = useUserStore();
const router = useRouter();
const toast = useToast();

const logout = () => {
  Auth.logout().then((res) => {
    if (res.status === "SUCCESS") {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Logout successful",
        life: 3000
      });
      user.logout();
      router.push("/");
    }
  });
}



</script>

<template>
  <div id="header">
    <Toast />
    <nav id="header-nav">
      <div class="left-header">
        <router-link class="link" to="/">หน้าหลัก</router-link>
          <router-link class="link" to="/test">แบบทดสอบ</router-link>
          <router-link class="link" to="/garph">ตารางสรุป</router-link>
          <router-link class="link" to="/chat">แชท</router-link>
          <router-link class="link" to="/emergency">โทรฉุกเฉิน</router-link>
      </div>
        <div class="middle-header">
          <img src="/assets/2.png" alt="logo" class="logo-image" />
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
    position: relative;
    color: #fff;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 5px;
    width: 100%;
}
#header-nav {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
}
.middle-header{
  flex-grow: 1; 
}
.left-header {
  display: flex;
    width: 490px;
    align-content: flex-start;
    justify-content: space-between;
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
    position: relative;
    font-size: 1.1rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    margin-left: 1rem;
}

.link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; 
    background-color: #fff;
    transition: width 0.2s ease; 
}

.link:hover::before {
    width: 103%;
}

.logo-image {
  position: absolute;
  width: 85px;
  left: 44.5vw;
  top: 0.5rem;
  display: block;
}




</style>

