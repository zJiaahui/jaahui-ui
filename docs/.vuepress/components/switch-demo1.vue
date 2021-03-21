<template>
  <div class="box">
    <j-switch
      name="agree"
      :ischecked.sync="ischecked"
      activecolor="#409eff"
      inactivecolor="#f56c6c"
    >
    </j-switch>
  </div>
</template>

<script>
import JSwitch from "../../../src/components/Switch/JSwitch.vue";

export default {
  name: "switch-demo1",
  data() {
    return { ischecked: true };
  },
  components: {
    JSwitch,
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