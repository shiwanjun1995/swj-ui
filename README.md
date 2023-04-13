# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.<br>
(此模板将帮助您开始开发Vite中的Vue3,它使用Vue3`<script setup>`单文件组件,点击此处[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 去了解更多)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

![IMG_5885](https://user-images.githubusercontent.com/12172868/145699258-517293e0-c5e1-474c-8ba6-7695b07cfac3.jpg)


说到 Vue 的组件库，大家肯定早已耳熟能详，随随便便就能列举出一大堆。那为什么还需要自己去搭建呢？结合自身的经验，在业务中往往需要高度定制化的组件，无论是 UI 和交互，可能都会跟市面上现有的组件库有着较大的出入。这个时候如果是基于现有的组件库进行修改的话，其理解成本和修改成本也不小，甚至比自己搭建一套还要高。因此搭建一套自己的组件库还是一个相当常见的需求。

对于一个组件库来说，除了”组件“本身以外，另个一个非常重要的东西就是文档展示。参考市面上优秀的开源组件库，无一不是既有高质量的组件，更有一套非常规范且详细的文档。文档除了对组件的功能进行说明以外，同时也具备了组件交互预览的能力，让用户的学习成本尽可能地降低。

# packages 用来进行UI组件库的编写

## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<s-row>
  <s-button>默认按钮</s-button>
  <s-button type="primary">主要按钮</s-button>
  <s-button type="success">成功按钮</s-button>
  <s-button type="info">信息按钮</s-button>
  <s-button type="warning">警告按钮</s-button>
  <s-button type="danger">危险按钮</s-button>
</s-row>

<s-row>
  <s-button plain>朴素按钮</s-button>
  <s-button type="primary" plain>主要按钮</s-button>
  <s-button type="success" plain>成功按钮</s-button>
  <s-button type="info" plain>信息按钮</s-button>
  <s-button type="warning" plain>警告按钮</s-button>
  <s-button type="danger" plain>危险按钮</s-button>
</s-row>

<s-row>
  <s-button round>圆角按钮</s-button>
  <s-button type="primary" round>主要按钮</s-button>
  <s-button type="success" round>成功按钮</s-button>
  <s-button type="info" round>信息按钮</s-button>
  <s-button type="warning" round>警告按钮</s-button>
  <s-button type="danger" round>危险按钮</s-button>
</s-row>

<s-row>
  <s-button icon="s-icon-search" circle></s-button>
  <s-button type="primary" icon="s-icon-edit" circle></s-button>
  <s-button type="success" icon="s-icon-check" circle></s-button>
  <s-button type="info" icon="s-icon-message" circle></s-button>
  <s-button type="warning" icon="s-icon-star-off" circle></s-button>
  <s-button type="danger" icon="s-icon-dsete" circle></s-button>
</s-row>
```


### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<s-row>
  <s-button disabled>默认按钮</s-button>
  <s-button type="primary" disabled>主要按钮</s-button>
  <s-button type="success" disabled>成功按钮</s-button>
  <s-button type="info" disabled>信息按钮</s-button>
  <s-button type="warning" disabled>警告按钮</s-button>
  <s-button type="danger" disabled>危险按钮</s-button>
</s-row>

<s-row>
  <s-button plain disabled>朴素按钮</s-button>
  <s-button type="primary" plain disabled>主要按钮</s-button>
  <s-button type="success" plain disabled>成功按钮</s-button>
  <s-button type="info" plain disabled>信息按钮</s-button>
  <s-button type="warning" plain disabled>警告按钮</s-button>
  <s-button type="danger" plain disabled>危险按钮</s-button>
</s-row>
```


### 文字按钮

没有边框和背景色的按钮。


```html
<s-button type="text">文字按钮</s-button>
<s-button type="text" disabled>文字按钮</s-button>
```


### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置`icon`属性即可，icon 的列表可以参考 sement 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<s-button type="primary" icon="s-icon-edit"></s-button>
<s-button type="primary" icon="s-icon-share"></s-button>
<s-button type="primary" icon="s-icon-dsete"></s-button>
<s-button type="primary" icon="s-icon-search">搜索</s-button>
<s-button type="primary">上传<i class="s-icon-upload s-icon--right"></i></s-button>
```


### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<s-button type="primary" :loading="true">加载中</s-button>
```


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<s-row>
  <s-button>默认按钮</s-button>
  <s-button size="medium">中等按钮</s-button>
  <s-button size="small">小型按钮</s-button>
  <s-button size="mini">超小按钮</s-button>
</s-row>
<s-row>
  <s-button round>默认按钮</s-button>
  <s-button size="medium" round>中等按钮</s-button>
  <s-button size="small" round>小型按钮</s-button>
  <s-button size="mini" round>超小按钮</s-button>
</s-row>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type  | 原生 type 属性 | string   |  button / submit / reset  |  button  |


#### 坑
[vite] Internal server error: Missing "./dist/style.css"<br>
1.https://github.com/fatihsolhan/v-onboarding/issues/2<br>
2.https://github.com/vitejs/vite/issues/6480 （wow, it was caused by vite's strict adherence to the exports field in the package.json, which css file does not exported.）