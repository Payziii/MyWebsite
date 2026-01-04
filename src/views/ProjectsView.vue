<!-- ala lukin e ni. -->
<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'PayziBot',
    avatar: '/logos/projects/payzibot.png',
    description: 'Простой <span class="green">Discord-бот</span>, созданный в 2019 году. Присутствует система модерации, игр, уровней, розыгрышей.',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)', 
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/PayziBot', icon: '/logos/github.png' },
      { label: 'Добавить', url: 'https://discord.com/api/oauth2/authorize?client_id=576442351426207744&permissions=1411299798102&scope=bot', icon: '/logos/discord.png' },
      { label: 'Сайт', url: 'https://payzibot.ru', icon: '/logos/site.png' }
    ]
  },
  {
    id: 2,
    name: 'FiftyTools',
    avatar: '/logos/projects/fiftytools.png',
    description: '<span class="green">Веб-сайт</span> с небольшим количеством полезных (и не очень) инструментов: погода, whois, рандомайзер.',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Telegram', url: 'https://t.me/FiftyToolsBot', icon: '/logos/tg.png' },
      { label: 'Сайт', url: 'https://tools.fifty.su', icon: '/logos/site.png' }
    ]
  },
  {
    id: 3,
    name: 'FiftyChat',
    avatar: '/logos/projects/fiftychat.png',
    description: 'Большой сборник <span class="green">нейросетей</span> с удобным интерфейсом для взаимодействия с ними.',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Сайт', url: 'https://chat.fifty.su', icon: '/logos/site.png' },
      { label: 'RuStore', url: 'https://www.rustore.ru/catalog/app/su.fifty.chat', icon: '/logos/download.png' },
      { label: 'Telegram', url: 'https://t.me/Fifty_Chat_Bot', icon: '/logos/tg.png' }
    ]
  },
  {
    id: 4,
    name: 'PepeGuess',
    avatar: '/logos/projects/pepeguess.png',
    description: 'Угадывайте, где вы находитесь в мире <span class="green">PepeLand</span> и сражайтесь за место в рейтинге!',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Сайт', url: 'https://pepeguess.ru', icon: '/logos/site.png' },
    ]
  },
  {
    id: 5,
    name: 'ClipBoardy',
    avatar: '/logos/projects/clipboardy.png',
    description: 'Небольшой <span class="green">менеджер буфера обмена</span> с папками, закрепами и красивым интерфейсом!',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/ClipBoardy', icon: '/logos/site.png' },
    ]
  },
  {
    id: 6,
    name: 'FiftyFilter',
    avatar: '/logos/projects/fiftyfilter.png',
    description: 'Небольшой <span class="green">Telegram-бот</span> для обработки входящих заявок в чат.',
    isActive: true,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Telegram', url: 'https://t.me/FiftyFilterBot', icon: '/logos/tg.png' },
    ]
  },
  {
    id: 7,
    name: 'Falling Cube',
    avatar: '/logos/projects/fallingcube.png',
    description: '<span class="red">Игра</span>, в которой Вы играете за куб. Ваша цель - упасть вниз, избегая препятствий.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/falling-cube', icon: '/logos/github.png' },
      { label: 'Скачать', url: 'https://payziii.itch.io/falling-cube', icon: '/logos/download.png' }
    ]
  },
  {
    id: 8,
    name: 'AI Pixel Battle',
    avatar: '/logos/projects/pixel.png',
    description: '<span class="red">Пиксель баттл</span>, написанный ИИ.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/AIPixelBattle', icon: '/logos/github.png' }
    ]
  },
  {
    id: 9,
    name: 'За стеной',
    avatar: '/logos/projects/zastenoi.png',
    description: '<span class="red">Игра-головоломка</span> про кота, ищущего выход ОТСЮДА...',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Играть', url: 'https://vk.com/app51743844', icon: '/logos/site.png' }
    ]
  },
  {
    id: 10,
    name: 'SoftShelf',
    avatar: '/logos/projects/softshelf.png',
    description: '<span class="red">Платформа</span> для покупки/продажи цифровых товаров внутри Telegram.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Telegram-канал', url: 'https://t.me/SoftShelf', icon: '/logos/tg.png' }
    ]
  },
  {
    id: 11,
    name: 'FiftyAPI',
    avatar: '/logos/projects/fiftyapi.png',
    description: '<span class="red">API</span> с играми, квизами и прочими вещами.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: []
  },
  {
    id: 12,
    name: 'CalculatorGame',
    avatar: '/logos/projects/calculator.png',
    description: 'Самый обычный <span class="red">кликер</span>.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/CalculatorGame', icon: '/logos/github.png' },
      { label: 'Скачать', url: 'https://payziii.itch.io/calculatorgame', icon: '/logos/download.png' }
    ]
  },
  {
    id: 13,
    name: 'FiftyCube',
    avatar: '/logos/projects/fiftycube.png',
    description: '<span class="red">Головоломка</span>, суть которой - вытолкнуть куб из игрового поля любой ценой.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'Скачать', url: 'https://payziii.itch.io/fiftycube', icon: '/logos/download.png' }
    ]
  },
  {
    id: 14,
    name: 'DuoBot',
    avatar: '/logos/projects/noava.png',
    description: '<span class="red">Telegram-бот</span>, отображающий информацию об аккаунте Duolingo.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/DuoBot', icon: '/logos/github.png' }
    ]
  },
  {
    id: 15,
    name: 'WeatherBot',
    avatar: '/logos/projects/noava.png',
    description: '<span class="red">Telegram-бот</span> с информацией о погоде в выбранном городе.',
    isActive: false,
    shadowColor: 'rgba(50, 100, 255, 0.1)',
    buttons: [
      { label: 'GitHub', url: 'https://github.com/Payziii/WeatherBot', icon: '/logos/github.png' }
    ]
  }
])
</script>

<template>
  <div class="plist">
    <div v-for="project in projects" :key="project.id" class="project">
      <div class="nickname">
        <img :src="project.avatar" class="avatar" :style="{ '--shadow-color': project.shadowColor }" />
        <h1>{{ project.name }}</h1>
        <img :src="project.isActive ? '/code.png' : '/nocode.png'" class="status-icon" alt="status" />
      </div>

      <h2 class="description" v-html="project.description"></h2>

      <div class="buttons-container">
        <a v-for="(btn, index) in project.buttons" :key="index" :href="btn.url" class="btn" target="_blank">
          <img v-if="btn.icon" :src="btn.icon" class="btn-icon" alt="" />
          {{ btn.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plist {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.project {
  border-radius: 24px;
  border: 3px solid var(--border);
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  .nickname {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 0 15px 5px var(--shadow-color, rgba(255, 255, 255, 0.7));
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0;
    }

    .status-icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
      transform: translateY(4px);
    }
  }

  .description {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  :deep(.green) {
    color: var(--green);
  }

  :deep(.red) {
    color: var(--red);
  }

  .buttons-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: auto;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 2px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: var(--white);
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.2s;
  }

  .btn:hover {
    background-color: #252525;
  }

  .btn-icon {
    width: 20px;
    height: 20px;
    display: block;
  }
}

@media (max-width: 768px) {
  .plist {
    margin-top: 10px;
  }

  .project {
    width: 85%;
    padding: 20px;

    .nickname {
      gap: 20px;

      .avatar {
        width: 50px;
        height: 50px;
      }

      h1 {
        font-size: 1.5rem;
      }

      .status-icon {
        width: 15px;
        height: 15px;
      }
    }

    .description {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .btn {
      font-size: 0.9rem;
    }

    .btn-icon {
      width: 15px;
      height: 15px;
    }
  }
}
</style>