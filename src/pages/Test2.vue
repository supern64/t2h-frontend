<script setup>
const handleChoiceChange = (questionNumber) => (event) => {
  const selectedValue = event.target.value;
  };
</script>

<template>
  <section>
    <img src="/src/assets/ฉาก1.png" alt="logo" class="bg-image" />
    <div>
    <!-- Question 1 -->
    <div class="question">
      <p>1. What is the capital of France?</p>
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

    <!-- Question 2 -->
    <div class="question">
      <p>2. What is the largest mammal?</p>
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

    <!-- Question 3 -->
    <div class="question">
      <p>3. What is the capital of Japan?</p>
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
    <div class="question">
      <p>4. What is the capital of Japan?</p>
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

    <div class="question">
      <p>5. What is the capital of Japan?</p>
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

    <div class="question">
      <p>6. What is the capital of Japan?</p>
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

    <div class="question">
      <p>7. What is the capital of Japan?</p>
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

    <div class="question">
      <p>8. What is the capital of Japan?</p>
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

    <div class="question">
      <p>9. What is the capital of Japan?</p>
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

    <div class="question">
      <p>10. What is the capital of Japan?</p>
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

    <div class="question">
      <p>11. What is the capital of Japan?</p>
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

    <div class="question">
      <p>12. What is the capital of Japan?</p>
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

    <div class="question">
      <p>13. What is the capital of Japan?</p>
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

    <div class="question">
      <p>14. What is the capital of Japan?</p>
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

    <div class="question">
      <p>15. What is the capital of Japan?</p>
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

    <!-- Add questions 4 to 15 -->

  </div>
  </section>
</template>

<style scoped>
section{
  position: relative;
  z-index: 1;
  height: auto;
  background-color: aliceblue;
}
.bg-image{
  width: 100vw;
  height: 81.3rem;
  top: -87px;
    left: -30px;
  z-index: -1;
  position: absolute;
}
.question{
  display: flex;
}
.none-text{
  display: none;
}
label{
  margin-top: 1.1rem;
}
</style>