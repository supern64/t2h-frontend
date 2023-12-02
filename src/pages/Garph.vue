<script setup>
</script>

<template>
  <section>

  <div class="container">
    <div>
      <div class="dropdown-container">
        <div class="name-dropdown">
        </div>
        <div class="dropdownQ-container">
          <div v-for="option in options" :key="option.value" class="dropdown">
            <div class="dropdown-trigger" @click="toggleDropdown(option)">
              {{ option.label }}
            </div>
            <div v-if="option.showDropdown" class="dropdown-content">
              {{ option.content }}
            </div>
          </div>
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
  background-color: aliceblue;
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
  width: 105%;
  height: 105.6%;
    background-color: #F6EBD9;
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: 0rem;
    border-top-left-radius: 3rem; 
    border-top-right-radius: 3rem;
    padding: 2rem;
}
.dropdownQ-container {
  height: 50vh;
  width: 50%;
  overflow-y: auto; /* Enable vertical scrolling if content exceeds container height */
  border: 1px solid #ccc; /* Optional: Add a border for visual clarity */
  padding: 10px; /* Optional: Add padding to the container */
}

.dropdown {
  margin-bottom: 10px; /* Optional: Add margin between dropdowns */
}

.dropdown-trigger {
  cursor: pointer;
  padding: 5px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
}

.dropdown-content {
  display: block;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
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
