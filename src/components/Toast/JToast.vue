<template>
  <div class="j-toast" :class="{ [`j-toast-${type}`]: true }">
    <j-icon :icon="type"></j-icon>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "JToast",
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.delay * 1000);
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
  },
  props: {
    msg: {
      type: String,
    },
    delay: {
      type: Number,
      default: 3,
    },
    type: {
      type: String,
      default: "info",
      validator: function (value) {
        if (["info", "error", "success"].indexOf(value) >= 0) {
          return true;
        } else {
          console.warn(
            'type应该是"info", "error", "success"其中的一个你输入的是' + value
          );
          return false;
        }
      },
    },
  },
};
</script>

<style lang="scss" socped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.j-toast {
  animation: fade-in 0.3s linear;
  height: 40px;
  min-width: 200px;
  line-height: 40px;
  border: 1px solid rgb(165, 161, 161);
  color: rgb(136, 127, 127);
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  padding: 0 0.5em;
  border-radius: 4px;
  &.j-toast-success {
    color: rgb(53, 204, 15);
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }
  &.j-toast-error {
    color: rgb(231, 71, 71);
    background-color: #fef0f0;
    border-color: #fde2e2;
  }
}
</style>
