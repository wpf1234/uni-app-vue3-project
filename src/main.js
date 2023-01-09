import { createSSRApp } from 'vue'
import App from './App.vue'
import './assets/fonts/font.css'
import 'lib-flexible'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
