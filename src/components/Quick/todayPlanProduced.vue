<template>
  <div class="today-plan-produced">
    <div class="box">
      <header>
        <p>今日待生产</p>
        <Icon type="ios-alert-outline" class="info" />
      </header>
      <p class="f-40 "> {{ num }} </p>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "todayPlanProduced",
  data() {
    return {
      num: 7896
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="sass" scoped>
@import '../../assets/common.sass'
.today-plan-produced
  @include box()
  .box
    flex: 3
    header
      @include boxHeader()
    > p
      color: $f-c-yellow
  .footer
    flex: 1
</style>
<style lang="sass">
</style>