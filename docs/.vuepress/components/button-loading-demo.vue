<template>
  <div class="box">
    <j-button icon="fabulous" loading>loading</j-button>
    <j-button icon="del" :loading="isLoading" @click="isLoading = !isLoading">
      点击
    </j-button>
  </div>
</template>

<script>
import JButton from "../../../src/components/Button/JButton.vue";
export default {
  name: "button-loading-demo",
  data() {
    return { isLoading: false };
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
