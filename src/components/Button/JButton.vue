<template>
  <button
    class="j-button"
    :class="{
      [`j-button--${type}`]: true,
      'is-round': round,
      'is-disabled': disabled,
    }"
    @click="$emit('click')"
  >
    <j-icon v-if="icon && !loading" :icon="icon"></j-icon>
    <j-icon class="j-loading" v-else-if="loading" icon="loading"></j-icon>
    <slot></slot>
  </button>
</template>

<script>
import JIcon from "../icon/JIcon.vue";
export default {
  components: {
    JIcon,
  },
  name: "JButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  lang="scss" scoped>
.j-button {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  margin: 0;
  border: 1px solid #dcdfe6;
  color: #606266;
  background-color: #fff;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
  &--default {
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &.is-disabled {
      cursor: not-allowed;
      background-color: #a0cfff;
      border-color: #a0cfff;
      &:hover,
      &:active {
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
    }
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      background-color: #409eff;
      border-color: #409eff;
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &.is-disabled {
      cursor: not-allowed;
      background-color: #b3e19d;
      border-color: #b3e19d;
      &:hover,
      &:active {
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
    }
    &:hover {
      background-color: #8acc69;
      border-color: #8acc69;
    }
    &:active {
      background-color: #67c23a;
      border-color: #67c23a;
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.is-disabled {
      cursor: not-allowed;
      background-color: #fab6b6;
      border-color: #fab6b6;
      &:hover,
      &:active {
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
    &:hover {
      background-color: #f68484;
      border-color: #f68484;
    }
    &:active {
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  & > .j-loading {
    animation: loading 1s linear infinite;
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
