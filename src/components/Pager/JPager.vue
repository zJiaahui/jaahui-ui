<template>
  <div>
    <ul class="j-pager">
      <li
        class="prev"
        :class="{ disabled: currentPage == 1 }"
        @click="handelPrev"
      >
        <j-icon icon="left-arrow"></j-icon>
      </li>
      <li
        :class="{ acitve: currentPage == item, ellipsis: isNaN(item) }"
        v-for="(item, index) in pagerList"
        :key="index"
        @click="changPager(item)"
      >
        {{ item }}
      </li>
      <li
        class="next"
        @click="handelNext"
        :class="{ disabled: currentPage == getPagerTotal }"
      >
        <j-icon icon="right-arrow"></j-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import JIcon from "../icon/JIcon.vue";
export default {
  name: "JPager",
  components: {
    JIcon,
  },
  data() {
    return { pagerCount: 9, pagerList: [] };
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getPagerTotal() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    changPager(item) {
      if (isNaN(item)) {
        return false;
      } else {
        this.$emit("update:currentPage", item);
        // this.$emit("currentChange", item);
        this.$nextTick(() => {
          this.renderPagerItem();
        });
      }
    },
    handelNext() {
      let current = this.currentPage;
      if (current < this.getPagerTotal) {
        this.$emit("update:currentPage", ++current);
        // this.$emit("currentChange", item);
        this.$nextTick(() => {
          this.renderPagerItem();
        });
      }
    },
    handelPrev() {
      let current = this.currentPage;
      if (current > 1) {
        this.$emit("update:currentPage", --current);

        this.$nextTick(() => {
          this.renderPagerItem();
        });
      }
    },
    renderPagerItem() {
      this.$emit("currentchange", this.currentPage);
      let pagerTotal = this.getPagerTotal;
      if (pagerTotal > this.pagerCount) {
        //总页数是否大于要显示页数
        //更具选中的页码初始化需要显示的实际页码
        const pageNumbers = [
          ...new Set(
            [
              1,
              this.currentPage - 3,
              this.currentPage - 2,
              this.currentPage - 1,
              this.currentPage,
              this.currentPage + 1,
              this.currentPage + 2,
              this.currentPage + 3,
              pagerTotal,
            ]
              .filter((item) => {
                return item > 0 && item <= pagerTotal;
              })
              .sort((a, b) => a - b)
          ),
        ];

        this.pagerList = pageNumbers.reduce((items, current, index, array) => {
          items.push(current);

          if (array[index + 1] && array[index + 1] - array[index] > 1) {
            //判断间隔大于1的时候就加一个...
            while (array[index] != 1 && this.pagerCount - items.length > 2) {
              items.push(++current);
            }
            items.push("···");
          }

          return items;
        }, []);
      }
    },
  },
  mounted() {
    this.renderPagerItem();
  },
};
</script>

<style lang="scss" scoped>
.j-pager {
  list-style-type: none;
  display: flex;
  & .disabled {
    color: #ddd;
    cursor: not-allowed;
    &:hover {
      color: #ddd;
      border: 1px solid #ddd;
    }
  }
  & .ellipsis {
    color: #666;
    border: none;
    &:hover {
      color: #666;
    }
  }
  & li {
    display: inline-block;
    width: 32px;
    min-width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 4px;
    color: #666;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: #409eff;
      border-color: #409eff;
    }
  }
  & .acitve {
    color: #409eff;
    border-color: #409eff;
  }
}
</style>