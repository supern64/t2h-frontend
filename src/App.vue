<script setup>
import { RouterView } from "vue-router";
import { useUserStore } from "./stores/user";
import Header from "./components/Header.vue";
import { getMe } from "./api/user";

const user = useUserStore();
getMe().then((res) => {
  if (res.status === "SUCCESS") {
    user.setUser(res.data.user);
  }
});
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
</style>
