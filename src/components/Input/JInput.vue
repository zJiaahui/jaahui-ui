<template>
  <div class="wrapper">
    <input
      :class="[
        'j-input',
        colortheme,
        { round: round, plain: plain, disabled: disabled },
      ]"
      :disabled="disabled"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <j-icon :class="{ error: error }" icon="warning"></j-icon>
      <span :class="{ error: error }">{{ error }}</span>
    </template>
  </div>
</template>
<script>
export default {
  name: "JInput",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    error: {
      type: String,
    },
    colortheme: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang='scss' scoped>
$primary: #409eff;
$success: #67c23a;
$info: #909399;
$warning: #e6a23c;
$danger: #f56c6c;
@mixin primary {
  // background-color: $primary;
  border-color: $primary;
  color: rgb(17, 17, 17);
}
@mixin success {
  color: rgb(17, 17, 17);
  // background-color: $success;
  border-color: $success;
}
@mixin info {
  color: rgb(17, 17, 17);
  // background-color: $info;
  border-color: $info;
}
@mixin warning {
  color: rgb(17, 17, 17);
  // background-color: $warning;
  border-color: $warning;
}
@mixin danger {
  color: rgb(17, 17, 17);
  // background-color: $danger;
  border-color: $danger;
}
.j-input {
  height: 32px;
  width: 140px;
  font-size: 14px;
  padding-left: 0.5em;
  outline: none;
  display: inline-flex;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 14px;
  border-radius: 4px;

  &:focus,
  &:hover {
    color: $primary;
    border-color: #8cc3fd;
    //background-color: #ecf5ff;
  }
}
/* PRIMARY STYLE */
.primary {
  @include primary;
  &:focus,
  &:hover {
    //background: #66b1ff;
    border-color: #1a85f7;
    color: rgb(17, 17, 17);
  }
  &.plain {
    color: $primary;
    // background: #ecf5ff;
    border-color: #459efc;
  }
  &.plain {
    &:focus,
    &:hover {
      @include primary;
    }
  }
}
.success {
  @include success;

  &:focus,
  &:hover {
    //background: #85ce61;
    border-color: #85ce61;
    color: rgb(17, 17, 17);
  }
  &.plain {
    color: $success;
    // background: #f0f9eb;
    border-color: #c2e7b0;
    .svgicon {
      fill: $success;
    }
    &:focus,
    &:hover {
      @include success;
    }
  }
}

.info {
  @include info;

  &:focus,
  &:hover {
    //background: #a6a9ad;
    border-color: #a6a9ad;
    color: rgb(17, 17, 17);
  }
  &.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;

    &:focus,
    &:hover {
      @include info;
    }
  }
}

/*  WARNING STYLE*/
.warning {
  @include warning;

  &:focus,
  &:hover {
    //background: #ebb563;
    border-color: #ebb563;
    color: rgb(17, 17, 17);
  }

  /*  PLAIN WARNING STYLE*/
  &.plain {
    color: #e6a23c;
    // background: #fdf6ec;
    border-color: #f5dab1;
    &:focus,
    &:hover {
      @include warning;
    }
  }
}

/*  DANGER STYLE*/
.danger {
  @include danger;

  &:focus,
  &:hover {
    // background: #f78989;
    border-color: #f78989;
    color: rgb(17, 17, 17);
  }

  /*  PLAIN DANGER STYLE*/
  &.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    .svgicon {
      fill: #f56c6c;
    }
    &:focus,
    &:hover {
      @include danger;
    }
  }
}

/*  PLAIN STYLE*/
.plain:focus,
.plain:hover {
  // background: rgb(17, 17, 17);
  border-color: #409eff;
  color: #409eff;
}

/*  ROUND */
.round {
  border-radius: 20px;
  padding: 0 1em;
}

/*  DISABLE BUTTON*/
.s-input.disabled {
  &,
  &:focus,
  &:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}

// .wrapper input:hover {
//   border-color: #666;
// }
// .wrapper input:active {
//   background-color: #eee;
// }
// .wrapper input:focus {
//   box-shadow: 0 1px 3px inset;
// }
.error {
  fill: red;
  color: red;
  font-size: 14px;
  vertical-align: middle;
  margin-left: 0.5em;
}
</style>
