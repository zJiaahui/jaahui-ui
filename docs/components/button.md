# Button 按钮

提供单个按钮和组合形式的按钮，按钮可以，设置圆角、添加图标、添加loading状态、禁用状态。

## 基本使用

- 预览

<button-demos></button-demos>

- 示例代码

```html
<j-button>普通按钮</j-button>
<j-button type="primary"> 主要按钮</j-button>
<j-button type="success"> 成功按钮</j-button>
<j-button type="danger"> 危险按钮</j-button>
```

## 圆角按钮

- 预览

<button-demos1></button-demos1>

- 示例代码

```html
<j-button round> 普通按钮</j-button>
<j-button type="primary" round> 主要按钮</j-button>
<j-button type="success" round>成功按钮</j-button>
<j-button type="danger" round> 危险按钮</j-button>

```
## 禁用按钮

- 预览

<button-demos2></button-demos2>

- 示例代码

```html
<j-button round disabled> 普通按钮</j-button>
<j-button type="primary" round disabled> 主要按钮</j-button>
<j-button type="success" round disabled>成功按钮</j-button>
<j-button type="danger" round disabled> 危险按钮</j-button>
```


## 图标按钮

- 预览
  
<button-icon-demos></button-icon-demos>

- 示例代码

```html
<j-button disabled icon="set"> 设置</j-button>
<j-button type="primary" icon="fabulous"> </j-button>
<j-button type="success" icon="success"> </j-button>
<j-button type="danger" icon="del"> </j-button>
```
## 事件和Loading

- 预览
  
<button-loading-demo></button-loading-demo>

- 示例代码

```html
<j-button icon="fabulous" loading>loading</j-button>
<j-button icon="del" :loading="isLoading" @click="isLoading = !isLoading">
点击
</j-button>
```
## 按钮组

- 预览
  
<button-group-demo></button-group-demo>

- 示例代码

```html
<j-button-group>
      <j-button> 上一页</j-button>
      <j-button> 更多</j-button>
      <j-button> 下一页</j-button>
</j-button-group>
```