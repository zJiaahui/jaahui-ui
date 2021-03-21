<template>
  <div class="box">
    <j-button-group>
      <j-button> 上一页</j-button>
      <j-button> 更多</j-button>
      <j-button> 下一页</j-button>
    </j-button-group>
  </div>
</template>

<script>
import JButtonGroup from "../../../src/components/ButtonGroup/JButtonGroup.vue";
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-group-demo",
  components: {
    JButton,
    JButtonGroup,
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
