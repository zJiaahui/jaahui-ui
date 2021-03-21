<template>
  <div class="box">
    <j-button disabled icon="set"> 设置</j-button>
    <j-button type="primary" icon="fabulous"> </j-button>
    <j-button type="success" icon="success"> </j-button>
    <j-button type="danger" icon="del"> </j-button>
  </div>
</template>

<script>
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-icon-demos",
  data() {
    return { loading: false, loading2: false };
  },
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
