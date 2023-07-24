import SButton from './src/button.vue'

SButton.install = function (app) {
  app.component(SButton.name, SButton)
}

// 导出该组件
export default SButton
