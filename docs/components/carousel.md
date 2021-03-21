# Carousel 走马灯
## 基本用法

- 预览

<carousel-demo></carousel-demo>

- 示例代码

```html
<j-carousel :height="300" :time="4">
      <j-carousel-item v-for="item in 4" :key="item">
        {{ item }}
      </j-carousel-item>
</j-carousel>
```