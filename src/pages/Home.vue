<script setup>
</script>

<template>
  <section id="Main">
    <img src="/src/assets/สายรุ้ง1.png" alt="rainbow" class="rainbow-image" />
    <div class="img">
      <img src="/src/assets/1.png" alt="logo" class="head-logo-image" />
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

.home-rb{
  position: absolute;
  bottom: 0;
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
  height: 380px;
  width: 580px;
  margin: auto;
  margin-top: 2rem;
}
.rainbow-image{
  position: absolute;
  right: -90px;
  top: -145px;
  z-index: -1;
  width: 400px;
  opacity: 0; 
  height: 300px; 
  margin-right: 10px; 
  animation: slideAndFade 1s ease-out forwards;
  pointer-events: none;
}
@keyframes slideAndFade {
  from {
    opacity: 0;
    transform: translateX(50px) rotate(35deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(20deg);
  }
}
</style>
