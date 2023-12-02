<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import { useToast } from 'primevue/usetoast';
import * as Auth from '../api/auth';
const user = useUserStore();
const router = useRouter();
const toast = useToast();
const email = ref();
const password = ref();

const login = () => {
  Auth.login(email.value, password.value).then((res) => {
    if (res.status === "ERROR") {
      toast.add({
        severity: "error",
        summary: "ผิดพลาด",
        detail: res.data.error,
        life: 5000
      });
    } else {
      user.setUser(res.data.user);
      toast.add({
        severity: "success",
        summary: "สำเร็จ",
        detail: "เข้าสู่ระบบสำเร็จ",
        life: 3000
      });
      router.push("/");
    }
  });
}
</script>

<template>
  <div class="login-form">
    <span style="font-size: 1.5rem; font-weight: 700;">ลงชื่อเข้าใช้</span>
    <div class="input-group">
      <span class="p-input-icon-left">
        <i class="pi pi-envelope"></i>
        <InputText id="email" v-model="email" placeholder="อีเมล" />
      </span>
      <span>
        <Password id="password" v-model="password" :feedback="false" placeholder="รหัสผ่าน" toggle-mask=""/>
      </span>
    </div>
    <div class="input-group">
      <Button label="ลงชื่อเข้าใช้" @click="login" />
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
    max-width: fit-content;
    border-radius: 5px;
    background-color: #303030;
}
.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
}
.input-group span {
    margin-top: 0.5rem;
    width: 100%;
}
</style>
