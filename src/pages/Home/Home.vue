<template>
  <div class="home">
    <dp-header></dp-header>
    <Row :gutter="20" index="" class="mt-20">
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
    </Row>
  </div>
</template>

<script>
import dpHeader from "../../components/Header/dpHeader";
import todayPlanProduced from "../../components/Quick/todayPlanProduced";
export default {
  name: "home",
  components: {
    "dp-header": dpHeader,
    "today-plan-produced": todayPlanProduced
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
