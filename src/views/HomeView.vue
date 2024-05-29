<script setup></script>

<template>
  <head>
    <title>Payziii - Главная</title>
  </head>
  <div class="about">
    <h1 align="center">Привет! Меня зовут Михаил</h1>
    <h3 align="center">Ниже ссылки на соц.сети, а также проекты, которыми я занимаюсь</h3>
    <div class="btn-group">
      <a target="_blank" href="https://discord.com/users/439079453650321409">
        <button class="button">Discord</button>
      </a>
      <a target="_blank" href="https://t.me/payziii">
        <button class="button">Telegram</button>
      </a>
      <a target="_blank" href="https://github.com/Payziii">
        <button class="button">GitHub</button>
      </a>
      <a href="/projects">
        <button class="button">Проекты</button>
      </a>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--main-color-text);
}

h3 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  margin-bottom: 1em;
}

.row {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
}

.column {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  float: left;
  width: 50%;
  flex: 50%;
}

.row:after {
  margin-left: 10px;
  content: '';
  display: table;
  clear: both;
}

.social {
  text-align: center;
  text-decoration: none;
  color: var(--social-color-text);
}

.social:hover {
  text-decoration: underline;
}

.projects:hover {
  text-decoration: underline;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn-group .button {
  background-color: #181818;
  border: 2px solid #cf1b54;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
}

.btn-group .button:not(:last-child) {
  border-right: none;
}

.btn-group .button:hover {
  background-color: #cf1b54;
}
</style>
