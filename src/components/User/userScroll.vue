<template>
  <div class="userScroll">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <ul class="nav_mine">
          <li v-for="(item, index) in arr" :key="index">{{ index }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "userScroll",
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5]
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      let scroll = new BScroll(".wrapper", {
        scrollX: true
      });
    });
  }
};
</script>
<style lang="sass" scoped>
.userScroll 
  height: 100%
  .wrapper
    height: 100%
    width: 80%
    overflow-x: hidden
    .content
      display: inline-block
      height: 100%
      ul
        white-space: nowrap
        height: 100%
        li
          display: inline-block
          width: 300px
          height: 100%
          border: 1px solid
</style>