<script setup>
</script>

<template>
  <section id="Main">
    <img src="/assets/สายรุ้ง1.png" alt="rainbow" class="rainbow-image" />
    <div class="img">
      <img src="/assets/1.png" alt="logo" class="head-logo-image" />
    </div>
    <img src="/assets/5.png" alt="logo" class="home-rb" />
  </section>
</template>

<style scoped>
button{
  margin-top: 3.5rem;
  position: absolute;
  top: 57vh;
  right: 48vw;
  z-index: 1;
}
#Main{
  margin-top: -5.5rem;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
section{
  background-color: #242424;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  margin-left: -2rem;
}

.home-rb{
  position: absolute;
  bottom: -5rem;
  left: 6rem;
  z-index: 0;
  width: 650px;
  animation: slideleftAndFade 1s ease-out forwards;
}
.img{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
}
.head-logo-image{
  position: absolute;
  height: 280px;
  width: 680px;
  top: 20vh;
  right: 25vw;
  animation: slideupAndFade 1s ease-out forwards;
}
.rainbow-image{
  position: absolute;
  right: 0;
  top: 0;
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
@keyframes slideleftAndFade {
  from {
    opacity: 0;
    transform: translateX(-50px) rotate(-15deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}
  @keyframes slideupAndFade {
  from {
    opacity: 0;
    transform: translatey(50px);
  }
  to {
    opacity: 1;
    transform: translatey(0);
  }
}
</style>
