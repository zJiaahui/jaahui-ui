<template>
  <div class="box">
    <div>
      <j-button disabled> 普通按钮禁用</j-button>
      <j-button type="primary" disabled>主要按钮禁用</j-button>
      <j-button type="success" disabled>成功按钮禁用</j-button>
      <j-button type="danger" disabled> 危险按钮禁用</j-button>
    </div>
    <br />
    <div>
      <j-button round disabled> 普通圆角禁用</j-button>
      <j-button type="primary" round disabled> 主要圆角禁用</j-button>
      <j-button type="success" round disabled>成功圆角禁用</j-button>
      <j-button type="danger" round disabled> 危险圆角禁用</j-button>
    </div>
  </div>
</template>

<script>
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-demos2",
  components: {
    JButton,
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