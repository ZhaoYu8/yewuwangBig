<template>
  <div class="produced">
    <div class="header">
      <div class="title">
        <p>已生产数</p>
        <Icon type="ios-alert-outline" class="info" />
      </div>
      <p class="f-40">{{ $global.format(num) }}</p>
      <div id="contrast"></div>
    </div>
    <div class="footer">
      本月计划 12,321
    </div>
  </div>
</template>

<script>
export default {
  name: "produced",
  data() {
    return {
      num: 7896,
      day: [21, 32],
      chart: "",
      chartData: [0, 150, 150, 54, 260, 150, 150, 150, 150]
    };
  },
  components: {},
  computed: {},
  methods: {
    format(num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g;
      return (num + "").replace(reg, "$&,");
    }
  },
  mounted() {
    this.chart = this.$chart.line("contrast", this.chartData);
    this.bus.$on("onresize", () => {
      this.chart.resize();
    });
  }
};
</script>
<style lang="sass" scoped>
@import '../../assets/common.sass'
.produced
  @include box()
  .header
    flex: 4
    display: flex
    flex-direction: column
    .title
      @include boxTitle()
    > p
      color: $f-c-yellow
    #contrast
      flex: 1
  .footer
    flex: 1
    border-top: 1px solid #fff
    display: flex
    align-items: center
    font-size: 24px
</style>