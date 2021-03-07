<template>
  <div class="jh-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JHButtonGroup",
};
</script>

<style lang="scss">
.jh-button-group {
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  > .jh-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
