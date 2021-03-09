<template>
  <svg class="jh-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "JHIcon",
  props: { name: {} },
};
</script>

<style lang="scss">
.jh-icon {
  width: 1em;
  height: 1em;
}
</style>