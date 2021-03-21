<template>
  <div class="box">
    <j-button type="primary" @click="visible = true">点我显示对话框</j-button>
    <j-dialog :visible.sync="visible">
      <template slot="header"> 自定义标题 </template>
      <span>自定义显示内容</span>
      <template slot="footer">
        <j-button @click="visible = false">取消</j-button>
        <j-button type="primary" @click="visible = false">确定</j-button>
      </template>
    </j-dialog>
  </div>
</template>

<script>
import JDialog from "../../../src/components/Dialog/JDialog.vue";
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "dialog-demo",
  data() {
    return { visible: false, visible2: false };
  },
  components: {
    JDialog,
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
  & > .j-input {
    margin: 10px 0 !important;
  }
}
</style>