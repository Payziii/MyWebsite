<script setup></script>

<template>
  <head>
    <title>Payziii - {{ $t('home.head') }}</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=keyboard_double_arrow_down" />
  </head>
  <div class="about">
    <h1 class="page-title">{{ $t('home.title') }}</h1>
    <h2 class="aka"><img class="aka-img" src="../assets/aka.svg" /> {{ $t('home.aka') }}</h2>
    <h2 class="page-desc">
      {{ $t('home.desc') }}
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
    <div class="scroll-down">
        <span class="material-symbols-outlined">
          keyboard_double_arrow_down
        </span>
        <span class="material-symbols-outlined">
          keyboard_double_arrow_down
        </span>
        <span class="material-symbols-outlined">
          keyboard_double_arrow_down
        </span>
    </div>
  </div>
  <div class="projects">
    <h1 class="h1-projects">{{ $t('projects.title') }}</h1>
    <p class="p">{{ $t('projects.desc') }}</p>
    <div class="projects-list">

      <div class="project" style="--border-color: #43c968; --heigth: 335px">
        <p class="project-title" style="--size: 36px">PayziBot</p>
        <p class="project-description">{{ $t('projects.payzibot.desc') }}</p>
        <a target="_blank" href="https://payzibot.ru">
          <div class="project-btn" style="--project-bcolor: #dddddd; --project-color: #000000">
            {{ $t('projects.payzibot.button') }}
          </div>
        </a>
      </div>

      <div class="project" style="--border-color: #252525; --heigth: 320px">
        <p class="project-title" style="--size: 30px">Check Spelling Bot</p>
        <p class="project-description">{{ $t('projects.csb.desc') }}</p>
        <a target="_blank" href="https://github.com/Payziii/CheckSpellingBot">
          <div class="project-btn">{{ $t('projects.csb.button') }}</div>
        </a>
      </div>

      <div class="project" style="--border-color: #fee75c; --heigth: 290px">
        <p class="project-title" style="--size: 36px">WeatherBot</p>
        <p class="project-description">{{ $t('projects.weather.desc') }}</p>
        <a target="_blank" href="https://github.com/Payziii/WeatherBot">
          <div class="project-btn">{{ $t('projects.weather.button') }}</div>
        </a>
      </div>

      <div class="project" style="--border-color: #252525; --heigth: 320px">
        <p class="project-title" style="--size: 36px">FiftyTools</p>
        <p class="project-description">{{ $t('projects.fiftytools.desc') }}</p>
        <a target="_blank" href="https://t.me/FiftyToolsBot/app">
          <div class="project-btn" style="--project-bcolor: #dddddd; --project-color: #000000">
            {{ $t('projects.fiftytools.button') }}
          </div>
        </a>
      </div>

      <div class="project" style="--border-color: #4823a9; --heigth: 280px">
        <p class="project-title" style="--size: 36px">FiftyChat</p>
        <p class="project-description">{{ $t('projects.fiftychat.desc') }}</p>
        <a target="_blank" href="https://chat.fifty.su">
          <div class="project-btn" style="--project-bcolor: #dddddd; --project-color: #000000">
            {{ $t('projects.fiftychat.button') }}
          </div>
        </a>
      </div>

    </div>
  </div>
  <p class="footer">
    © Payziii, {{ $t('home.designed') }}
    <a target="_blank" href="https://orzxiety.ru">Orzxiety</a>
  </p>
</template>
