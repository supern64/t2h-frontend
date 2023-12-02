<script setup>
</script>

<template>
  <section id="Main">
    <img src="/assets/สายรุ้ง1.png" alt="rainbow" class="rainbow-image" />
    <div class="img">
      <img src="/assets/1.png" alt="logo" class="head-logo-image" />
      <p class="p">ให้คำปรึกษาปัญหาคาใจ คลายปัญหา ส่งเสริมสุขภาพจิตที่แข็งแรง</p> 
      <p class="p2">จากนักจิตวิทยาและนักจิตออนไลน์ จากใจเราสู่ใจคุณ</p>
    </div>
    <img src="/assets/5.png" alt="logo" class="home-rb" />
    <img src="/assets/cloud1.png" alt="logo" class="cloud1" />
    <img src="/assets/cloud2.png" alt="logo" class="cloud2" />
    <img src="/assets/star1.png" alt="logo" class="star1" />
    <img src="/assets/star1.png" alt="logo" class="star1-1" />
    <img src="/assets/star2.png" alt="logo" class="star2" />
    <img src="/assets/star2.png" alt="logo" class="star2-1" />
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
.p{
  margin-top: 25.5rem;
  animation: slideupAndFade 1.4s ease-out forwards;
}
.p2{
  margin-top: -1rem;
  animation: slideupAndFade 1.4s ease-out forwards;
}
.star1{
  position: absolute;
  top: 25rem;
  left: 8rem;
  width: 11rem;
  animation: slideupAndFadeRo 1s ease-out forwards;
}
.star1-1{
  position: absolute;
  top: 11rem;
  left: 22rem;
  width: 6rem;
  animation: slideupAndFadeRo15 1s ease-out forwards;
}
.star2{
  position: absolute;
  top: 13rem;
  right: 8rem;
  width: 11rem;
  animation: slideupAndFadeRoleft 1.2s ease-out forwards;
}
.star2-1{
  position: absolute;
  top: 37rem;
  right: 32rem;
  width: 7rem;
  animation: slideupAndFadeRoleft15 1.2s ease-out forwards;
}
.cloud2{
  position: absolute;
  top: 33rem;
  right: -13rem;
  height: 8rem;
  width: 32rem;
  animation: sliderightAndFadenoRo 1.2s ease-out forwards;
}
#Main{
  margin-top: -5.5rem;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  margin-bottom: -2rem;
}
section{
  overflow: hidden;
  background-color: #242424;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  margin-left: -2rem;
}

.home-rb{
  position: absolute;
  bottom: 25rem;
  left: 6rem;
  z-index: 0;
  height: 380px;
  width: 750px;
  margin-bottom: -30rem;
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
  animation: slideupAndFade 1.5s ease-out forwards;
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

  @keyframes slideupAndFadeRo {
  from {
    opacity: 0;
    transform: translatey(50px) rotate(0);
  }
  to {
    opacity: 1;
    transform: translatey(0) rotate(25deg);
  }
}
  @keyframes slideupAndFadeRo15 {
  from {
    opacity: 0;
    transform: translatey(50px) rotate(0);
  }
  to {
    opacity: 1;
    transform: translatey(0) rotate(15deg);
  }
}
@keyframes slideupAndFadeRoleft {
  from {
    opacity: 0;
    transform: translatey(50px) rotate(0);
  }
  to {
    opacity: 1;
    transform: translatey(0) rotate(-25deg);
  }
}
@keyframes slideupAndFadeRoleft15 {
  from {
    opacity: 0;
    transform: translatey(50px) rotate(0);
  }
  to {
    opacity: 1;
    transform: translatey(0) rotate(-10deg);
  }
}
</style>
