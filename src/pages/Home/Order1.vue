<template>
  <div class="order">
    <dp-header :type="3"></dp-header>
    <Row class="main">
      <Col span="18">
        <Tabs value="name1">
          <TabPane label="生产情况" name="name1">
            <div>
              <p class="f-24 c-f mtb-5">生产数量情况</p>
              <div id="c1"></div>
            </div>
          </TabPane>
          <TabPane label="订单情况" name="name2">
            <div>
              <p class="f-24 c-f mtb-5">生产数量情况</p>
            </div>
          </TabPane>
          <ul slot="extra" class="list">
            <li v-for="(item, index) in arr" :key="index" :class="{ focus: index === focus }" @click="focus = index">{{ item }}</li>
          </ul>
        </Tabs>
      </Col>
      <Col span="6" class="user">
        <ul>
          <li class="user-date">
            <DatePicker :value="DateValue" format="yyyy-MM-dd" placement="bottom-end" type="daterange" placeholder="请选择日期"> </DatePicker>
          </li>
          <li class="user-list">
            <p class="f-24 c-f">员工生产数量排行</p>
            <ol>
              <li v-for="(item, index) in userList" :key="index + item">{{ item.name }}</li>
            </ol>
          </li>
        </ul>
      </Col>
    </Row>
  </div>
</template>

<script>
import dpHeader from '../../components/Header/dpHeader';

export default {
  name: 'order1',
  components: {
    'dp-header': dpHeader
  },
  data() {
    return {
      arr: ['今天', '本周', '本月', '全年'],
      focus: 0,
      DateValue: [],
      g2Data: [
        { month: '201901', val: 275 },
        { month: '201902', val: 92 },
        { month: '201903', val: 321 },
        { month: '201904', val: 612 },
        { month: '201905', val: 91 },
        { month: '201906', val: 312 },
        { month: '201907', val: 521 }
      ],
      userList: [
        { name: '张三', val: 12321 },
        { name: '张三', val: 12321 },
        { name: '张三', val: 12321 }
      ]
    };
  },
  methods: {},
  mounted() {
    const chart = new G2.Chart({
      container: 'c1',
      forceFit: true,
      height: 300,
      animate: false,
      padding: [30, 30, 30, 40]
    });

    chart.source(this.g2Data);
    chart
      .area()
      .position('month*val')
      .shape('smooth')
      .label('val')
      .opacity(0.85);
    chart.scale('month', {
      range: [0.01, 1]
    });
    chart.render();
  }
};
</script>
<style lang="scss" scoped>
.order {
  background-color: rgb(15, 17, 30);
  padding: 0 20px;
  height: inherit;
  #c1 {
    background-color: #f7f7f7;
    margin-right: 20px;
  }
  .main {
    background-color: #1e2651;
    border: 1px solid #59618c;
    border-radius: 5px;
    padding-left: 20px;
    display: flex;
    &::before {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      top: 39px;
      background-color: #59618c;
      left: 0;
    }
    .list {
      display: flex;
      font-size: 16px;
      color: #fff;
      justify-content: center;
      align-items: center;
      li {
        padding: 0 10px;
        cursor: pointer;
      }
    }
    .user {
      border-left: 1px solid #59618c;
      ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        .user-date {
          height: 40px;
          line-height: 40px;
          margin: 0 auto;
          ::v-deep .ivu-input {
            background-color: transparent;
            border-color: #59618c;
            color: #fff;
            border-radius: 2px;
            font-size: 18px;
          }
          ::v-deep .ivu-input-suffix .ivu-icon {
            color: #ffc950;
          }
        }
        .user-list {
          height: inherit;
          display: flex;
          flex-direction: column;
          color: #fff;
          p {
            margin: 5px 0 5px 10px;
          }
          ol {
            height: inherit;
            li {
              height: 16.66%;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .focus {
    color: #ffc950;
  }
  ::v-deep .ivu-tabs-bar {
    height: 40px;
    line-height: 40px;
    color: #fff;
    border: 0;
    margin-bottom: 0;
  }
  ::v-deep .ivu-tabs-tab {
    font-size: 20px;
    padding: 0 10px;
  }
  ::v-deep .ivu-tabs-nav-container {
    line-height: inherit;
  }
  ::v-deep .ivu-tabs-nav .ivu-tabs-tab-active {
    color: #ffc950;
    border-bottom: 1px solid #ffc950;
  }
  ::v-deep .ivu-tabs-ink-bar {
    background-color: #ffc950;
  }
  ::v-deep .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    border-color: transparent !important;
  }
}
</style>
