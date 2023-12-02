<script setup>
</script>

<template>
  <div class="container">
    <div v-for="option in options" :key="option.value" class="dropdown">
      <div class="dropdown-trigger" @click="toggleDropdown(option)">
        {{ option.label }}
      </div>
      <div v-if="option.showDropdown" class="dropdown-content">
        <!-- Content to display when the dropdown is open -->
        {{ option.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 50vh;
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

<script>
export default {
  data() {
    return {
      options: [
        { value: 'option1', label: 'Option 1', content: 'Content for Option 1', showDropdown: false },
        { value: 'option2', label: 'Option 2', content: 'Content for Option 2', showDropdown: false },
        // Add more options as needed
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