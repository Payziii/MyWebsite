<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import api from '../functions/api.js'

const router = useRouter()

const wea = ref(null)
const currIcon = ref(null)
const time = ref('--:--')
const waka = ref(null)
const weatherLoading = ref(true)
const weatherError = ref(false)
const wakaLoading = ref(true)
const wakaError = ref(false)
const { t, locale } = useI18n()

let timeInterval
let timeTimeout

watch(locale, () => {
  document.title = `${t('title.home')} — Payziii`
  getWeather('Екатеринбург')
}, { immediate: true })

function getCurrentTimeUTC5() {
  const now = new Date()
  const utc5Time = new Date(now.getTime() + (now.getTimezoneOffset() + 300) * 60000)
  const hours = String(utc5Time.getHours()).padStart(2, '0')
  const minutes = String(utc5Time.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

function updateTime() {
  time.value = getCurrentTimeUTC5()
}

function scheduleTimeUpdate() {
  updateTime()
  const now = new Date()
  const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
  timeTimeout = setTimeout(() => {
    updateTime()
    timeInterval = setInterval(updateTime, 60000)
  }, msUntilNextMinute)
}

async function getWeather(city) {
  weatherLoading.value = true
  weatherError.value = false
  try {
    const data = await api.forecast(city, locale.value)
    wea.value = data
    const icon = await api.icon(data.current.condition.code, data.current.is_day)
    currIcon.value = 'https://api.fifty.su/weatherIcons/' + icon.icon
  } catch {
    weatherError.value = true
  } finally {
    weatherLoading.value = false
  }
}

async function getWaka() {
  wakaLoading.value = true
  wakaError.value = false
  try {
    const data = await api.waka()
    waka.value = data.hours
  } catch {
    wakaError.value = true
  } finally {
    wakaLoading.value = false
  }
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) return five
  n %= 10
  if (n === 1) return one
  if (n >= 2 && n <= 4) return two
  return five
}

function goToProjects() {
  router.push('/projects')
}

onMounted(() => {
  getWaka()
  scheduleTimeUpdate()
})

onUnmounted(() => {
  clearTimeout(timeTimeout)
  clearInterval(timeInterval)
})
</script>

<template>
  <div class="basic">
    <div class="nickname">
      <img src="/payziii.jpg" class="avatar" alt="Payziii avatar" />
      <h1>{{ $t('basic.hello') }} <span class="payziii">Payziii</span></h1>
    </div>
    <h2>{{ $t('basic.description_1') }}<br />{{ $t('basic.description_2') }}</h2>
    <div class="btns">
      <a class="btn" href="https://github.com/Payziii" target="_blank">
        <img src="/logos/github.png" alt="GitHub" />
        <p>GitHub</p>
      </a>
      <a class="btn" href="https://wakatime.com/@Payziii" target="_blank">
        <img src="/logos/wakatime.png" alt="WakaTime" />
        <p>WakaTime</p>
      </a>
      <a class="btn" href="https://t.me/Payziii" target="_blank">
        <img src="/logos/tg.png" alt="Telegram" />
        <p>Telegram</p>
      </a>
      <a class="btn" href="https://t.me/Payzick" target="_blank">
        <img src="/logos/tg.png" alt="Telegram channel" />
        <p>{{ $t('basic.channel') }}</p>
      </a>
    </div>
  </div>

  <div class="subcards">
    <!-- Weather card -->
    <div class="card" v-if="weatherLoading">
      <div class="skeleton sk-icon"></div>
      <div class="text-content">
        <div class="skeleton sk-h1"></div>
        <div class="skeleton sk-p"></div>
      </div>
    </div>
    <div class="card card--error" v-else-if="weatherError">
      <img src="/logos/skills/vue.png" style="opacity:0.3;" alt="" />
      <div class="text-content">
        <h1>—°C</h1>
        <p>{{ $t('error') }}</p>
      </div>
    </div>
    <div class="card" v-else>
      <img :src="currIcon" alt="weather icon" />
      <div class="text-content" :data-tooltip="wea?.current?.condition?.text">
        <h1>{{ wea?.current?.temp_c }}°C</h1>
        <p>{{ wea?.current?.condition?.text }}</p>
      </div>
    </div>

    <div class="card-group">
      <!-- Clock card (no loading state — computed locally) -->
      <div class="card">
        <img src="/logos/clock.png" alt="clock" />
        <div class="text-content" :data-tooltip="$t('subcards.time')">
          <h1>{{ time }}</h1>
          <p>{{ $t('subcards.time') }}</p>
        </div>
      </div>

      <!-- Coding hours card -->
      <div class="card" v-if="wakaLoading">
        <div class="skeleton sk-icon"></div>
        <div class="text-content">
          <div class="skeleton sk-h1"></div>
          <div class="skeleton sk-p"></div>
        </div>
      </div>
      <div class="card card--error" v-else-if="wakaError">
        <img src="/logos/coding.png" alt="coding" style="opacity:0.3;" />
        <div class="text-content">
          <h1>—</h1>
          <p>{{ $t('error') }}</p>
        </div>
      </div>
      <div class="card" v-else>
        <img src="/logos/coding.png" alt="coding hours" />
        <div class="text-content"
          :data-tooltip="getNoun(waka, $t('subcards.coding_one'), $t('subcards.coding'), $t('subcards.coding'))">
          <h1>{{ waka }} {{ getNoun(waka, $t('subcards.hour_one'), $t('subcards.hour_two'), $t('subcards.hour_five')) }}</h1>
          <p>{{ getNoun(waka, $t('subcards.coding_one'), $t('subcards.coding'), $t('subcards.coding')) }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="scroll">
    <img src="/logos/scroll.png" alt="" />
    <p>{{ $t('scroll') }}</p>
  </div>

  <div class="big-cards">
    <div class="skills">
      <div class="block">
        <p>Frontend</p>
        <div class="images">
          <img src="/logos/skills/vue.png" alt="Vue" />
          <img src="/logos/skills/js.png" alt="JavaScript" />
          <img src="/logos/skills/html.png" alt="HTML" />
          <img src="/logos/skills/css.png" alt="CSS" />
          <img src="/logos/skills/vite.png" alt="Vite" />
        </div>
      </div>
      <div class="block">
        <p>Backend</p>
        <div class="images">
          <img src="/logos/skills/node.png" alt="Node.js" />
          <img src="/logos/skills/nginx.png" alt="Nginx" />
          <img src="/logos/skills/cs.png" alt="C#" />
          <img src="/logos/skills/cpp.png" alt="C++" />
          <img src="/logos/skills/express.png" alt="Express" />
        </div>
      </div>
      <div class="block">
        <p>Other</p>
        <div class="images">
          <img src="/logos/skills/python.png" alt="Python" />
          <img src="/logos/skills/mongo.png" alt="MongoDB" />
          <img src="/logos/skills/mysql.png" alt="MySQL" />
          <img src="/logos/skills/djs.png" alt="Discord.js" />
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="pr-list">
        <div class="project">
          <img src="/logos/projects/payzibot.png" alt="PayziBot" />
          <p>PayziBot</p>
        </div>
        <div class="project">
          <img src="/logos/projects/fiftytools.png" alt="FiftyTools" />
          <p>FiftyTools</p>
        </div>
        <div class="project">
          <img src="/logos/projects/pepeguess.png" alt="PepeGuess" />
          <p>PepeGuess</p>
        </div>
        <div class="project">
          <img src="/logos/projects/fiftychat.png" alt="FiftyChat" />
          <p>FiftyChat</p>
        </div>
        <div class="project">
          <img src="/logos/projects/fiftyapi.png" alt="FiftyAPI" />
          <p>FiftyAPI</p>
        </div>
        <div class="project">
          <img src="/logos/projects/softshelf.png" alt="SoftShelf" />
          <p>SoftShelf</p>
        </div>
        <div class="project">
          <img src="/logos/projects/fallingcube.png" alt="Falling Cube" />
          <p>Falling Cube</p>
        </div>
      </div>
      <div class="all" @click="goToProjects" @keydown.enter="goToProjects" tabindex="0">
        {{ $t('bigcards.all') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.basic {
  box-sizing: border-box;
  margin-top: 100px;
  border-radius: 12px;
  border: 3px solid var(--border);
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
    flex-wrap: wrap;
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
  min-width: 100%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  .card-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    flex: 1 1 auto;
  }

  .card {
    padding: 20px;
    flex: 1 1 280px;
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
      position: relative;
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

    .text-content[data-tooltip]:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
      background: #1a1a1a;
      border: 1.5px solid var(--border);
      color: var(--white);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 1rem;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
    }

    /* Skeleton shapes inside cards */
    .sk-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .sk-h1 {
      width: 90px;
      height: 2.5rem;
      margin-bottom: 8px;
    }

    .sk-p {
      width: 140px;
      height: 1.2rem;
    }
  }

  .card--error img {
    opacity: 0.3;
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
    border-radius: 12px;
    border: 3px solid var(--border);
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
    border-radius: 12px;
    border: 3px solid var(--border);
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

@media (max-width: 1000px) and (min-width: 769px) {
  .big-cards {
    flex-wrap: wrap;
    width: 100%;

    .skills {
      width: 100%;
    }

    .projects {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .basic {
    margin-top: 10px;
    padding: 20px;
    border: 1.5px solid var(--border);
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

    .card-group {
      gap: 12px;
    }

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

      .sk-icon {
        width: 50px;
        height: 50px;
      }

      .sk-h1 {
        width: 60px;
        height: 1.5rem;
        margin-bottom: 6px;
      }

      .sk-p {
        width: 100px;
        height: 0.9rem;
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
      border: 1.5px solid var(--border);
      width: 100%;
      padding: 20px;
      margin-bottom: 0px;

      p {
        font-size: 1rem;
      }

      .block .images img:hover {
        scale: 1;
      }
    }

    .projects {
      border: 1.5px solid var(--border);
      width: 100%;
      padding: 20px;
      margin-bottom: 0px;

      .all {
        border: 1px solid var(--border);
      }

      .project:hover {
        scale: 1;
      }

      .pr-list {
        .project img {
          width: 70px;
          height: 70px;
        }

        .project p {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
