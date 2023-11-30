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
  {name: "Male", code: "M"},
  {name: "Female", code: "F"},
  {name: "Prefer not to say", code: "N/A"}
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
        summary: "Error",
        detail: res.data.error,
        life: 5000
      });
    } else {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Created account! Please login.",
        life: 3000
      });
      router.push("/login");
    }
  });
}
</script>

<template>
  <div class="signup-form">
    <span style="font-size: 1.5rem; font-weight: 700;">Sign Up</span>
    <div class="input-group">
      <span class="p-input-icon-left">
        <i class="pi pi-envelope"></i>
        <InputText v-model="email" placeholder="E-mail" />
      </span>
      <Password v-model="password" placeholder="Password" toggle-mask />
      <span class="p-input-icon-left">
        <i class="pi pi-user"></i>
        <InputText v-model="name" placeholder="Name" />
      </span>
      <span>
        <InputText v-model="surname" placeholder="Surname" />
      </span>
      <span>
        <InputText v-model="nickname" placeholder="Nickname" />
      </span>
      <span>
        <Dropdown v-model="gender" editable placeholder="Gender" :options="genders" option-label="name" option-value="code" />
      </span>
      <span>
        <Calendar v-model="birthday" placeholder="Birthday" date-format="yy/mm/dd" />
      </span>
    </div>
      
    <Button label="Create Account" @click="createAccount" />
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
