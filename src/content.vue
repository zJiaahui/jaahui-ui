<template>
  <div class="jh-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "JHContent",
};
</script>

<style lang="scss" scoped>
.jh-content {
  flex-grow: 1;
}
</style>

