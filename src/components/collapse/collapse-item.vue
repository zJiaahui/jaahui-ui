<template>
  <div class="collapse-item">
    <div class="item-title" @click="open = !open">{{ title }}</div>
    <div class="item-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHCollapseItem",
  data() {
    return { open: false };
  },
  props: {
    title: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.collapse-item {
  font-size: 16px;
  > .item-title {
    border: 1px solid #ddd;
    margin-top: -1px;
    min-height: 32px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &:first-child {
    > .item-title {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
  }
  // &:last-child {
  //   // > .item-title {
  //   //   // border-bottom-right-radius: 4px;
  //   //   // border-bottom-left-radius: 4px;
  //   // }
  // }
  > .item-content {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    margin-top: -1px;
    padding: 8px;
  }
  &:last-child {
    > .item-content {
      border-bottom: 1px solid #ddd;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
}
</style>
