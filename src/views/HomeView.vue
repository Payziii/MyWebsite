<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import api from '../functions/api.js'

const router = useRouter()

const wea = ref({})
const currIcon = ref('https://api.fifty.su/weatherIcons/cloud-snow.svg')
const time = ref('23:18')
const waka = ref('150')
const { locale } = useI18n()
let timeInterval;

function getCurrentTimeUTC5() {
  const now = new Date();

  const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
  const utc5Time = new Date(utcTime + (5 * 3600000));

  const hours = String(utc5Time.getHours()).padStart(2, '0');
  const minutes = String(utc5Time.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}

function updateTime() {
  time.value = getCurrentTimeUTC5();
}

function getWeather(city) {
  api.forecast(city, locale.value).then((data) => {
    wea.value = data

    api.icon(data.current.condition.code, data.current.is_day).then((icon) => {
      currIcon.value = "https://api.fifty.su/weatherIcons/" + icon.icon
      console.log(currIcon.value)
    })

    return data
  })
}

function getWaka() {
  api.waka().then((data) => {
    waka.value = data.hours

    return data
  })
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

function goToProjects() {
  router.push('/projects')
}

onMounted(() => {
  getWeather('Екатеринбург');
  getWaka();

  updateTime();

  timeInterval = setInterval(updateTime, 1000);
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
})
</script>

<template>

  <head>
    <title>{{ $t('title.home') }} — Payziii</title>
  </head>
  <div class="basic">
    <div class="nickname">
      <img src="/payziii.jpg" class="avatar" />
      <h1>{{ $t('basic.hello') }} <span class="payziii">Payziii</span></h1>
    </div>
    <h2>{{ $t('basic.description_1') }}<br />{{ $t('basic.description_2') }}</h2>
    <div class="btns">
      <a class="btn" href="https://github.com/Payziii" target="_blank">
        <img src="/logos/github.png" />
        <p>GitHub</p>
      </a>
      <a class="btn" href="https://wakatime.com/@Payziii" target="_blank">
        <img src="/logos/wakatime.png" />
        <p>WakaTime</p>
      </a>
      <a class="btn" href="https://t.me/Payziii" target="_blank">
        <img src="/logos/tg.png" />
        <p>Telegram</p>
      </a>
      <a class="btn" href="https://t.me/Payzick" target="_blank">
        <img src="/logos/tg.png" />
        <p>{{ $t('basic.channel') }}</p>
      </a>
    </div>
  </div>
  <div class="subcards">
    <div class="card">
      <img :src="currIcon" />
      <div class="text-content">
        <h1>{{ wea?.current?.temp_c }} °C</h1>
        <p>{{ wea?.current?.condition?.text }}</p>
      </div>
    </div>
    <div class="card">
      <img src="/logos/clock.png" />
      <div class="text-content">
        <h1>{{ time }}</h1>
        <p>{{ $t('subcards.time') }}</p>
      </div>
    </div>
    <div class="card">
      <img src="/logos/coding.png" />
      <div class="text-content">
        <h1>{{ waka }} {{ getNoun(waka, $t('subcards.hour_one'), $t('subcards.hour_two'), $t('subcards.hour_five')) }}</h1>
        <p>{{ getNoun(waka, $t('subcards.coding_one'), $t('subcards.coding'), $t('subcards.coding')) }}</p>
      </div>
    </div>
  </div>
  <div class="scroll">
    <img src="/logos/scroll.png" />
    <p>{{ $t('scroll') }}</p>
  </div>
  <div class="big-cards">
    <div class="skills">
      <div class="block">
        <p>Frontend</p>
        <div class="images">
          <img src="/logos/skills/vue.png" />
          <img src="/logos/skills/js.png" />
          <img src="/logos/skills/html.png" />
          <img src="/logos/skills/css.png" />
          <img src="/logos/skills/vite.png" />
        </div>
      </div>
      <div class="block">
        <p>Backend</p>
        <div class="images">
          <img src="/logos/skills/node.png" />
          <img src="/logos/skills/nginx.png" />
          <img src="/logos/skills/cs.png" />
          <img src="/logos/skills/cpp.png" />
          <img src="/logos/skills/express.png" />
        </div>
      </div>
      <div class="block">
        <p>Other</p>
        <div class="images">
          <img src="/logos/skills/python.png" />
          <img src="/logos/skills/mongo.png" />
          <img src="/logos/skills/mysql.png" />
          <img src="/logos/skills/djs.png" />
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="pr-list">
        <div class="project">
        <img src="/logos/projects/payzibot.png" />
        <p>PayziBot</p>
      </div>
      <div class="project">
        <img src="/logos/projects/fiftytools.png" />
        <p>FiftyTools</p>
      </div>
      <div class="project">
        <img src="/logos/projects/pepeguess.png" />
        <p>PepeGuess</p>
      </div>
      <div class="project">
        <img src="/logos/projects/fiftychat.png" />
        <p>FiftyChat</p>
      </div>
      <div class="project">
        <img src="/logos/projects/fiftyapi.png" />
        <p>FiftyAPI</p>
      </div>
      <div class="project">
        <img src="/logos/projects/softshelf.png" />
        <p>SoftShelf</p>
      </div>
      <div class="project">
        <img src="/logos/projects/fallingcube.png" />
        <p>Falling Cube</p>
      </div>
      </div>
      <div class="all" @click="goToProjects">
        {{ $t('bigcards.all') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.basic {
  margin-top: 100px;
  border-radius: 24px;
  border: 5px solid var(--border);
  width: 100%;
  height: 50%;
  padding: 50px;
  margin-bottom: 50px;

  .payziii {
    font-weight: 700;
    color: var(--green);
    text-shadow: 0 0 50px rgba(60, 255, 0, 1);
  }

  .nickname {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 40px;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.7);
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 24px;

    .btn {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding-left: 12px;
      padding-right: 12px;
      gap: 10px;
      border-radius: 12px;
      border: 2px solid var(--border);
      color: var(--white);
      transition: all 0.3s ease;
    }

    .btn img {
      width: 1.8rem;
      height: 1.8rem;
    }

    .btn p {
      line-height: 0;
      font-size: 1.5rem;
    }

    .btn:hover {
      background-color: #252525;
    }
  }
}

.subcards {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  .card {
    padding: 20px;
    min-width: 400px;
    border-radius: 12px;
    border: 3px solid var(--border);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    gap: 5px 30px;

    img {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
      object-fit: cover;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      min-width: 0;
    }

    .text-content h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .text-content p {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding-left: 12px;
  padding-right: 12px;
  gap: 10px;
  color: var(--white);
  margin-top: 70px;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }

  p {
    line-height: 0;
    font-size: 1.8rem;
    font-weight: 500;
  }
}

.big-cards {
  display: flex;
  flex-direction: row;
  min-width: 80%;
  margin: 0 auto;
  gap: 5%;

  .skills {
    margin-top: 50px;
    border-radius: 24px;
    border: 5px solid var(--border);
    width: 35%;
    padding: 50px;
    margin-bottom: 50px;
    text-align: center;

    p {
      font-size: 2rem;
      font-weight: 500;
      margin-top: -10px;
      color: var(--white);
      font-weight: 700;
    }

    .images {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      img {
        transition: all .3s ease;
      }

      img:hover {
        scale: 1.1;
      }
    }

    .block:not(:first-child) {
      margin-top: 50px;
    }
  }

  .projects {
    margin-top: 50px;
    border-radius: 24px;
    border: 5px solid var(--border);
    width: 35%;
    padding: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;

    .pr-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-content: flex-start;
    }

    .project {
      transition: all .3s ease;

      p {
        margin-top: -10px;
        font-weight: 500;
      }
    }

    .project:hover {
      scale: 1.1;
    }

    .all {
      align-self: flex-end;
      margin-top: auto;
      text-align: center;
      width: 60%;
      padding-top: 5px;
      padding-bottom: 10px;
      margin: auto auto 0;
      cursor: pointer;

      border: 2px solid var(--border);
      border-radius: 14px;
    }

    .all:hover {
      background-color: #252525;
    }
  }
}

@media (max-width: 768px) {
  .basic {
      margin-top: 10px;
    width: 85%;
    padding: 20px;
    border: 3px solid var(--border);
    margin-bottom: 20px;

    .nickname {
    gap: 20px;

    .avatar {
      width: 50px;
      height: 50px;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  h2 {
    font-size: 0.9rem;
  }

  .btns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

    .btn {
      padding-left: 6px;
      padding-right: 6px;
      gap: 10px;
      border: 1px solid var(--border);
    }

    .btn img {
      width: 1rem;
      height: 1rem;
    }

    .btn p {
      line-height: 0;
      font-size: 0.9rem;
    }
  }
  }

  .subcards {
    gap: 12px;

  .card {
    min-width: 92%;
    padding: 10px;
    border: 1.5px solid var(--border);
    gap: 5px 15px;

    img {
      width: 50px;
      height: 50px;
    }

    .text-content h1 {
      font-size: 1.5rem;
    }

    .text-content p {
      font-size: 0.9rem;
    }
  }
}

.scroll {
  margin-top: 40px;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}

.big-cards {
  flex-wrap: wrap;
  width: 100%;

  .skills {
    border: 3px solid var(--border);
    width: 85%;
    padding: 20px;
    margin-bottom: 0px;

    p {
      font-size: 1rem;
    }
  }

  .projects {
    border: 3px solid var(--border);
    width: 85%;
    padding: 20px;
    margin-bottom: 0px;

    .all {
      border: 1px solid var(--border);
    }
  }
}
}
</style>