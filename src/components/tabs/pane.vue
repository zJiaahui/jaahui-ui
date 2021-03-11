<template>
  <div class="tab-pane" :class="{ active: active }"><slot></slot></div>
</template>

<script>
export default {
  name: "JHTabsPane",
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.tab-pane {
  display: none;
  &.active {
    display: block;
  }
}
</style>