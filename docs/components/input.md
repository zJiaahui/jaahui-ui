# Input 输入框

## 主题输入框

预览

<input-demo></input-demo>

示例代码

```html
<s-input placeholder="输入提示"></s-input>
<s-input placeholder="输入提示" disabled></s-input>
<s-input placeholder="输入提示" colortheme="primary"></s-input>
<s-input placeholder="输入提示" colortheme="success"></s-input>
<s-input value="默认文本" colortheme="warning"></s-input>
<s-input value="小1" error="用户名不足两个汉字" colortheme="danger"></s-input>
```

## 支持 v-model

预览

<input-demo1></input-demo1>

示例代码

```html
<s-input placeholder="输入提示" colortheme="primary" v-model="msg"></s-input>
<p>vlaue:{{msg}}</p>
```
