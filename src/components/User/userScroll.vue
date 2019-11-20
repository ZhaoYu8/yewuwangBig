<template>
  <div class="userScroll">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <ul class="nav_mine">
          <li v-for="(item, index) in arr" :key="index">
            <p class="header">
              <span><Icon type="md-contact" /> 员工A</span>
              <span>{{ index }} 分钟前</span>
            </p>
            <div :id="'pie' + index" class="pie"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'userScroll',
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3],
      scroll: '',
      scrollY: 0,
      scrollIndex: 0,
      arrList: [],
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.wrapper', {
        scrollX: true,
        mouseWheel: true,
      });
      this.arrList = this.$refs.wrapper.querySelectorAll('li');
      this.arr.map((r, i) => {
        let chart = this.$chart.pie(`pie${i}`, [{ value: 32 }, { value: 68 }]);
      });
      // setInterval(() => {
      //   this.scrollY =
      //     this.arrList[this.scrollIndex].offsetWidth * this.scrollIndex;
      //   if (this.scrollIndex + 3 === this.arr.length) {
      //     this.scrollIndex = 0;
      //   } else {
      //     this.scrollIndex++;
      //   }
      //   this.scroll.scrollTo(-this.scrollY, 0, 500);
      // }, 1000);
    });
  },
};
</script>
<style lang="sass" scoped>
.userScroll
  height: 100%
  .wrapper
    height: 100%
    width: 72.3%
    overflow: hidden
    .content
      display: inline-block
      height: 100%
      ul
        white-space: nowrap
        height: 100%
        margin: 0 -10px
        li
          padding: 10px 10px 0 10px
          margin: 0 10px
          display: inline-block
          width: 310px
          height: 100%
          border: 1px solid #454C6F
          border-radius: 5px
          .header
            display: flex
            justify-content: space-between
            font-size: 26px
            line-height: 26px
          .pie
            width: 140px
            height: 140px
            margin: 0 auto
</style>
