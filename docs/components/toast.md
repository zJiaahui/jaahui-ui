# Toast 消息提示
## 基本使用
- 预览

<toast-demo></toast-demo>

- 示例代码

```html
<template>
  <div class="box">
    <j-button @click="infoToast">点我显示Toast</j-button>
    <j-button @click="successToast">点我显示成功Toast</j-button>
    <j-button @click="errorToast">点我显示失败Toast</j-button>
  </div>
</template>

<script>

export default {
  methods: {
    infoToast() {
      this.$Toast({ type: "info", delay: 5, msg: "提示信息" });
    },
    errorToast() {
      this.$Toast({ type: "error", delay: 5, msg: "错误" });
    },
    successToast() {
      this.$Toast({ type: "success", delay: 5, msg: "成功" });
    },
  },
};
</script>
```

