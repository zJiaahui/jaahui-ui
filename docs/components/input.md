# Input 输入框

## 主题输入框

- 预览

<input-demo></input-demo>

- 示例代码

```html
<j-input placeholder="输入提示"></j-input>
<j-input placeholder="禁用输入框" disabled></j-input>
<j-input placeholder="设置了颜色主题" colortheme="primary"></j-input>
<j-input placeholder="输入提示" colortheme="success"></j-input>
<j-input value="默认文本" colortheme="warning"></j-input>
<j-input value="小" error="用户名不足两个汉字" colortheme="danger">
</j-input>
```

## 支持 v-model

- 预览

<input-demo1></input-demo1>

- 示例代码

```html
<j-input placeholder="输入提示" colortheme="primary" v-model="msg"></j-input>
<p>vlaue:{{msg}}</p>
```
