<template>
  <div class="j-carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JCarouselItem",
};
</script>

<style lang="scss" scoped>
.j-carousel-item {
  display: none;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.4s;

  &.active,
  &.in {
    display: block;
  }
  &.active.left {
    transform: translateX(-100%);
  }
  &.active.right {
    transform: translateX(100%);
  }
  //   &.in {
  //     transform: translateX(0);
  //   }
}
</style>