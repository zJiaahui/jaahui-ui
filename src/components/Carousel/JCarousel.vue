<template>
  <div
    class="j-carousel"
    @mouseleave="handelMouseleave"
    @mouseenter="handelMouseenter"
  >
    <div class="j-carousel-list" :style="{ height: `${height}px` }">
      <slot></slot>
    </div>
    <ul class="j-line-list">
      <li
        v-for="(item, index) in carouselList"
        :key="index"
        :class="{ 'line-acitve': index == currentIndex }"
        @click="clickLinechangCarousel(index)"
      ></li>
    </ul>
    <button class="j-carousel-arrow arrow-prev" @click="handleArrowPrev">
      <j-icon icon="left-arrow"></j-icon>
    </button>
    <button class="j-carousel-arrow arrow-next" @click="handleArrowNext">
      <j-icon icon="right-arrow"></j-icon>
    </button>
  </div>
</template>
<script>
import JIcon from "../icon/JIcon.vue";
const reflow = (element) => element.offsetHeight;
export default {
  name: "JCarousel",
  components:{
    JIcon
  },
  data() {
    return {
      carouselList: [],
      currentIndex: 0,
      outItem: null,
      inItem: null,
      intervalID: null,
    };
  },
  props: {
    height: {
      type: Number,
      default: 300,
    },
    time: {
      type: Number,
      default: 300,
    },
  },
  methods: {
    handleArrowNext() {
      this.moveCarousel("left", this.getNextIndex());
    },
    handleArrowPrev() {
      this.moveCarousel("right", this.getPrevIndex());
    },
    clickLinechangCarousel(index) {
      if (index < this.currentIndex) {
        this.moveCarousel("left", index);
      } else {
        this.moveCarousel("right", index);
      }
    },
    handelMouseenter() {
      if (this.intervalID) {
        clearInterval(this.intervalID);
        this.intervalID = null;
      }
    },
    handelMouseleave() {
      this.playCarousel();
    },
    getPrevIndex() {
      if (this.currentIndex > 0) {
        return this.currentIndex - 1;
      } else {
        return this.carouselList.length - 1;
      }
    },
    getNextIndex() {
      if (this.currentIndex < this.carouselList.length - 1) {
        return this.currentIndex + 1;
      } else {
        return 0;
      }
    },
    restCarousel() {
      this.outItem.addEventListener(
        "transitionend",
        () => {
          this.outItem.setAttribute("class", `j-carousel-item `);
          this.inItem.setAttribute("class", `j-carousel-item active`);
        },
        false
      );
    },
    moveCarousel(direction, index) {
      const type = direction == "left" ? "in" : "out";
      this.outItem = this.carouselList[this.currentIndex].$el;
      this.inItem = this.carouselList[index].$el;
      this.currentIndex = index;
      this.inItem.setAttribute("class", `j-carousel-item ${type}`);
      reflow(this.inItem);
      this.outItem.setAttribute("class", `j-carousel-item active ${direction}`);
      this.inItem.setAttribute("class", `j-carousel-item ${type} ${direction}`);
      this.restCarousel();
    },
    playCarousel() {
      this.intervalID = setInterval(() => {
        this.moveCarousel("left", this.getNextIndex());
      }, this.time * 1000);
    },
    initCarousel() {
      this.carouselList = this.$children.filter((item) => {
        return item.$options.name == "JCarouselItem";
      });
      this.carouselList.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.$el.classList.add("active");
        }
      });
    },
  },

  mounted() {
    this.initCarousel();
    this.playCarousel();
  },
};
</script>

<style lang="scss" scoped>
.j-carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
  & .j-carousel-item:nth-child(odd) {
    background-color: #d3dce6;
    text-align: center;
  }
  & .j-carousel-item:nth-child(even) {
    background-color: #99a9bf;
    text-align: center;
  }
  & .j-line-list {
    position: absolute;
    bottom: 6px;
    width: 100%;
    text-align: center;
    padding: 0;
    & > li {
      display: inline-block;
      height: 2px;
      width: 30px;
      background-color: #cad2de;
      cursor: pointer;
      margin: 0 4px;
      &.line-acitve {
        background-color: #fff;
      }
    }
  }
  &:hover .j-carousel-arrow {
    opacity: 1;

    transition: all 0.3s;
    &.arrow-prev {
      transform: translateX(10px) translateY(-50%);
    }
    &.arrow-next {
      transform: translateX(-10px) translateY(-50%);
    }
  }
  & > .j-carousel-arrow {
    outline: none;
    cursor: pointer;
    opacity: 0;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: rgba(31, 45, 61, 0.11);
    color: #fff;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(31, 45, 61, 0.55);
    }
    &.arrow-prev {
      left: 0;
    }
    &.arrow-next {
      right: 0;
    }
  }
}
</style>