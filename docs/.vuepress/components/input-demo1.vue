<template>
  <div class="box">
    <j-input placeholder="输入提示" colortheme="primary" v-model="msg">
    </j-input>
    <p>vlaue:{{ msg }}</p>
  </div>
</template>

<script>
import JInput from "../../../src/components/Input/JInput.vue";
export default {
  name: "input-demo1",
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
  & > .j-input {
    margin: 10px 0 !important;
  }
}
</style>