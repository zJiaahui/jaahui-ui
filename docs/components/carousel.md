# Carousel 走马灯
## 基本用法

- 预览

<ClientOnly>
<carousel-demo></carousel-demo>
</ClientOnly>

- 示例代码

```html
<j-carousel :height="300" :time="4">
      <j-carousel-item v-for="item in 4" :key="item">
        {{ item }}
      </j-carousel-item>
</j-carousel>
```