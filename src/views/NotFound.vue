<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const notfound = document.getElementById('notfound');
  setTimeout(() => {
    notfound.style.opacity = '0';
  }, 4500)
  setTimeout(() => {
    router.push('/')
  }, 5000)
})
</script>
<template>

  <head>
    <title>404 — Payziii</title>
  </head>
  <div class="nf">
    <div class="notfound" id="notfound">
      <h1>{{ $t('notfound.general') }}</h1>
      <p>{{ $t('notfound.desc') }}</p>
    </div>
  </div>
</template>

<style>
.nf {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notfound {
  margin-top: 100px;
  border-radius: 24px;
  border: 5px solid var(--border);
  width: 60%;
  padding: 50px;
  margin-bottom: 50px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.5s ease-out;

  h1 {
    font-weight: 700;
    color: var(--red);
    text-shadow: 0 0 50px var(--red);
  }

  p {
    margin-top: -20px;
    font-weight: 500;
  }
}
</style>
