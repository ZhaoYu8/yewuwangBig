<template>
  <div class="productCompletion">
    <div class="header">
      <div class="title">
        <p>今日新增订单</p>
        <Icon type="ios-alert-outline" class="info" />
      </div>
      <p class="f-48 f-l-48">{{ $global.format(num) }}</p>
      <div id="contrast1"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'productCompletion',
  data() {
    return {
      num: 7896,
      day: [21, 32],
      chart: '',
      chartData: [80]
    };
  },
  components: {},
  computed: {},
  methods: {
    format(num) {
      var reg = /\d{1,3}(?=(\d{3})+$)/g;
      return (num + '').replace(reg, '$&,');
    }
  },
  mounted() {
    this.chart = this.$chart.plan('contrast1', this.chartData);
    this.bus.$on('onresize', () => {
      this.chart.resize();
    });
  }
};
</script>
<style lang="sass" scoped>
@import '../../assets/common.sass'
.productCompletion
  @include box()
  .header
    flex: 4
    display: flex
    flex-direction: column
    .title
      @include boxTitle()
    > p
      color: $f-c-yellow
    #contrast1
      flex: 1
  .footer
    border-top: 1px solid #fff
    display: flex
    align-items: center
    font-size: 24px
    height: 40px
    line-height: 40px
</style>
