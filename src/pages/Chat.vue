<script setup>
</script>

<template>
  <section>
    
    <div class="chat">
      <header>
        <div class="in-head">
          <button>แชท</button>
          <img src="/src/assets/black.png" alt="profile" class="profile" />
          <p class="ph">ชื่อผู้ใช้</p>
        </div>
        <div class="in-head">
          <img src="/src/assets/phone.png" alt="profile" class="icon" />
          <img src="/src/assets/vdcall.png" alt="profile" class="icon" />
        </div>
      </header>
      <div class="container">
      <div class="side-freind-bar">
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
        <article>
            <img src="/src/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">ชื่อผู้ใช้</p>
        </article>
      </div>
      <div>
        <div class="chatin-out">

        </div>
        <footer>
          <img src="/src/assets/plus.png" alt="profile" class="icon" />
          <img src="/src/assets/im.png" alt="profile" class="icon" />
          <input type="text" class="text-in" id="text-in">
          <img src="/src/assets/send.png" alt="profile" class="icon" />
        </footer>
        </div>
      </div>
    </div>
        <img src="/src/assets/ฉาก1.png" alt="logo" class="bg-image" />
  </section>
</template>

<style scoped>

  section{
    height: 82vh;
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
    max-height: 82vh;
  }
  header{
    display: flex;
    border-bottom: 2px solid black;
    padding-bottom: 0.6rem;
    justify-content: space-between;
    padding-right: 1.5rem;
  }
  button{
    font-weight: 700;
    background-color: white;
    width: 11rem;
    height: 2.5rem;
    text-align: center;
    margin-left: 1.5rem;
    margin-top: 1.3rem;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 1.2rem;
  }
  .chat{
    width: 100vw;
    height: 108.3%;
    background-color: #C4C2FF;
    margin-left: -2rem;
    margin-right: -2rem;
    margin-top: -0.3rem;
    border-top-left-radius: 3rem; 
    border-top-right-radius: 3rem;
    padding-top: 0.3rem;
    animation: slideupAndFade 1s ease-out forwards;
    visibility: hidden; /* Initially hidden */
  }

  .chat:not(.animated) {
  visibility: visible;
}
  .profile{
    border-radius: 100%;
    width: 40px;
    margin-top: 1.3rem;
    margin-left: 3rem;
  }
  .in-profile{
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin-top: 1.3rem;
    margin-left: 1.3rem;
  }
  .ph{
    
    margin-left: 1.5rem;
    height: auto;
    margin-bottom: 0;
    margin-top: 1.6rem;
  }
  .side-freind-bar{
    max-height: 78.5vh; /* Set the maximum height for the side-friend-bar */
    overflow-y: auto;  /* Enable vertical scroll */
    overflow-x: hidden;
    width: 16%;
    border-right: 2px solid black;
    height: 78.5vh;
  }
  .side-freind-bar article {
    display: flex;
    border-bottom: 2px solid black;
    height: 14%;
  }
  .container{
    display: flex;
  }
  .chatin-out{
    height: 89%;
  }
  footer{
    display: flex;
    border-top: 2px solid black;
    width: 84vw;
    align-items: center;
  }
  .icon{
    width: 40px;
    height: 40px;
    margin-top: 0.9rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  .text-in{
    width: 85%;
    height: 3.9rem;
    background-color: #C4C2FF;
    border: none;
    outline: none;
    font-size: 22px;
    color: black;
    pointer-events: none;
    margin: 0;
    margin-left: 0.5rem;
  }
  .in-head{
    display: flex;
  }
  @keyframes slideupAndFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.bg-image{
  width: 100vw;
  height: 100vh;
  top: 0px;
    left: 3px;
  z-index: -1;
  position: absolute;
}
</style>