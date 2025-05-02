import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'

const app = createApp(App)

// global registration
app.component('NavBar', NavBar)
app.mount('#app')

