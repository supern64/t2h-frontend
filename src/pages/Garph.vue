<script setup>
</script>

<template>
  <section>

  <div class="container">
    <div class="left-container">
      <div class="dropdown-container">
        <div class="name-dropdown">
        </div>
        <div class="dropdownQ-container">
          <div v-for="option in options" :key="option.value" class="dropdown">
            <div class="dropdown-trigger" @click="toggleDropdown(option)">
              <img src="/assets/arrow.png" alt="logo" class="arrow" />
              {{ option.label }}
            </div>
            <div v-if="option.showDropdown" class="dropdown-content">
              {{ option.content }}
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
    <div class="right-container">
      <div class="above-garph">
      <div class="garph">
        <img src="/assets/pie-chart.png" alt="logo" class="chart" /> 
      </div>
      <p> กราฟสรุปความรู้สึก(รูปภาพเพื่อการโฆษณา)</p>
      </div>
      <div class="above-garph">
      <div class="garph">
        <img src="/assets/bar-chart.png" alt="logo" class="chart" />
      </div>
      <p> กราฟสรุปคะแนน(รูปภาพเพื่อการโฆษณา)</p>
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
.left-container{
  width: 60%;
}
.bg-image{
  width: 100vw;
  height: 80vh;
  top: -87px;
    left: -30px;
  z-index: -1;
  position: absolute;
}
.chart{
  margin-top: 1rem;
  width: 15rem;
  height: 12rem;
}
.right-container{
  width: 38%;  
}
.above-garph{
  height: 48%;
  background-color: white;
  margin-left: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 3rem; 
  border: 2px solid black;
  text-align: center;
}
.garph{
  display: flex;
  justify-content: center;

}
.container{
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
    background-color: #F6EBD9;
    border-radius: 3rem; 
    padding: 2rem;
  animation: slideleftAndFade 1s ease-out forwards;
}
.dropdownQ-container {
  height: 50vh;
  width: 100%;
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
  width: 100%;
  background-color: white;/* Enable vertical scrolling if content exceeds container height */
  border: 2px solid black; /* Optional: Add a border for visual clarity */
  padding: 1rem 2rem;
  border-radius: 2rem; 
}
@keyframes slideleftAndFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

<style>
:root {
  background-image: url('/assets/ฉาก1.png');
  background-repeat: repeat-y;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'Question 1', label: 'Question 1', content: 'Content for Option 1', showDropdown: false },
        { value: 'Question 2', label: 'Question 2', content: 'Content for Option 2', showDropdown: false },
        { value: 'Question 3', label: 'Question 3', content: 'Content for Option 3', showDropdown: false },
        { value: 'Question 4', label: 'Question 4', content: 'Content for Option 4', showDropdown: false },
        { value: 'Question 5', label: 'Question 5', content: 'Content for Option 5', showDropdown: false },
        { value: 'Question 6', label: 'Question 6', content: 'Content for Option 6', showDropdown: false },
      ]
    };
  },
  methods: {
    toggleDropdown(option) {
      option.showDropdown = !option.showDropdown;
    }
  }
}
</script>
