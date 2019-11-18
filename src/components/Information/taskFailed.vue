<template>
  <div class="taskFailed">
    <div class="header">
      <div class="title">
        <p>已生产数</p>
        <Icon type="ios-alert-outline" class="info" />
      </div>
    </div>
    <div class="completion" ref="circle">
      <i-circle
        :size="circleWidth"
        :percent="num"
        stroke-linecap="square"
        stroke-color="#43a3fb"
      >
        <div class="circle-custom">
          <p>{{ num }}%</p>
          <span> 完成率 </span>
        </div>
      </i-circle>
      <p class="contrast">123 / 456</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "taskFailed",
  data() {
    return {
      circleWidth: 150,
      num: 78
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    setTimeout(() => {
      this.circleWidth = this.$refs.circle.clientWidth * 0.4;
    }, 100);
    this.bus.$on("onresize", () => {
      this.circleWidth = this.$refs.circle.clientWidth * 0.4;
    });
  }
};
</script>
<style lang="sass" scoped>
@import '../../assets/common.sass'
.taskFailed
  @include box()
  .header
    display: flex
    flex-direction: column
    .title
      @include boxTitle()
  .completion
    position: relative
    flex: 1
    display: flex
    align-items: center
    justify-content: center
  .circle-custom
    font-size: 26px  
  .contrast
    font-size: 24px
    position: absolute
    right: 0%
    bottom: 5%
</style>