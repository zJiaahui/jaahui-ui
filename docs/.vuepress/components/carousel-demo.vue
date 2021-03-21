<template>
  <div class="box">
    <j-carousel :height="300" :time="4">
      <j-carousel-item v-for="item in 4" :key="item">
        {{ item }}
      </j-carousel-item>
    </j-carousel>
  </div>
</template>

<script>
import JCarousel from "../../../src/components/Carousel/JCarousel.vue";
import JCarouselItem from "../../../src/components/Carousel/JCarouselItem.vue";
export default {
  name: "carousel-demo",
  components: {
    JCarousel,
    JCarouselItem,
  },
};
</script>

<style lang="scss" scoped>
.box {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  padding: 20px;
}
</style>

