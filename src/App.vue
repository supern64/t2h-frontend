<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useUserStore } from './stores/user';
import Header from './components/Header.vue';
import Header2 from './components/Header2.vue';
import { getMe } from './api/user';

const user = useUserStore();
const route = useRoute();
const isChatPage = ref(false);

getMe().then((res) => {
  if (res.status === 'SUCCESS') {
    user.setUser(res.data.user);
  }
});

onMounted(() => {
  watch(() => route.path, (newPath) => {
    isChatPage.value = newPath.includes('/chat');
  });
});
</script>

<template>
  <div>
    <Header v-if="!isChatPage" />
    <Header2 v-else />
    <RouterView />
  </div>
</template>

<style scoped>
</style>