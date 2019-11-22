<template>
  <div class="order-table" :style="{ height: height + '%' }" ref="orderTable">
    <div class="content">
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <div>{{ item }}</div>
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
      arr: [1, 3, 3, 4, 5, 5, 6, 7, 7]
    };
  },
  props: {
    height: Number
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let x = document.querySelector('.order .order-table');
      let arr = document.querySelectorAll('.order-table li');
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
    ul
      white-space: nowrap
      height: 100%
      li
        display: inline-flex
        height: 100%
        padding: 10px
        margin: 10px 0
        border: 1px solid #464D71
        background-color: $lavender
</style>
