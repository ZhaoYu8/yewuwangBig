<template>
  <div class="home">
    <dp-header></dp-header>
    <Row :gutter="20" index="" class="mt-20">
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <produced></produced></Col>
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <taskFailed></taskFailed></Col>
    </Row>
  </div>
</template>

<script>
import dpHeader from "../../components/Header/dpHeader";
import todayPlanProduced from "../../components/Quick/todayPlanProduced";
import produced from "../../components/Quick/produced";
import taskFailed from "../../components/Quick/taskFailed";

export default {
  name: "home",
  components: {
    "dp-header": dpHeader,
    "today-plan-produced": todayPlanProduced,
    produced: produced,
    taskFailed: taskFailed
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: rgb(15, 17, 30);
  color: rgb(255, 255, 255);
  padding: 0 30px;
  height: inherit;
}
</style>
<style lang="scss">
.home {
  .ivu-row {
    margin-left: -10px !important;
    margin-right: -10px !important;
  }
  .ivu-col {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>