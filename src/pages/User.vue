<script setup>
import { computed, ref, onMounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
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
})
</script>

<template>
    <Card v-if="user != null && doneFetch">
        <template #title>
            โปรไฟล์ของ {{ (user.firstName || "") + (user.lastName ? " " + user.lastName : "") }}
        </template>
        <template #content>
            ชื่อเล่น: {{ user.nickname || "N/A" }} <br />
            เพศ: {{ user.gender || "N/A" }} <br />
            วันเกิด: {{ userBirthday }} <br />
        </template>
        <template #footer v-if="userStore.isDoctor">
            <Button label="ผลการประเมิน" class="p-button-success" @click="router.push(`/garph/${user.id}`)"/>
        </template>
    </Card>
    <Card v-else-if="doneFetch">
        <template #title>
            ผิดพลาด
        </template>
        <template #content>
            ไม่พบผู้ใช้
        </template>
    </Card>
</template>
