<template>
  <div class="jh-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JHLayout",
  data() {
    return { layoutClass: { hasSider: false } };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "JHSider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.jh-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &.hasSider {
    flex-direction: row;
  }
}
</style>
