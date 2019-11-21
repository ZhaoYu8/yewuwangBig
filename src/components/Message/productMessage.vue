<template>
  <div class="productMessage">
    <p class="t-c f-24">最新消息</p>
    <div class="message f-1 o-h ">
      <div class="content">
        <ul>
          <li v-for="(item, index) in arr" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'productMessage',
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9],
      scroll: ''
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.message', {
        scrollY: true,
        mouseWheel: true
      });
    });
  }
};
</script>
<style lang="sass" scoped>
.productMessage
  border: 1px solid #454C6F
  border-radius: 5px
  width: 100%
  padding: 10px 10px 0 10px
  display: flex
  flex-direction: column
</style>
