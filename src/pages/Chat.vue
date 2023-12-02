<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { useUserStore } from '../stores/user';
import { useChatStore } from '../stores/chat';
import * as Chat from '../api/chat';

const userStore = useUserStore();
const chatStore = useChatStore();
const router = useRouter();
const toast = useToast();
const roomList = ref([]);
const messages = ref([]);
const currentRoom = ref(null);
const message = ref('');
const chatbox = ref(null);

function checkInput(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  if (message.value.trim() !== '') {
    chatStore.session.sendMessage(message.value, currentRoom.value.id);
    message.value = '';
  }
}

function getRoomName(room) {
  return room.users.filter((user) => user.id !== userStore.user.id).map((user) => user.nickname).join(', ');
}

function switchRoom(roomId) {
  messages.value = [];
  currentRoom.value = roomList.value.find((room) => room.id === roomId);
  Chat.getRoomMessages(currentRoom.value.id).then((res) => {
    messages.value = res.data.messages;
    setTimeout(() => {
      chatbox.value.scrollTop = chatbox.value.scrollHeight;
    }, 100);
  });
}

function goToProfile() {
  router.push(`/user/${currentRoom.value.users.find((user) => user.id !== userStore.user.id).id}`);
}

onMounted(() => {
  if (!userStore.isLoggedIn && userStore.hasFetched) {
    router.push('/login');
  } else {
    Chat.getRoomList().then((rooms) => {
      roomList.value = rooms.data.chats;
      currentRoom.value = rooms.data.chats[0];
      Chat.getRoomMessages(currentRoom.value.id).then((res) => {
        messages.value = res.data.messages;
        setTimeout(() => {
          chatbox.value.scrollTop = chatbox.value.scrollHeight;
        }, 100);
      });
    });
    if (!chatStore.session) {
      const session = new Chat.ChatSession();
      chatStore.session = session;
    }
    if (!chatStore.session.isAuthenticated) {
      chatStore.session.connect((success, error) => {
        if (!success) {
          toast.add({
            severity: 'error',
            summary: 'Error',
            detail: "Chat connection failed: " + error,
            life: 5000
          })
        } else {
          console.log("connected")
        }
      });
    }
    chatStore.session.onMessage((message, roomId) => {
      if (currentRoom.value && currentRoom.value.id === roomId) {
        messages.value.push(message);
        setTimeout(() => {
          chatbox.value.scrollTop = chatbox.value.scrollHeight;
        }, 100);
      }
      roomList.value.unshift(roomList.value.splice(roomList.value.findIndex((room) => room.id === roomId), 1)[0]);
    });
  }
})


</script>

<template>
  <section>
    
    <div class="chat">
      <header>
        <div class="in-head">
          <button>แชท</button>
          <img src="/assets/black.png" alt="profile" class="profile" />
          <p class="ph">{{ currentRoom ? getRoomName(currentRoom) : "ชื่อผู้ใช้"}}</p>
          <button style="cursor: pointer;" @click="goToProfile()">ดูหน้าผู้ใช้</button>
        </div>
        <div class="in-head">
          <img src="/assets/phone.png" alt="profile" class="icon" />
          <img src="/assets/vdcall.png" alt="profile" class="icon" />
        </div>
      </header>
      <div class="container">
      <div class="side-freind-bar">
        <article v-for="room of roomList" @click="switchRoom(room.id)" :key="room.id" :class="{ 'current-room' : room.id === currentRoom.id }">
            <img src="/assets/black.png" alt="profile" class="in-profile" />
            <p class="ph">{{ getRoomName(room) }}</p>
        </article>
      </div>
      <div>
        <div class="chatin-out" ref="chatbox">
          <p v-for="message in messages" :key="message.id" class="message">{{ message.user.nickname }}: {{ message.text }}</p>
        </div>
        <footer>
          <img src="/assets/plus.png" alt="profile" class="icon" />
          <img src="/assets/im.png" alt="profile" class="icon" />
          <input type="text" v-model="message" @keydown="checkInput" class="text-in" id="text-in">
          <img src="/assets/send.png" @click="sendMessage" alt="profile" class="icon" />
        </footer>
        </div>
      </div>
    </div>
        <img src="/assets/ฉาก1.png" alt="logo" class="bg-image" />
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
    color: black;
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
    cursor: pointer;
  }

  .side-freind-bar article.current-room {
    background-color: #9d9ade;
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

.chatin-out {
  padding: 1rem;
  overflow-y: auto;
  max-height: 69vh;
  overflow-x: hidden;
}
</style>