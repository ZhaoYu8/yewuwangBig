<template>
  <div class="home">
    <dp-header></dp-header>
    <Row :gutter="20" index="" class="mt-15">
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <produced></produced></Col>
      <Col span="6"> <product-completion></product-completion></Col>
      <Col span="6"> <taskFailed></taskFailed></Col>
    </Row>
    <production-table class="mt-15"></production-table>
    <div class="f-1 mt-15 o-h">
      <user-scroll></user-scroll>
    </div>
  </div>
</template>

<script>
import dpHeader from "../../components/Header/dpHeader";
import todayPlanProduced from "../../components/Information/todayPlanProduced";
import produced from "../../components/Information/produced";
import taskFailed from "../../components/Information/taskFailed";
import productCompletion from "../../components/Information/productCompletion";
import productionTable from "../../components/Table/productionTable";
import userScroll from "../../components/User/userScroll";

export default {
  name: "home",
  components: {
    "dp-header": dpHeader,
    "today-plan-produced": todayPlanProduced,
    produced: produced,
    taskFailed: taskFailed,
    "product-completion": productCompletion,
    "production-table": productionTable,
    "user-scroll": userScroll
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="sass" scoped>
.home
  display: flex
  flex-direction: column
  background-color: rgb(15, 17, 30)
  color: rgb(255, 255, 255)
  padding: 0 30px
  height: inherit
</style>
<style lang="sass">
.home 
  .ivu-row 
    margin-left: -10px !important
    margin-right: -10px !important
  .ivu-col 
    padding-left: 10px !important
    padding-right: 10px !important
</style>