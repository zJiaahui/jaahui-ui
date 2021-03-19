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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  transition: all 0.4s;
  &.active,
  &.in,
  &.out {
    display: block;
  }
  &.left,
  &.out {
    transform: translateX(-100%);
  }
  &.right,
  &.in {
    transform: translateX(100%);
  }

  &.in.left,
  &.out.right {
    transform: translateX(0);
  }
}
</style>