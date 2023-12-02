<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import { useToast } from 'primevue/usetoast';
import * as User from '../api/user';
const router = useRouter();
const toast = useToast();

const email = ref();
const password = ref();
const name = ref();
const surname = ref();
const nickname = ref();
const gender = ref();
const birthday = ref();

const genders = ref([
  {name: "ชาย", code: "M"},
  {name: "หญิง", code: "F"},
  {name: "ไม่เปิดเผย", code: "N/A"}
])

function getNonTimezoneDate(date) {
  const dateObj = new Date(date);
  return new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000);
}

const createAccount = () => {
  const user = {
    email: email.value,
    password: password.value,
    firstName: name.value,
    lastName: surname.value,
    nickname: nickname.value,
    gender: gender.value,
    birthday: getNonTimezoneDate(birthday.value)
  }
  User.createUser(user).then((res) => {
    if (res.status === "ERROR") {
      toast.add({
        severity: "error",
        summary: "ผิดพลาด",
        detail: res.data.error,
        life: 5000
      });
    } else {
      toast.add({
        severity: "success",
        summary: "สำเร็จ",
        detail: "สร้างบัญชีสำเร็จ กรุณาเข้าสู่ระบบ",
        life: 3000
      });
      router.push("/login");
    }
  });
}
</script>

<template>
  <div class="signup-form">
    <span style="font-size: 1.5rem; font-weight: 700;">สร้างบัญชี</span>
    <div class="input-group">
      <span class="p-input-icon-left">
        <i class="pi pi-envelope"></i>
        <InputText v-model="email" placeholder="อีเมล" />
      </span>
      <Password v-model="password" placeholder="รหัสผ่าน" toggle-mask />
      <span class="p-input-icon-left">
        <i class="pi pi-user"></i>
        <InputText v-model="name" placeholder="ชื่อ" />
      </span>
      <span>
        <InputText v-model="surname" placeholder="นามสกุล" />
      </span>
      <span>
        <InputText v-model="nickname" placeholder="ชื่อเล่น" />
      </span>
      <span>
        <Dropdown v-model="gender" editable placeholder="เพศวิถี" :options="genders" option-label="name" option-value="code" />
      </span>
      <span>
        <Calendar v-model="birthday" placeholder="วันเกิด" date-format="yy/mm/dd" />
      </span>
    </div>
      
    <Button label="สร้างบัญชี" @click="createAccount" />
  </div>
</template>

<style scoped>
.signup-form {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    max-width: fit-content;
    border-radius: 5px;
    background-color: #303030;
}
.input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 0.5rem 0;
}
</style>
