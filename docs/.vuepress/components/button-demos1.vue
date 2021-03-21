<template>
  <div class="box">
    <j-button round> 普通按钮</j-button>
    <j-button type="primary" round> 主要按钮</j-button>
    <j-button type="success" round>成功按钮</j-button>
    <j-button type="danger" round> 危险按钮</j-button>
  </div>
</template>

<script>
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-demos1",
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