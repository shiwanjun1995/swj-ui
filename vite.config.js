// 库构建，用于构建位于 /packages 目录的组件库
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 在默认的 Vite 配置中，执行 yarn build 所构建出来的产物是“可交互式文档网站”，并非“组件库”本身。
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, '/packages/index.js'),
      name: 'SUI',
      fileName: (format) => `swj-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
