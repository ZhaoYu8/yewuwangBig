<template>
  <div class="today-plan-produced">
    <div class="header">
      <div class="title">
        <p>今日待生产</p>
        <Icon type="ios-alert-outline" class="info" />
      </div>
      <p class="f-40">{{ $global.format(num) }}</p>
      <ul class="contrast">
        <li>
          <span>日周比</span>
          <Icon
            class="f-24"
            :type="day[0] > 10 ? 'md-arrow-dropdown' : 'md-arrow-dropup'"
          />
          <span>{{ day[0] }}</span
          >%
        </li>
        <li>
          <span>月周比</span>
          <Icon
            class="f-24"
            :type="day[0] < 10 ? 'md-arrow-dropdown' : 'md-arrow-dropup'"
          />
          <span>{{ day[1] }}</span
          >%
        </li>
      </ul>
    </div>
    <div class="footer">
      本月计划 12,321
    </div>
  </div>
</template>

<script>
export default {
  name: "todayPlanProduced",
  data() {
    return {
      num: 8512,
      day: [21, 32]
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
  .header
    flex: 4
    display: flex
    flex-direction: column
    .title
      @include boxTitle()
    > p
      color: $f-c-yellow
    .contrast
      display: flex
      flex: 1
      align-items: center
      li
        flex: 1
        font-size: 20px
        &:nth-child(1)
          padding-right: 5px
          border-right: 1px solid #fff
        &:nth-child(2)
          padding-left: 5px
  .footer
    flex: 1
    border-top: 1px solid #fff
    display: flex
    align-items: center
    font-size: 24px
</style>
<style lang="sass">
</style>