<template>
  <div class="productMessage">
    <p class="t-c f-24">最新消息</p>
    <div class="message f-1 o-h ">
      <div class="content" @mouseenter="userMouseenter" @mouseleave="userMouseleave">
        <ul :style="{ animation: hover ? arr.length / 2 + 's' + ' wordsLoop linear infinite normal' : '' }">
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
      scroll: '',
      hover: true,
      timeout: '',
      time: 0
    };
  },
  components: {},
  computed: {},
  methods: {
    userMouseenter() {
      clearTimeout(this.timeout);
      this.timeout = setInterval(() => {
        //移入的时候不希望立马就停止，防止是误触，超过1.5S我就认为你希望停止了
        if (this.time > 15) {
          this.hover = false;
          this.time = 0;
          clearTimeout(this.timeout);
        } else {
          this.time++;
        }
      }, 100);
    },
    userMouseleave() {
      clearTimeout(this.timeout);
      this.hover = true;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.message', {
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
  margin-left: 10px
</style>
<style lang="scss">
@keyframes wordsLoop {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}
</style>
