<template>
  <div class="j-wrapper" v-if="visible" @click.self="close">
    <div class="j-dialog">
      <div class="j-d-header">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
        <button @click="close">
          <j-icon icon="error"></j-icon>
        </button>
      </div>
      <div class="j-d-body">
        <slot>
          <span>这是一段内容</span>
        </slot>
      </div>
      <div class="j-d-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import JIcon from "../icon/JIcon.vue";

export default {
  name: "JDialog",
  components: {
    JIcon,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提示",
    },
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.j-wrapper {
  width: 100%;
  height: 100vh;
  background-color: rgba(134, 130, 130, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  .j-dialog {
    background-color: white;
    box-sizing: border-box;
    min-width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .j-d-header {
      height: 50px;
      line-height: 50px;
      position: relative;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        top: 15px;
        right: 0px;
        padding: 0;
        width: 16px;
        height: 16px;
      }
    }
    .j-d-footer {
      height: 50px;
      line-height: 50px;
      text-align: end;
    }

    .j-d-body {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
