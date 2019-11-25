<template>
  <div class="home">
    <dp-header></dp-header>
    <Row :gutter="20" index="" class="mt-10" :style="{ height: boxHeight + '%' }">
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <produced></produced></Col>
      <Col span="6"> <product-completion></product-completion></Col>
      <Col span="6"> <taskFailed :height="boxHeight"></taskFailed></Col>
    </Row>
    <production-table :height="productionHeight"></production-table>
    <div class="d-f mt-10" :style="{ height: userHeight + '%' }">
      <user-scroll :height="userHeight" :width="72.3"></user-scroll>
      <product-message></product-message>
    </div>
  </div>
</template>

<script>
import dpHeader from '../../components/Header/dpHeader';
import todayPlanProduced from '../../components/Information/todayPlanProduced';
import produced from '../../components/Information/produced';
import taskFailed from '../../components/Information/taskFailed';
import productCompletion from '../../components/Information/productCompletion';
import productionTable from '../../components/Table/productionTable';
import userScroll from '../../components/User/userScroll';
import productMessage from '../../components/Message/productMessage';

export default {
  name: 'home',
  components: {
    'dp-header': dpHeader,
    'today-plan-produced': todayPlanProduced,
    produced: produced,
    taskFailed: taskFailed,
    'product-completion': productCompletion,
    'production-table': productionTable,
    'user-scroll': userScroll,
    'product-message': productMessage
  },
  data() {
    return {
      boxHeight: 23,
      productionHeight: 40,
      userHeight: 25
    };
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
  padding: 0 20px
  height: inherit
</style>
<style lang="sass">
.home
  .ivu-row
    margin-left: -5px !important
    margin-right: -5px !important
  .ivu-col
    padding-left: 5px !important
    padding-right: 5px !important
    height: 100%
</style>
