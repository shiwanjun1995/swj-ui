// 库构建，用于构建位于 /packages 目录的组件库
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 在默认的 Vite 配置中，执行 yarn build 所构建出来的产物是“可交互式文档网站”，并非“组件库”本身。
export default defineConfig({
  plugins: [vue()],
  build: {
    // 指定输出路径（相对于 项目根目录)，默认dist
    outDir: 'lib',
    lib: {
      // 指定组件编译入口文件，这里的resolve函数返回的是一个绝对路径
      // 某个文件的绝对路径：当前文件的绝对路径+该文件的相对路径
      entry: resolve(__dirname, 'packages/index.js'),
      name: 'SwjUi',
      fileName: (format) => `swj-ui.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

// paakage.json 文件说明
/**
 * 1. exports：https://nodejs.org/api/packages.html#packages_conditional_exports
 * For example, a package that wants to provide different ES module exports for require() and import can be written
 *
 * 2. Conditional exports can also be extended to exports subpaths, for example
 * ./lib/style.css：css文件需要暴露否则样式引入会报错，而且必须使用相对路径
 */
