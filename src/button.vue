<template>
  <button class="jh-button" :class="{ [`icon-${iconPosition}`]: true }">
    <jh-icon v-if="icon" :name="icon"></jh-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss">
.jh-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--background-color);
  border-color: var(--border-color-hover);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--border-active-background-color);
  }

  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .jh-icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .jh-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
}
</style>