<template>
  <div class="box">
    <div>
      <j-input placeholder="输入提示"></j-input>
    </div>
    <div>
      <j-input placeholder="禁用输入框" disabled></j-input>
    </div>
    <div>
      <j-input placeholder="设置了颜色主题" colortheme="primary"></j-input>
    </div>
    <div>
      <j-input placeholder="输入提示" colortheme="success"></j-input>
    </div>
    <div>
      <j-input value="默认文本" colortheme="warning"></j-input>
    </div>
    <div>
      <j-input value="小" error="用户名不足两个汉字" colortheme="danger">
      </j-input>
    </div>
  </div>
</template>

<script>
import JInput from "../../../src/components/Input/JInput.vue";
export default {
  name: "input-demo",
  data() {
    return { msg: "" };
  },
  components: {
    JInput,
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
  & > div {
    margin: 10px 0 !important;
  }
}
</style>
