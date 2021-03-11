<template>
  <div class="tabs">
    <div class="line">
      <span
        class="tab-nav"
        v-for="(item, index) in tabsTitle"
        :key="index"
        @click="changeActiveTab(index)"
        >{{ item.label }}</span
      >
      <span class="tab-bar" ref="tabBar"></span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHTabs",
  data() {
    return { tabsTitle: [], activeTab: null };
  },
  props: {
    value: {
      type: String,
    },
  },
  watch: {
    activeTab() {
      this.setActiveTab();
    },
  },
  mounted() {
    this.getTabsTitle();
    this.activeTab = this.value || this.tabsTitle[0].name;
  },
  methods: {
    getTabsTitle() {
      let tempTabsTitle = this.$children.filter(
        (item) => item.$options.name === "JHTabsPane"
      );
      this.tabsTitle = tempTabsTitle.map((item) => {
        return {
          label: item.label,
          name: item.name,
        };
      });
    },
    setActiveTab() {
      this.$nextTick(() => {
        let index = this.tabsTitle
          .map((item) => item.name)
          .indexOf(this.activeTab);
        let tabNavs = document.querySelectorAll(".tab-nav");
        if (index !== -1) {
          const { offsetWidth, offsetLeft } = tabNavs[index];
          console.log(offsetWidth, offsetLeft);
          this.$refs.tabBar.style.width = `${offsetWidth}px`;
          this.$refs.tabBar.style.transform = `translateX(${offsetLeft}px)`;
        }
        // console.log(tabNavs);
      });
    },
    changeActiveTab(index) {
      let tabNavs = document.querySelectorAll(".tab-nav");
      if (index !== -1) {
        const { offsetWidth, offsetLeft } = tabNavs[index];
        console.log(offsetWidth, offsetLeft);
        this.$refs.tabBar.style.width = `${offsetWidth}px`;
        this.$refs.tabBar.style.transform = `translateX(${offsetLeft}px)`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  > .line {
    min-height: 26px;
    width: 200px;
    border-bottom: 2px solid #aaa;
    position: relative;
    > .tab-nav {
      padding: 0 8px;
      display: inline-block;
    }
    > .tab-bar {
      display: block;
      height: 4px;
      background-color: #000;
    }
  }
}
</style>