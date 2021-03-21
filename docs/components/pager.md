# Pager分页器
## 基本用法
- 预览

<ClientOnly>
<pager-demo></pager-demo>
</ClientOnly>

- 示例代码

```html
<template>
  <div>
    <j-pager
      :total="100"
      :page-size="10"
      :current-page.sync="current"
      @currentchange="pangechange"
    ></j-pager>
  </div>
</template>

<script>
export default {
  data() {
    return { current: 1 };
  },
  methods: {
    pangechange(value) {},
  },
};
</script>
<style lang="scss" scoped>
</style>
```
