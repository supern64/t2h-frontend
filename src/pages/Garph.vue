<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Dropdown from 'primevue/dropdown';
import { useUserStore } from '../stores/user';
import * as Assessment from '../api/assessment';
import * as User from '../api/user';

const route = useRoute();
const userStore = useUserStore();
const toast = useToast();

const isSelf = computed(() => {
    return route.params.id === "me";
});

const currentAssessment = ref(null);
const assessments = ref([]);
const user = ref(null);

const toggleDropdown = (option) => {
    option.showDropdown = !option.showDropdown
}

onMounted(() => {
    if (isSelf.value) {
        user.value = userStore.user.nickname;
        Assessment.getAssessmentMe().then((res) => {
            if (res.status === "SUCCESS") {
                for (const i of res.data.assessments) {
                  i.showDropdown = false;
                }
                assessments.value = res.data.assessments;
            }
        });
    } else {
        User.getUser(route.params.id).then((res) => {
            if (res.status === "SUCCESS") {
                user.value = res.data.user.nickname;
            }
        });
        Assessment.getAssessment(route.params.id).then((res) => {
            if (res.status === "SUCCESS") {
                for (const i of res.data.assessments) {
                  i.showDropdown = false;
                }
                assessments.value = res.data.assessments;
            } else {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: res.data.error,
                    life: 3000
                });
            }
        });
    }
})
</script>

<template>
  <section>

  <div class="container">
    <div>
      <div class="dropdown-container">
        <div class="name-dropdown">
          <span style="font-weight: bold; font-size: larger;">ผลการประเมินของ {{ user  }}</span>
        </div>
        <div class="dropdownQ-container">
          <div class="dropdowns-top">
            <Dropdown v-model="currentAssessment" :options="assessments" placeholder="เลือกครั้งที่ประเมิน" :style="{ loading: !assessments }" option-label="createdAt" />
          </div>
          <div v-if="currentAssessment">
            <span style="font-size: larger; font-weight: 500;">ประเมินได้ {{ currentAssessment.score }} คะแนน</span>
            <div v-for="answer in currentAssessment.answers" :key="currentAssessment.question" class="dropdown">
              <div class="dropdown-trigger" @click="toggleDropdown(answer)">
                <img src="/assets/arrow.png" alt="logo" class="arrow" />
                {{ answer.question }}
              </div>
              <div v-if="answer.showDropdown" class="dropdown-content">
                {{ answer.answer }}
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div class="score-information">
        <div>
        <p>51-60 คะแนน<br>                      
            44-50 คะแนน<br>                     
            43 คะแนนหรือน้อยกว่า</p>
        </div>
        <div>
          <p>
            หมายถึง มีสุขภาพจิตมากกว่าคนทั่วไป (Good) <br>
            หมายถึง มีสุขภาพจิตเท่ากับคนทั่วไป (Fair) <br>
            หมายถึง มีสุขภาพจิตต่ำกว่าคนทั่วไป (Poor)
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
section{
  position: relative;
  z-index: 0;
  height: 83.5vh;
  color: black;
  font-size: 18px;
}
.bg-image{
  width: 100vw;
  height: 80vh;
  top: -87px;
    left: -30px;
  z-index: -1;
  position: absolute;
}
.container{
  z-index: 1;
  width: 100%;
  height: 100%;
    background-color: #F6EBD9;
    border-radius: 3rem; 
    padding: 2rem;
}
.dropdownQ-container {
  height: 50vh;
  width: 50%;
  overflow-y: auto; 
  background-color: white;/* Enable vertical scrolling if content exceeds container height */
  border: 2px solid black; /* Optional: Add a border for visual clarity */
  padding: 10px;
  border-radius: 2rem; /* Optional: Add padding to the container */
}

.dropdown {
  margin-bottom: 10px; /* Optional: Add margin between dropdowns */
}

.dropdown-trigger {
  position: relative;
  cursor: pointer;
  padding: 5px;
  background-color: #F6EBD9;
  border: 2px solid black;
  border-radius: 2rem;
  padding: 0 1rem;
}

.dropdown-content {
  display: block;
  padding: 10px;
  background-color: #F6EBD9;
  border: 2px solid black;
  border-radius: 2rem;
}
.arrow{
  position: absolute;
  top: 4px;
  right: 0.5rem;
  width: 20px;
  transform:  rotate(90deg);
}
.score-information{
  display: flex;
  justify-content: space-between;
  height: 20vh;
  margin-top: 1rem;
  width: 50%;
  background-color: white;/* Enable vertical scrolling if content exceeds container height */
  border: 2px solid black; /* Optional: Add a border for visual clarity */
  padding: 1rem 2rem;
  border-radius: 2rem; 
}

.dropdowns-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>

<style>
:root {
  background-image: url('/assets/ฉาก1.png');
  background-repeat: repeat-y;
}
</style>
