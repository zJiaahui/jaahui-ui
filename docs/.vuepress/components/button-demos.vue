<template>
  <div class="box">
    <j-button>普通按钮</j-button>
    <j-button type="primary"> 主要按钮</j-button>
    <j-button type="success"> 成功按钮</j-button>
    <j-button type="danger"> 危险按钮</j-button>
  </div>
</template>

<script>
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-demos",
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
