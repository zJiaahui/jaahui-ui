<template>
  <div class="toast" :class="{ [`position-${position}`]: true }">
    <slot></slot>
    <template v-if="closeButton">
      <div class="line"></div>
      <span @click="onClickClose">{{ closeButton.text }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "JHToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 5,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
@keyframes slide-face {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
.toast {
  font-size: $font-size;
  min-height: 40px;
  line-height: 1.8;
  position: fixed;
  border-radius: 4px;
  display: flex;
  left: 50%;
  color: #fff;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  z-index: 100;
  .line {
    height: 100%;
    border-left: 1px solid #999;
    margin: 0 0.5em;
  }
  &.position-top {
    top: 10px;
    transform: translateX(-50%);
    animation: slide-down 1s;
  }
  &.position-bottom {
    bottom: 10px;
    transform: translateX(-50%);
    animation: slide-up 1s;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%);
    animation: slide-face 1s;
  }
}
</style>
