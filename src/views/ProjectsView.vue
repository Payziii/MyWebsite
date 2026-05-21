<!-- ala lukin e ni. -->
<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const projects = ref([])
const loading = ref(true)
const plistRef = ref(null)
const { t, locale } = useI18n()

watch(locale, () => {
  document.title = `${t('title.projects')} — Payziii`
}, { immediate: true })

onMounted(async () => {
  try {
    const response = await fetch(`https://api.fifty.su/projects?lang=${locale.value}`)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    projects.value = data
    loading.value = false

    await nextTick()
    initObserver()
  } catch (error) {
    console.error('Error fetching projects:', error)
    loading.value = false
  }
})

function initObserver() {
  const cards = plistRef.value.querySelectorAll('.project')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  cards.forEach((card) => observer.observe(card))
}
</script>

<template>
  <div class="plist" ref="plistRef">
    <template v-if="loading">
      <div class="project skeleton-card" v-for="n in 6" :key="n">
        <div class="nickname">
          <div class="skeleton sk-avatar"></div>
          <div class="skeleton sk-title"></div>
        </div>
        <div class="skeleton sk-desc-line" v-for="l in 3" :key="l"></div>
        <div class="buttons-container">
          <div class="skeleton sk-btn"></div>
          <div class="skeleton sk-btn"></div>
        </div>
      </div>
    </template>

    <template v-else>
      <div v-for="(project, index) in projects" :key="project.id" class="project"
        :data-side="index % 2 === 0 ? 'left' : 'right'">
        <div class="nickname">
          <img :src="project.avatar" class="avatar" :style="{ '--shadow-color': project.shadowColor }" :alt="project.name" />
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

      <div v-show="projects.length === 0">
        {{ $t('loading') }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.plist {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

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
      transform: translateX(-10px) translateY(4px);
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

.skeleton-card {
  opacity: 1;

  .sk-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .sk-title {
    width: 140px;
    height: 2rem;
    border-radius: 6px;
  }

  .sk-desc-line {
    width: 100%;
    height: 1rem;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .sk-desc-line:last-of-type {
    width: 65%;
  }

  .sk-btn {
    width: 90px;
    height: 36px;
    border-radius: 8px;
  }
}

.project[data-side='left'] {
  transform: translateX(-120px);
}

.project[data-side='right'] {
  transform: translateX(120px);
}

.project.visible {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 1000px) and (min-width: 769px) {
  .project {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .plist {
    margin-top: 10px;
  }

  .project {
    width: 100%;
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
