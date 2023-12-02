<script setup>
</script>

<template>
  <section id="Main">
    <img src="/assets/สายรุ้ง1.png" alt="rainbow" class="rainbow-image" />
    <div class="img">
      <img src="/assets/1.png" alt="logo" class="head-logo-image" />
    </div>
    <img src="/assets/5.png" alt="logo" class="home-rb" />
    <img src="/assets/cloud1.png" alt="logo" class="cloud1" />
    <img src="/assets/cloud2.png" alt="logo" class="cloud2" />
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
.cloud1{
  position: absolute;
  top: 10rem;
  left: -8rem;
  width: 25rem;
  animation: slideleftAndFadenoRo 1s ease-out forwards;
}
.cloud2{
  position: absolute;
  top: 33rem;
  right: -13rem;
  height: 8rem;
  width: 32rem;
  animation: sliderightAndFadenoRo 1s ease-out forwards;
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
  height: 380px;
  width: 750px;
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
  top: 17vh;
  right: 25vw;
  animation: slideupAndFade 1s ease-out forwards;
}
.rainbow-image{
  position: absolute;
  right: -60px;
  top: -55px;
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
@keyframes sliderightAndFadenoRo {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
@keyframes slideleftAndFadenoRo {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
