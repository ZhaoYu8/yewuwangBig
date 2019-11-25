<template>
  <div class="order-table" :style="{ height: height + '%' }" ref="orderTable">
    <div class="content">
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <div class="custInfo">
            <p class="header">头部</p>
            <div class="box">
              <p class="title">公司信息</p>
              <div class="img">
                <img src="../../assets/img/default.png" alt="" />
              </div>
            </div>
          </div>
          <div class="listInfo">
            <p class="listName">预警</p>
            <p class="listCustName">Default</p>
            <p class="listTime">计划时间：{{ newDate }}</p>
            <ul class="listType">
              <li class="active">已经逾期</li>
              <li>即将逾期</li>
            </ul>
            <p>逾期原因：</p>
            <div class="cause">
              一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，一首诗，
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'order-table',
  components: {},
  data() {
    return {
      arr: [1, 3, 3, 4, 5, 5, 6, 7, 7],
      newDate: this.moment().format('YYYY-MM-DD')
    };
  },
  props: {
    height: Number
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let x = document.querySelector('.order .order-table');
      let arr = document.querySelectorAll('.order-table .content > ul > li');
      arr.forEach((e) => {
        e.style.width = x.offsetWidth / 4 + 'px';
      });
      this.scroll = new BScroll('.order-table', {
        scrollX: true,
        mouseWheel: true
      });
    });
  }
};
</script>
<style lang="sass" scoped>
@import '../../assets/common.sass'
.order-table
  overflow: hidden
  .content
    display: inline-block
    height: 100%
    > ul
      white-space: nowrap
      height: 100%
      >li
        display: inline-flex
        flex-direction: column
        height: 100%
        border: 1px solid #464D71
        .custInfo
          height: 48%
          display: flex
          flex-direction: column
          .header
            padding: 0 18px
            background-color: $lavender
            height: 37.5px
            line-height: 37.5px
            font-size: 22px
            border-bottom: 1px solid #6870A0
          .box
            padding: 0 18px
            flex: 1
            display: flex
            flex-direction: column
            .title
              font-size: 22px
              color: $f-c-yellow
              height: 37.5px
              line-height: 37.5px
            .img
              flex: 1
              display: flex
              align-items: center
              justify-content: center
              img
                height: 120px
                width: 70%
        .listInfo
          height: 52%
          padding: 0 18px
          font-size: 20px
          background-color: $lavender
          .listName
            height: 37.5px
            color: $f-c-yellow
            line-height: 37.5px
          .listCustName
            height: 37.5px
            line-height: 37.5px
            text-align: center
          .listType
            display: flex
            font-size: 18px
            justify-content: space-around
            margin: 5px 0
            li
              border:1px solid $b-c-s-lavender
              border-radius: 30px
              padding: 2px 10px
          .cause
            white-space: normal
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3
  .active
    background-color: $b-c-s-lavender
</style>
