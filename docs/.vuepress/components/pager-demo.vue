<template>
  <div class="box">
    <j-pager
      :total="100"
      :page-size="10"
      :current-page.sync="current"
      @currentchange="pangechange"
    ></j-pager>
  </div>
</template>

<script>
import JPager from "../../../src/components/Pager/JPager.vue";
export default {
  name: "pager-demo",
  components: { JPager },
  data() {
    return { current: 1 };
  },
  methods: {
    pangechange(value) {},
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
  overflow: auto;
}
</style>
