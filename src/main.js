import { createApp } from 'vue'
import App from './App.vue'

// 一次性导入我们的UI组件库
import SUI from '../packages'

createApp(App).use(SUI).mount('#app')
