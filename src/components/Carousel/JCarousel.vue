<template>
  <div
    class="j-carousel"
    @mouseover="handelMouseover"
    @mouseleave="handeMouseleave"
  >
    <div class="j-carousel-list" :style="{ height: `${height}px` }">
      <slot></slot>
    </div>
    <ul class="v-carousel-lines">
      <li
        v-for="(item, index) in carouselList"
        :key="index"
        class="line"
        :class="{ 'line-active': index === currentIndex }"
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
export default {
  name: "JCarousel",
  data() {
    return {
      currentIndex: 1,
      carouselList: [],
      automaticPlayId: null,
      inItem: null,
      outItem: null,
    };
  },
  props: {
    height: {
      type: Number,
      default: 200,
    },
    interval: {
      type: Number,
      default: 3,
    },
  },
  methods: {
    handeMouseleave() {
      this.playCarousel();
    },
    handelMouseover() {
      if (this.automaticPlayId) {
        clearInterval(this.automaticPlayId);
        this.automaticPlayId = null;
      }
    },
    handleArrowPrev() {
      this.moveCarousel("right", this.getPrevIndex);
    },
    handleArrowNext() {
      this.moveCarousel("left", this.getInItemIndex);
    },
    getPrevIndex() {
      this.currentIndex > 0
        ? --this.currentIndex
        : (this.currentIndex = this.carouselList.length - 1);
      return this.currentIndex;
    },
    getInItemIndex() {
      this.currentIndex < this.carouselList.length - 1
        ? ++this.currentIndex
        : (this.currentIndex = 0);
      return this.currentIndex;
    },
    restCarousel() {
      this.outItem.addEventListener("transitionend", () => {
        this.outItem.setAttribute("class", "j-carousel-item");
        this.inItem.setAttribute("class", "j-carousel-item active");
      });
    },
    moveCarousel(direction, nextIndex) {
      this.outItem = this.carouselList[this.currentIndex].$el;
      this.inItem = this.carouselList[nextIndex()].$el;
      this.outItem.setAttribute("class", `j-carousel-item active ${direction}`);
      this.inItem.setAttribute("class", `j-carousel-item in`);
      this.restCarousel();
    },
    playCarousel() {
      this.automaticPlayId = setInterval(() => {
        this.moveCarousel("left", this.getInItemIndex);
      }, this.interval * 1000);
    },
    initCarousel() {
      this.carouselList = this.$children.filter((item) => {
        return item.$options.name === "JCarouselItem";
      });
      this.carouselList.forEach((item, index) => {
        index === this.currentIndex ? item.$el.classList.add("active") : "";
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
  overflow: hidden;
  position: relative;
  & .j-carousel-item:nth-child(odd) {
    background-color: #d3dce6;
  }
  & .j-carousel-item:nth-child(even) {
    background-color: #99a9bf;
  }
  &-list {
    position: relative;
  }
  & > .v-carousel-lines {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 4px;
    padding: 0;
    margin: 0;
    display: block;

    list-style-type: none;
    text-align: center;
    & > .line {
      display: inline-block;
      width: 30px;
      background: #000;
      height: 4px;
      margin-right: 10px;
    }
    & > .line-active {
      background: #fff;
    }
  }
  &:hover > .j-carousel-arrow {
    background-color: rgba(31, 45, 61, 0.23);
    display: block;
    transition: all 0.4s;
    &.arrow-prev {
      opacity: 1;
      transform: translateX(10px) translateY(-50%);
    }
    &.arrow-next {
      opacity: 1;
      transform: translateX(-10px) translateY(-50%);
    }
  }
  & > .j-carousel-arrow {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    color: #fff;
    outline: none;
    transition: all 0.4s;
    &.arrow-prev {
      left: 0;
      top: 50%;
      opacity: 0;
      transform: translateX(-10px) translateY(-50%);
    }
    &.arrow-next {
      right: 0;
      top: 50%;
      opacity: 0;
      transform: translateX(10px) translateY(-50%);
    }
  }
}
</style>