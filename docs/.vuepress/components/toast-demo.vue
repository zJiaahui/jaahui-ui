<template>
  <div class="box">
    <j-button @click="infoToast">点我显示Toast</j-button>
    <j-button @click="successToast">显示成功Toast</j-button>
    <j-button @click="errorToast">显示失败Toast</j-button>
  </div>
</template>

<script>
import Vue from "vue";
import JToast from "../../../src/components/Toast/Toast.js";
Vue.use(JToast);
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "toast-demo",
  components: {
    JButton,
  },
  methods: {
    infoToast() {
      this.$Toast({ type: "info", delay: 5, msg: "提示信息" });
    },
    errorToast() {
      this.$Toast({ type: "error", delay: 5, msg: "错误" });
    },
    successToast() {
      this.$Toast({ type: "success", delay: 5, msg: "成功" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  padding: 20px;
}
</style>