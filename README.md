 
 <p align="center">
  <a href="">
    <a href="" style="font-size:100px" >
      🛴
    </a>
  </a>
</p>
<h1 align="center">jiaahui-ui</h1>

<h3 align="center">A Vue.js 2.X UI Toolkit for Web</h3>
<div align="center">

![npm](https://img.shields.io/npm/v/jiaahui-ui?style=flat-square)
![npm](https://img.shields.io/npm/dt/jiaahui-ui?style=flat-square)
![NPM](https://img.shields.io/npm/l/jiaahui-ui?style=flat-square)

</div>

## 介绍

这是我在学习 Vue 的过程中尝试写的一个简单 UI 框架，可能有人觉得我是在重复的造轮子，但我想这种方式可以用来提高自己，同时也希望对你有所帮助

## 安装
```sh
npm i jiaahui-ui
```
## 快速开始
### 引入 jiaahui-ui 

需要注意的是，样式文件需要单独引入。

```js
import Vue from "vue";

import { Button } from "jiaahui-ui";
import "jiaahui-ui/lib/style/index.css";

Vue.component("j-button", Button)

new Vue({
  el: "#app",
});
```
## 项目代办

- [x] Button
- [x] Input
- [x] Switch
- [x] Icon
- [x] Pager
- [x] Dialog
- [x] Toast
- [x] Carousel
- [ ] Preview demo and docs online
- [ ] Component unit testing
...
## 参考
本项目参考了其他一些 UI 库，包括设计和代码。感谢这些开源社区贡献者。
- [Element](https://element.eleme.cn/#/zh-CN)
- [Ant Design](https://ant.design/)
- [iView](https://www.iviewui.com/)
- [wheels](https://github.com/FrankFang/wheels)

