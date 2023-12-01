<script setup>
</script>

<template>
  <section>
    <div class="chat">
      <header>
        <article>แชท</article>
        <img src="/src/assets/vue.svg" alt="profile" class="profile" />
      </header>
    </div>
  </section>
</template>

<style scoped>
  section{
    height: 82vh;
    color: black;
    font-size: 1.2rem;
  }
  header{
    display: flex;
    border-bottom: 2px solid black;
    padding-bottom: 0.6rem;
  }
  article{
    font-weight: 700;
    background-color: white;
    width: 11rem;
    height: 2.5rem;
    text-align: center;
    margin-left: 1.5rem;
    margin-top: 1.3rem;
    border: 2px solid black;
    border-radius: 20px;
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
  }
  .profile{
    border-radius: 100%;
  }
</style>