<template>
  <div class="order">
    <dp-header :type="2"></dp-header>
    <Row :gutter="20" index="" class="mt-10" :style="{ height: boxHeight + '%' }">
      <Col span="6"> <today-plan-produced></today-plan-produced></Col>
      <Col span="6"> <produced></produced></Col>
      <Col span="6"> <product-completion></product-completion></Col>
      <Col span="6"> <taskFailed :height="boxHeight"></taskFailed></Col>
    </Row>
    <order-table :height="orderTableHeight"></order-table>
  </div>
</template>

<script>
import dpHeader from '../../components/Header/dpHeader';
import todayPlanProduced from '../../components/Information/todayPlanProduced';
import produced from '../../components/Information/produced';
import taskFailed from '../../components/Information/taskFailed';
import productCompletion from '../../components/Information/productCompletion';
import orderTable from '../../components/Table/orderTable';

export default {
  name: 'home',
  components: {
    'dp-header': dpHeader,
    'today-plan-produced': todayPlanProduced,
    produced: produced,
    taskFailed: taskFailed,
    'product-completion': productCompletion,
    'order-table': orderTable
  },
  data() {
    return {
      boxHeight: 23,
      orderTableHeight: 70
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="sass" scoped>
.order
  display: flex
  flex-direction: column
  background-color: rgb(15, 17, 30)
  color: rgb(255, 255, 255)
  padding: 0 20px
  height: inherit
</style>
<style lang="sass">
.order
  .ivu-row
    margin-left: 0 !important
    margin-right: 0 !important
  .ivu-col
    padding-left: 10px !important
    padding-right: 10px !important
    height: 100%
    &:first-child
      padding-left: 0 !important
    &:last-child
      padding-right: 0 !important
</style>
