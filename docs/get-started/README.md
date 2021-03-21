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

### 引入 jiaahui-ui

```js
import { Button } from "jiaahui-ui";
import Vue from "vue";

new Vue({
  el: "#app",
  components: {
    "j-button": Button,
  },
});
```
