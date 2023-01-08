import { createSSRApp } from 'vue'
import App from './App.vue'
import './assets/fonts/font.css'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
