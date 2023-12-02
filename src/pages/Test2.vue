<script setup>
const handleChoiceChange = (questionNumber) => (event) => {
  const selectedValue = event.target.value;
  };
</script>

<template>
  <section>
    <div class="container">
      
    <!-- Question 1 -->
    <div class="question">
      <p>1. ท่านรู้สึกพึงพอใจในชีวิต</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question1" value="1" @change="handleChoiceChange(1)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question1" value="2" @change="handleChoiceChange(1)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question1" value="3" @change="handleChoiceChange(1)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question1" value="4" @change="handleChoiceChange(1)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <!-- Question 2 -->
    <div class="question">
      <p>2. ท่านรู้สึกสบายใจ</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question2" value="1" @change="handleChoiceChange(2)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question2" value="2" @change="handleChoiceChange(2)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question2" value="3" @change="handleChoiceChange(2)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question2" value="4" @change="handleChoiceChange(2)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <!-- Question 3 -->
    <div class="question">
      <p>3. ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question3" value="4" @change="handleChoiceChange(3)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="3" @change="handleChoiceChange(3)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="2" @change="handleChoiceChange(3)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="1" @change="handleChoiceChange(3)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>
    <div class="question">
      <p>4. ท่านรู้สึกผิดหวังในตัวเอง</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question4" value="4" @change="handleChoiceChange(4)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question4" value="3" @change="handleChoiceChange(4)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question4" value="2" @change="handleChoiceChange(4)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question4" value="1" @change="handleChoiceChange(4)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>5. ท่านรู้สึกว่าชีวิตของท่านมีแต่ความทุกข์</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question5" value="4" @change="handleChoiceChange(5)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question5" value="3" @change="handleChoiceChange(5)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question5" value="2" @change="handleChoiceChange(5)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question5" value="1" @change="handleChoiceChange(5)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>6. ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question6" value="1" @change="handleChoiceChange(6)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question6" value="2" @change="handleChoiceChange(6)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question6" value="3" @change="handleChoiceChange(6)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question6" value="4" @change="handleChoiceChange(6)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>7. ท่านมั่นใจว่าสามารถควบคุมอารมณ์ได้
    เมื่อมีเหตุการณ์คับขันหรือร้ายแรงเกิดขึ้น</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question7" value="1" @change="handleChoiceChange(7)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question7" value="2" @change="handleChoiceChange(7)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question7" value="3" @change="handleChoiceChange(7)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question7" value="4" @change="handleChoiceChange(7)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>8. ท่านมั่นใจที่จะเผชิญกับเหตุการณ์ร้ายแรงที่เกิดขึ้นในชีวิต</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question8" value="1" @change="handleChoiceChange(8)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question8" value="2" @change="handleChoiceChange(8)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question8" value="3" @change="handleChoiceChange(8)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question8" value="4" @change="handleChoiceChange(8)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>9. ท่านรู้สึกเห็นใจเมื่อผู้อื่นมีทุกข์</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question3" value="a" @change="handleChoiceChange(9)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="b" @change="handleChoiceChange(9)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="c" @change="handleChoiceChange(9)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question3" value="d" @change="handleChoiceChange(9)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>10. ท่านรู้สึกเป็นสุขในการช่วยเหลือผู้อื่นที่มีปัญหา</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question10" value="1" @change="handleChoiceChange(10)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question10" value="2" @change="handleChoiceChange(10)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question10" value="3" @change="handleChoiceChange(10)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question10" value="4" @change="handleChoiceChange(10)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>11 ท่านให้ความช่วยเหลือแก่ผู้อื่นเมื่อมีโอกาส</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question11" value="1" @change="handleChoiceChange(11)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question11" value="2" @change="handleChoiceChange(11)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question11" value="3" @change="handleChoiceChange(11)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question11" value="4" @change="handleChoiceChange(11)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>12. ท่านรู้สึกภูมิใจในตนเอง</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question12" value="1" @change="handleChoiceChange(12)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question12" value="2" @change="handleChoiceChange(12)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question12" value="3" @change="handleChoiceChange(12)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question12" value="4" @change="handleChoiceChange(12)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>13. ท่านรู้สึกมั่นคง ปลอดภัยเมื่ออยู่ในครอบครัว</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question13" value="1" @change="handleChoiceChange(13)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question13" value="2" @change="handleChoiceChange(13)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question13" value="3" @change="handleChoiceChange(13)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question13" value="4" @change="handleChoiceChange(13)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>14. หากท่านป่วยหนัก ท่านเชื่อว่าครอบครัวจะดูแลท่านเป็นอย่างดี</p>
      <div class="lebel-container">
        <label>
        <input type="radio" name="question14" value="1" @change="handleChoiceChange(14)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question14" value="2" @change="handleChoiceChange(14)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question14" value="3" @change="handleChoiceChange(14)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question14" value="4" @change="handleChoiceChange(14)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

    <div class="question">
      <p>15. สมาชิกในครอบครัวมีความรักและผูกพันต่อกัน</p>
      <div class="lebel-container">
      <label>
        <input type="radio" name="question15" value="1" @change="handleChoiceChange(15)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question15" value="2" @change="handleChoiceChange(15)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question15" value="3" @change="handleChoiceChange(15)">
        <p class="none-text">D. Bangkok</p>
      </label>
      <label>
        <input type="radio" name="question15" value="4" @change="handleChoiceChange(15)">
        <p class="none-text">D. Bangkok</p>
      </label>
      </div>
    </div>

  <div class="QA-container">
    <div>
      <p>16. เมื่อคืนนอนเป็นยังไงบ้าง ?</p>
      <input type="text" class="text-in" id="Question1">
    </div>
    <div class="Question-1">
      <p>17. วันนี้รู้สึกเป็นยังไงบ้าง</p>
      <input type="text"  class="text-in" id="Question2">
    </div>
    <div class="Question-1">
      <p>18. วันนี้กินอะไรบ้าง อร่อยไหม ?</p>
      <input type="text" class="text-in" id="Question3">
    </div> 
    <div class="Question-1">
      <p>19. พบเจออะไรที่ทำให้ประทับใจ?</p>
      <input type="text" class="text-in" id="Question4">
    </div> 
    <div class="Question-1">
      <p>20. เต็มสิบให้คะแนนตัวเองเท่าไหร่?</p>
      <input type="text" class="text-in" id="Question5">
    </div> 
    <div class="Question">
      <p>21. พื้นที่สำหรับการระบายอารมณ์</p>
      <input type="text" class="text-in" id="Question5">
    </div> 
  </div>
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
.bg-image{
  width: 100vw;
  height: 100%;
  top: -87px;
    left: -30px;
  z-index: -1;
  position: absolute;
}
.bg-image2{
  width: 100vw;
  height: 100%;
  top: 710px;
    left: -30px;
  z-index: -2;
  position: absolute;
}
.bg-image3{
  width: 100vw;
  height: 100%;
  top: 900px;
    left: -30px;
  z-index: -2;
  position: absolute;
}
.Question-1{
  margin-top: 2rem;
}
.question{
  display: flex;
  justify-content: space-between;
}
.none-text{
  display: none;
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
</style>

<style>
:root {
  background-image: url('/assets/ฉาก1.png');
  background-repeat: repeat-y;
}
</style>