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
            <div class="footer">
              <p>已完成任务</p>
              <p>未完成任务</p>
            </div>
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
      setInterval: '',
      chartArr: []
    };
  },
  components: {},
  computed: {},
  methods: {
    refresh() {
      return;
      let arrList = document.querySelector('.wrapper').querySelectorAll('li');
      let _height = document.querySelector('html').clientHeight;
      document.querySelectorAll('.pie').forEach((r, index) => {
        r.style.height = _height * 0.22 * 0.9 + 'px';
        r.style.width = r.style.height;
        this.chartArr[index].resize();
      });
      this.setInterval = setInterval(() => {
        let x = arrList[this.scrollIndex];
        this.scrollY = x.offsetWidth + parseFloat(document.defaultView.getComputedStyle(x, null)['marginLeft']) * 2;
        if (this.scrollIndex === this.arr.length - 3) {
          this.scroll.scrollTo(0, 0, 500);
          this.scrollIndex = 0;
        } else {
          this.scroll.scrollBy(-this.scrollY, 0, 500);
          this.scrollIndex++;
        }
      }, 6000);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.wrapper', {
        scrollX: true,
        mouseWheel: true
      });
      this.arr.map((r, i) => {
        let chart = this.$chart.pie(`pie${i}`, [{ value: 32 }, { value: 68 }]);
        this.chartArr.push(chart);
      });
      this.refresh();
    });
    let that = this;
    this.bus.$on('onresize', () => {
      clearInterval(this.setInterval);
      that.refresh.bind(that)();
    });
  }
};
</script>
<style lang="sass" scoped>
.userScroll
  height: 100%
  .wrapper
    height: 100%
    width: 72.3%
    overflow-x: hidden
    .content
      display: inline-block
      height: 100%
      ul
        white-space: nowrap
        height: 100%
        margin: 0 -10px
        li
          justify-content: space-between
          padding: 10px 10px 0 10px
          margin: 0 10px
          display: inline-flex
          flex-direction: column
          width: 315px
          height: 100%
          border: 1px solid #454C6F
          border-radius: 5px
          .header
            display: flex
            justify-content: space-between
            font-size: 26px
            line-height: 26px
          .pie
            width: 100px
            height: 100px
            margin: 0 auto
          .footer
            display: flex
            justify-content: space-between
            font-size: 20px
            line-height: 28px
            p
              display: flex
              align-items: center
              &:nth-child(1)
                &:before
                  background-color: #238eff
                  border-color: #238eff
              &:before
                content: ""
                background-color: #f4ae00
                margin-right: 5px
                border: 1px solid #f4ae00
                display: inline-block
                border-radius: 50%
                width: 15px
                height: 15px
</style>
