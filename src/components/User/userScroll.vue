<template>
  <div class="userScroll" :style="{ width: width + '%' }">
    <div class="wrapper" ref="wrapper" @mouseenter="userMouseenter" @mouseleave="userMouseleave">
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
  props: {
    height: Number,
    width: Number
  },
  components: {},
  computed: {},
  methods: {
    refresh() {
      // 取得class 为 wrapper 下的全部的li
      let arrList = document.querySelector('.userScroll .wrapper').querySelectorAll('li');
      // 拿到当前html高度，因为全屏和不是全屏差别很大。 百分比高度不精准，总是慢一点，所以直接取的html的高度计算了。
      let _height = document.querySelector('html').clientHeight;
      // 取得所有的饼图，重新绘制饼图高宽。然后让饼图重新绘画
      document.querySelectorAll('.userScroll .pie').forEach((r, index) => {
        r.style.height = ((_height * this.height) / 100) * 0.9 + 'px';
        r.style.width = r.style.height;
        this.chartArr[index].resize();
      });
      // 定时滚动
      this.setInterval = setInterval(() => {
        let x = arrList[this.scrollIndex];
        // 下面为了拿到饼图外层大小。和margin宽度
        this.scrollY = x.offsetWidth + parseFloat(document.defaultView.getComputedStyle(x, null)['marginLeft']) * 2;
        // 到底了重新回到第一页 // scrollTo scrollBy方法区别很大，具体的可以去官网看文档。
        // 因为可以拖动，所以增加拖动判断，如果说拖动到底部了。也需要重置到第一页，不然程序会认为，你没有到底部。会一直执行往左拖动的效果。
        if (
          this.scrollIndex === this.arr.length - 3 ||
          Math.ceil(Math.abs(this.scroll.x / this.scrollY)) > this.arr.length - 4
        ) {
          this.scroll.scrollTo(0, 0, 500);
          this.scrollIndex = 0;
        } else {
          this.scroll.scrollBy(-this.scrollY, 0, 500);
          this.scrollIndex++;
        }
      }, 5000);
    },
    userMouseenter() {
      // 移入事件
      clearInterval(this.setInterval);
    },
    userMouseleave() {
      // 移出事件
      this.refresh();
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 先允许滚动组件加载
      this.scroll = new BScroll('.wrapper', {
        scrollX: true,
        mouseWheel: true
      });
      // 生成饼图
      this.arr.map((r, i) => {
        let chart = this.$chart.pie(`pie${i}`, [{ value: 32 }, { value: 68 }]);
        this.chartArr.push(chart);
      });
      // 初始化 & 初始化员工滚动
      this.refresh();
    });
    let that = this;
    // 全局通知，浏览器大小变化了
    this.bus.$on('onresize', () => {
      clearInterval(this.setInterval);
      that.refresh.bind(that)();
    });
  }
};
</script>
<style lang="sass" scoped>
.userScroll
  .wrapper
    height: 100%
    overflow: hidden
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
