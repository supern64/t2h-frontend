<script setup>
</script>

<template>
  <section id="Main">
    <div class="img">
      <img src="/assets/accept-call-icon.png" alt="logo" class="head-logo-image" />
      <h1>1323</h1>
    </div>
  </section>
</template>

<style scoped>
section{
  margin-bottom: -31px;
}
button{
  margin-top: 3.5rem;
  position: absolute;
  top: 51vh;
  right: 44.8vw;
}

.home-rb{
  position: absolute;
  bottom: -5rem;
  left: 6rem;
  z-index: -1;
  width: 650px;
  animation: slideleftAndFade 1s ease-out forwards;
}
.img{
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 100%;
}
h1{
  font-size: 300px;
}
.head-logo-image{
  height: 300px;
  width: 300px;
  top: 4vh;
  right: 22.5vw;
  animation: slideupAndFade 1s ease-out forwards;
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
:root {
  background-color: #242424;
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