import './assets/main.css'

import ru from './locales/ru.js'
import en from './locales/en.js'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,          
  globalInjection: true,
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'ru',
  messages: {
    ru: ru,
    en: en
  }
})

const app = createApp(App)

app.use(router)

app.use(i18n)
app.mount('#app')
