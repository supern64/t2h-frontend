<script setup>
</script>

<template>
  <section id="Main">
    <div class="img">
      <img src="/src/assets/vue.svg" alt="logo" class="head-logo-image" />
      <button>something</button>
    </div>
    <img src="/src/assets/สายรุ้ง3.png" alt="logo" class="home-rb" />
  </section>
  <section>
    sadasd
  </section>
</template>

<style scoped>
button{
  margin-top: 3.5rem;
}
#Main{
  position: relative;
  height: 88vh;
  width: 100%;
}
.home-rb{
  position: absolute;
  width: 400px;
}
.img{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
}
.head-logo-image{
  height: 280px;
  width: 280px;
  margin: auto;
  margin-top: 2rem;
}
</style>
