<script setup></script>

<template>
  <head>
    <title>Payziii - Главная</title>
  </head>
  <div class="about">
    <h1 class="page-title">Привет, я Payziii</h1>
    <h2 class="aka"><img class="aka-img" src="../assets/aka.svg" /> Михаил</h2>
    <h2 class="page-desc">
      Я разрабатываю ботов на JavaScript, создаю игры и полезные инструменты
    </h2>

    <div class="btn-group">
      <a target="_blank" href="https://discord.com/users/439079453650321409">
        <div class="button">Discord</div>
      </a>
      <a target="_blank" href="https://t.me/payziii">
        <div class="button">Telegram</div>
      </a>
      <a target="_blank" href="https://github.com/Payziii">
        <div class="button">Github</div>
      </a>
    </div>
  </div>
  <div class="projects">
    <h1 class="h1-projects">Мои проекты</h1>
    <p class="p">Здесь вы найдёте краткие описания моих последних работ</p>
    <div class="projects-list">
      <div class="project" style="--border-color: #43c968; --width: 370px; --heigth: 335px">
        <p class="project-title" style="--size: 36px">PayziBot</p>
        <p class="project-description">Простой Discord бот с кучей команд, играми и нейросетью</p>
        <a target="_blank" href="https://payzibot.ru">
          <div class="project-btn" style="--project-bcolor: #dddddd; --project-color: #000000">
            На сайт
          </div>
        </a>
      </div>

      <div class="project" style="--border-color: #252525; --width: 370px; --heigth: 320px">
        <p class="project-title" style="--size: 30px">Check Spelling Bot</p>
        <p class="project-description">Бот в Telegram для проверки текста на наличие ошибок</p>
        <a target="_blank" href="https://github.com/Payziii/CheckSpellingBot">
          <div class="project-btn">Исходный код</div>
        </a>
      </div>

      <div class="project" style="--border-color: #fee75c; --width: 370px; --heigth: 290px">
        <p class="project-title" style="--size: 36px">WeatherBot</p>
        <p class="project-description">Бот в Telegram для просмотра погоды</p>
        <a target="_blank" href="https://github.com/Payziii/WeatherBot">
          <div class="project-btn">Исходный код</div>
        </a>
      </div>

      <div class="project" style="--border-color: #252525; --width: 370px; --heigth: 320px">
        <p class="project-title" style="--size: 36px">FiftyTools</p>
        <p class="project-description">Сборник полезных инструментов в Telegram</p>
        <a target="_blank" href="https://t.me/FiftyToolsBot/app">
          <div class="project-btn" style="--project-bcolor: #dddddd; --project-color: #000000">
            Открыть
          </div>
        </a>
      </div>
    </div>
  </div>
  <p class="footer">
    © Payziii, задизайнено
    <a target="_blank" href="https://orzxiety.ru">Orzxiety</a>
  </p>
</template>
