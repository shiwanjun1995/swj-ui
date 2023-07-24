import './fonts/index.scss'

// import SButton from './button/index.js'
import SButton from './button'

const install = (app) => {
  const componentMap = import.meta.globEager('/packages/**/*.vue')
  Object.keys(componentMap).forEach((path) => {
    const component = componentMap[path].default
    app.component(component.name, component)
  })
}

// 插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 install() 方法的 object，也可以是 function
export default {
  version: '0.0.17',
  install,
  // 按需引入
  SButton,
}
