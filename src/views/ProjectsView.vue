<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'PayziBot',
    avatar: '/payziii.jpg',
    isActive: true,
    shadowColor: 'rgba(255, 0, 0, 0.7)' 
  },
  {
    id: 2,
    name: 'BlueBot',
    avatar: '/payziii.jpg',
    isActive: false,
    shadowColor: 'rgba(0, 100, 255, 0.7)'
  },
])
</script>

<template>
  <head>
    <title>{{ $t('title.projects') }} — Payziii</title>
  </head>
  
  <div class="plist">
    <div 
      v-for="project in projects" 
      :key="project.id" 
      class="project"
    >
      <div class="nickname">
        <img 
          :src="project.avatar" 
          class="avatar" 
          :style="{ '--shadow-color': project.shadowColor }"
        />
        <h1>{{ project.name }}</h1>
        <img 
          :src="project.isActive ? '/code.png' : '/nocode.png'" 
          class="status-icon"
          alt="status"
        />
      </div>
      
      </div>
  </div>
</template>

<style scoped>
.plist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.project {
  margin-top: 50px;
  border-radius: 24px;
  border: 5px solid var(--border, #ccc);
  width: 40%;
  padding: 50px;

  .nickname {
    display: flex;
    align-items: center;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      
      box-shadow: 0 0 15px 5px var(--shadow-color, rgba(255, 255, 255, 0.7));
    }

    h1 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1;
    }

    .status-icon {
      margin-left: -30px;
      width: 24px;
      height: 24px;
      object-fit: contain;
      display: block;
      transform: translateY(4px);
    }
  }
}
</style>