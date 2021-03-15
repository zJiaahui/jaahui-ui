<template>
  <div class="j-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" socped>
.j-button-group {
  font-size: 0;
  & .j-button {
    border-radius: 0;
  }
  & > .j-button:first-child {
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > .j-button:last-child {
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
