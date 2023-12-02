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
        summary: "สำเร็จ",
        detail: "ออกจากระบบสำเร็จ",
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
      <div class="left-header" :class="{shorter:!user.isLoggedIn}">
        <router-link class="link" to="/">หน้าหลัก</router-link>
        <router-link class="link" v-if="user.isLoggedIn" to="/test">แบบทดสอบ</router-link>
        <router-link class="link" v-if="user.isLoggedIn" to="/garph/me">ตารางสรุป</router-link>
        <router-link class="link" v-if="user.isLoggedIn" to="/chat">แชท</router-link>
        <router-link class="link" to="/emergency">โทรฉุกเฉิน</router-link>
      </div>
        <div class="right-header">
          <div class="right-h" v-if="user.isLoggedIn">
            <router-link class="link" to="/user/me">{{ user.user.nickname }}</router-link>
            <router-link class="link" @click="logout" to="/">ออกจากระบบ</router-link>
          </div>
          <div class="right-h" v-else>
            <router-link class="link" to="/login">ลงชื่อเข้าใช้</router-link>
            <router-link class="link" to="/signup">สร้างบัญชี</router-link>
          </div>
        </div>
      </nav>
    </div>
</template>

<style scoped>
.bg-image{
  width: 100vw;
  height: 100vh;
  top: -21px;
  left: -30px;
  z-index: -1;
  position: absolute;
}
#header {
    position: relative;
    color: #fff;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 5px;
    width: 100%;
    animation: slideleftAndFade 1s ease-out forwards;
    z-index: 2;
}
#header-nav {
    width: 100%;
    padding: 0 3.5rem;
    height: 3rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: #F6EBD9;
    border-radius: 2rem;
    margin-top: -20px;
}
#header-nav::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 9px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #FBBA43 0%, #FC7347 33%, #E5769C 66%, #6C69AE 100%);
  z-index: -1; /* Place it behind the #header-nav */
  border-radius: inherit; /* Inherit the border-radius from the main element */
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}
.left-header {
  display: flex;
    flex-grow: 1; 
    align-content: flex-start;
    justify-content: space-between;
}
.left-header.shorter {
  flex-grow: 0;
}
.right-header {
    align-content: flex-end;
    margin-left: auto;
    margin-right: 1rem;
}
.right-h{
  margin-left: 100px;
  width: 225px;
  display: flex;
  justify-content: space-between;
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
    color: black;
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
    background-color: black;
    transition: width 0.2s ease; 
}

.link:hover::before {
    width: 103%;
}

.logo-image {
  position: absolute;
  width: 40px;
  left: 46vw;
  top: 0.5rem;
  display: block;
}
@keyframes slideleftAndFade {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
}



</style>

