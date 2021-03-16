<template>
  <div @click="handleClick" :class="{ 'is-checked': ischecked }">
    <span class="s-switch__core" ref="core">
      <span class="s-switch__button"></span>
    </span>
    <input :name="name" type="checkbox" ref="checkbox" />
  </div>
</template>

<script>
export default {
  name: "SSwitch",
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },
    activecolor: {
      type: String,
    },
    inactivecolor: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.$emit("update:ischecked", !this.ischecked);
    },
    setColor() {
      if (this.activecolor || this.inactivecolor) {
        this.$refs.core.style.backgroundColor = this.ischecked
          ? this.activecolor
          : this.inactivecolor;
      }
    },
  },
  watch: {
    ischecked() {
      this.setColor();
      this.$refs.checkbox.checked = this.ischecked;
    },
  },
  mounted() {
    this.setColor();
    this.$refs.checkbox.checked = this.ischecked;
  },
};
</script>

<style lang="scss" socped>
$success: #67c23a;
.s-switch__core {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;

  .s-switch__button {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 100%;
    transition: all 0.3s;
  }
}
.is-checked {
  .s-switch__core {
    background-color: $success;
  }
  .s-switch__core > .s-switch__button {
    // background-color: red;
    transform: translateX(20px);
  }
}
input {
  width: 0;
  height: 0;
}
</style>