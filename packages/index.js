import './fonts/index.scss'

const install = (app) => {
  const componentMap = import.meta.globEager('/packages/**/*.vue')
  console.log(componentMap)
  Object.keys(componentMap).forEach((path) => {
    const component = componentMap[path].default
    app.component(component.name, component)
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 install() 方法的 object，也可以是 function
export default {
  // install: (app) => {
  //   // 直接引入所有的模块
  //   const componentMap = import.meta.globEager('/packages/**/*.vue')
  //   Object.keys(componentMap).forEach((path) => {
  //     const component = componentMap[path].default
  //     app.component(component.name, component)
  //   })
  // },

  install,
}
