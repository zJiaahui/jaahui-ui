<template>
  <label class="j-switch" :class="{ checked: checked }">
    <span class="j-switch-core" :style="styles"></span>
    <input
      type="checkbox"
      class="v-switch-input"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
  </label>
</template>

<script>
export default {
  data() {
    return { checked: false };
  },
  mounted() {
    this.$nextTick(() => {
      this.checked = this.value;
    });
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.checked);
      this.checked = e.target.checked;
      console.log(e.target.checked);
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "#409EFF",
    },
    inactiveColor: {
      type: String,
      default: "#dcdfe6",
    },
  },
  computed: {
    isChecked() {
      return this.value === this.checked;
    },
    styles() {
      const color = this.checked ? this.activeColor : this.inactiveColor;
      return {
        borderColor: color,
        backgroundColor: color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.j-switch {
  position: relative;
  display: inline-block;
  & > .j-switch-core {
    display: inline-block;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
  }
  & > .j-switch-core:after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: #fff;
    margin: 2px 2px;
  }
  & .checked > .j-switch-core:after {
    animation: identifier 0.1s linear 1 forwards;
  }
}
@keyframes identifier {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
}
</style>