<script setup>
import { computed, ref, onMounted } from 'vue';
import Card from 'primevue/card';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import * as User from '../api/user';

const route = useRoute();

let user = ref();
let doneFetch = ref(false);
const userStore = useUserStore();
const router = useRouter();

const isSelf = computed(() => {
    return route.params.id === "me";
});

let userBirthday = computed(() => {
    if (user.value.birthday && doneFetch.value) {
        const date = new Date(user.value.birthday);
        return date.toLocaleDateString();
    }
    return "N/A";
});

onMounted(() => {
    if (!userStore.isLoggedIn && userStore.hasFetched) {
        router.push('/login');
    } else {
        if (isSelf.value) {
            user.value = userStore.user;
            doneFetch.value = true;
        } else {
            User.getUser(route.params.id).then((res) => {
                if (res.status === "SUCCESS") {
                    user.value = res.data.user;
                }
                doneFetch.value = true;
            });
        }
    }
})
</script>

<template>
    <Card v-if="user != null && doneFetch">
        <template #title>
            {{ (user.firstName || "") + (user.lastName ? " " + user.lastName : "") }}'s Profile
        </template>
        <template #content>
            Nickname: {{ user.nickname || "N/A" }} <br />
            Gender: {{ user.gender || "N/A" }} <br />
            Birthday: {{ userBirthday }} <br />
        </template>
    </Card>
    <Card v-else-if="doneFetch">
        <template #title>
            Error
        </template>
        <template #content>
            User not found
        </template>
    </Card>
</template>
