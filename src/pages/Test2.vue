<script setup>
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { createAssessment } from '../api/assessment';

const toast = useToast();
const router = useRouter();

const ratingAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const freeformAnswers = ["", "", "", "", "", ""]

// hardcoded questions LOL
const ratingQuestions = [
  "ท่านรู้สึกพึงพอใจในชีวิต",
  "ท่านรู้สึกสบายใจ",
  "ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน",
  "ท่านรู้สึกผิดหวังในตัวเอง",
  "ท่านรู้สึกว่าชีวิตของท่านมีแต่ความทุกข์",
  "ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)",
  "ท่านมั่นใจว่าสามารถควบคุมอารมณ์ได้เมื่อมีเหตุการณ์คับขันหรือร้ายแรงเกิดขึ้น",
  "ท่านมั่นใจที่จะเผชิญกับเหตุการณ์ร้ายแรงที่เกิดขึ้นในชีวิต",
  "ท่านรู้สึกเห็นใจเมื่อผู้อื่นมีทุกข์",
  "ท่านรู้สึกเป็นสุขในการช่วยเหลือผู้อื่นที่มีปัญหา",
  "ท่านให้ความช่วยเหลือแก่ผู้อื่นเมื่อมีโอกาส",
  "ท่านรู้สึกภูมิใจในตนเอง",
  "ท่านรู้สึกมั่นคง ปลอดภัยเมื่ออยู่ในครอบครัว",
  "หากท่านป่วยหนัก ท่านเชื่อว่าครอบครัวจะดูแลท่านเป็นอย่างดี",
  "สมาชิกในครอบครัวมีความรักและผูกพันต่อกัน"
]
const freeformQuestions = [
  "เมื่อคืนนอนเป็นยังไงบ้าง ?",
  "วันนี้รู้สึกเป็นยังไงบ้าง",
  "วันนี้กินอะไรบ้าง อร่อยไหม ?",
  "พบเจออะไรที่ทำให้ประทับใจ?",
  "เต็มสิบให้คะแนนตัวเองเท่าไหร่?",
  "พื้นที่สำหรับการระบายอารมณ์"
]

function handleChoiceChange(index, event) {
  ratingAnswers[index] = parseInt(event.target.value)
}

function handleFreeformChange(index, event) {
  freeformAnswers[index] = event.target.value
}

function handleSubmit() {
  if (ratingAnswers.includes(0) || freeformAnswers.includes('')) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'กรุณาตอบคำถามให้ครบทุกข้อ',
      life: 3000
    })
    return
  }

  // calculate score
  let score = 0;
  const negativeQuestions = [2, 3, 4];
  for (let i = 0; i < ratingAnswers.length; i++) {
    if (negativeQuestions.includes(i)) {
      score += 5 - ratingAnswers[i]
    } else {
      score += ratingAnswers[i]
    }
  }

  let freeform = [];
  for (let i = 0; i < freeformAnswers.length; i++) {
    freeform.push({
      question: freeformQuestions[i],
      answer: freeformAnswers[i]
    })
  }
  const data = {
    score,
    answers: freeform
  }
  createAssessment(data).then(() => {
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'ส่งคำตอบสำเร็จ',
      life: 3000
    })
    router.push('/')
  })
}
</script>

<template>
  <section>
    <div class="container">
      
      <div v-for="question in ratingQuestions" v-key="ratingQuestions.indexOf(question)" class="question">
        <p>{{ ratingQuestions.indexOf(question) + 1 }}. {{ question }}</p>
        <div class="lebel-container">
          <label>
            <input type="radio" :name="'question' + ratingQuestions.indexOf(question)" value="1" @change="handleChoiceChange(ratingQuestions.indexOf(question), $event)">
          </label>
          <label>
            <input type="radio" :name="'question' + ratingQuestions.indexOf(question)" value="2" @change="handleChoiceChange(ratingQuestions.indexOf(question), $event)">
          </label>
          <label>
            <input type="radio" :name="'question' + ratingQuestions.indexOf(question)" value="3" @change="handleChoiceChange(ratingQuestions.indexOf(question), $event)">
          </label>
          <label>
            <input type="radio" :name="'question' + ratingQuestions.indexOf(question)" value="4" @change="handleChoiceChange(ratingQuestions.indexOf(question), $event)">
          </label>
        </div>
      </div>

      <div class="QA-container">
        <div v-for="question in freeformQuestions" v-key="freeformQuestions.indexOf(question)">
          <p>{{ freeformQuestions.indexOf(question) + 16 }}. {{ question }}</p>
          <input type="text" class="text-in" @change="handleFreeformChange(freeformQuestions.indexOf(question), $event)">
        </div>
      </div>
      <button @click="handleSubmit()">ส่งคำตอบ</button>

    </div>
  </section>
</template>

<style scoped>
section{
  position: relative;
  z-index: 0;
  height: 110vh;
  background-color: aliceblue;
  color: black;
  font-size: 18px;
}
.text-in{
  height: 2.5rem;
  width: 100%;
  border-top-left-radius: 3rem;
  border-top-right-radius:3rem;
  border-bottom-right-radius:3rem;
  border-bottom-left-radius:3rem;
  font-size: 18px;
}
.question{
  display: flex;
  justify-content: space-between;
}
label{
  margin-top: 1.1rem;
  margin-left: 4rem;
}
.container{
  z-index: 1;
  width: 100%;
  height: auto;
    background-color: #F6EBD9;
    margin-left: 0rem;
    margin-top: 0rem;
    border-radius: 3rem;
    padding: 2rem;
}
body {
  margin: 0;
  display: flex;
  min-width: 320px;
  max-width: 100vw;
  overflow-x: hidden;
  margin-top: -12px;
  min-height: 100vh;
}
button{
  font-weight: 700;
  background-color: white;
  color: black;
  width: 11rem;
  height: 2.5rem;
  text-align: center;
  margin-left: 1.5rem;
  margin-top: 1.3rem;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>

<style>
:root {
  background-image: url('/assets/ฉาก1.png');
  background-repeat: repeat-y;
}
</style>