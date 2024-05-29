<script setup></script>

<template>
  <head>
    <title>Payziii - Проекты</title>
  </head>
  <div class="about">
    <h1 align="center">Привет! Меня зовут Михаил</h1>
    <h3 align="center">Здесь вы можете увидеть проекты, которыми я занимаюсь</h3>
    <div class="card-group">
      <div class="card" style="--bct: rgb(90, 208, 17)">
        <div class="container">
          <h3>PayziBot</h3>
          <p>Discord-бот с большим количеством команд, игр и нейросетей</p>
          <a href="https://docs.payzibot.ru/" class="action" target="_blank"> Документация </a>
        </div>
      </div>
      <div class="card" style="--bct: rgb(181, 31, 138)">
        <div class="container">
          <h3>FiftyAPI</h3>
          <p>API с вопросами для викторин и другие материалы</p>
          <a href="https://docs.fifty.su/" class="action" target="_blank"> Документация </a>
        </div>
      </div>
      <div class="card" style="--bct: rgb(85, 151, 189)">
        <div class="container">
          <h3>Угадай город</h3>
          <p>Игра, в которой надо угадывать города по фотографии</p>
          <a
            href="https://www.rustore.ru/catalog/app/com.Payziii.GuessCity"
            class="action"
            target="_blank"
          >
            Скачать
          </a>
        </div>
      </div>
      <div class="card" style="--bct: rgb(72, 92, 219)">
        <div class="container">
          <h3>WeatherBot</h3>
          <p>Telegram-бот для просмотра погоды</p>
          <a href="https://github.com/Payziii/WeatherBot" class="action" target="_blank">
            Исходный код
          </a>
        </div>
      </div>
      <div class="card" style="--bct: rgb(204, 27, 89)">
        <div class="container">
          <h3>Check Spelling Bot</h3>
          <p>Telegram-бот для проверки текста на наличие ошибок</p>
          <a href="https://github.com/Payziii/CheckSpellingBot" class="action" target="_blank">
            Исходный код
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 350px;
  max-width: 320px;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s;
  width: 40%;
  border-radius: 9px;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  padding: 1.5rem;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, var(--bct), rgba(0, 0, 0, 0)) 1 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
}

.container h3 {
  text-align: center;
  font-size: 25px;
  margin-bottom: 1em;
  font-weight: bold;
}

.container a {
  margin-top: auto;
}

p,
a {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  margin-bottom: 1em;
  float: left;
}

a {
  margin-bottom: 0em;
}

.action {
  margin-top: 2rem;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 1);
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
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

.card-group {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}
</style>
