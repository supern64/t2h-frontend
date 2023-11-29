<script setup>
const props = defineProps({
    message: String
})
</script>
<template>
    <div id="error">
        {{ message }}
    </div>
</template>
<style scoped>
#error {
    color: #fff;
    background-color: #ff3333;
    padding: 0.75rem;
    border-radius: 5px;
    width: 70%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>