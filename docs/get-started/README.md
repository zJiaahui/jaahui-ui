# 快速上手

::: danger 注意：
该项目为自我学习提升项目，目前还在持续更新中，请不要使用在生产环境中，仅用于交流学习！
:::

## 下载安装

```sh
npm install jiaahui-ui
#or
yarn add jiaahui-ui
```

## 开始使用

### 引入 jiaahui-ui 的Button组件
需要注意的是，样式文件需要单独引入。
```js
import Vue from "vue";
import { Button } from "jiaahui-ui";
import "jiaahui-ui/lib/style/index.css";

new Vue({
  el: "#app",
  components: {
    "j-button": Button,
  },
});
```

### 完整组件列表和引入方式

```js
import { 
  Button, 
  ButtonGroup, 
  Icon, 
  Switch, 
  Input, 
  Dialog, 
  Toast, 
  Pager, 
  Carousel, 
  CarouselItem 
  } from "jiaahui-ui";
import "jiaahui-ui/lib/style/index.css";

Vue.component("j-button", Button)
Vue.component("j-icon", Icon)
Vue.component("j-button-group", ButtonGroup)
Vue.component("j-switch", Switch)
Vue.component("j-input", Input)
Vue.component("j-dialog", Dialog)
Vue.component("j-pager", Pager)
Vue.component("j-carousel", Carousel)
Vue.component("j-carousel-item", CarouselItem)
Vue.use(Toast)
```
