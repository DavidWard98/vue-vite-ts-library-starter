import type { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  install: (app: App) => {
    app.component('LButton', HelloWorld)
  }
}