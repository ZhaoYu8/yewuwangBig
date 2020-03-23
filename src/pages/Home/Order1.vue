<template>
  <div class="order">
    <dp-header :type="3"></dp-header>
    <Row class="main">
      <Col span="18" class="pl-20">
        <Tabs value="name1">
          <TabPane label="生产情况" name="name1">
            <div>
              <p class="f-24 c-f mtb-10">生产数量情况</p>
              <div id="c1"></div>
            </div>
          </TabPane>
          <TabPane label="订单情况" name="name2">
            <div>
              <p class="f-24 c-f mtb-10">生产数量情况</p>
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
              <li v-for="(item, index) in userList" :key="index + item">
                <p>
                  <i class="icon" :class="{ light: index > 2 }">{{ index + 1 }}</i>
                  <span>{{ item.name }}</span>
                </p>
                <p>{{ item.val.toLocaleString() }}</p>
              </li>
            </ol>
          </li>
        </ul>
      </Col>
    </Row>
    <Row class="footer">
      <Col span="18">
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li v-for="(item, index) in userData" :key="index">
              <div>
                <div class="header">
                  <p><Icon type="md-contact" size="30" color="#7CBAFB" class="mr-5" />{{ item.name }}</p>
                  <p>{{ item.val }}</p>
                </div>
                <ol class="container" style="">
                  <li class="wave"></li>
                  <li class="text">
                    <p>剩余任务</p>
                    <p class="c-black f-26">50%</p>
                  </li>
                  <li class="wave-mask" :style="{ top: '-0%' }"></li>
                </ol>
                <ol>
                  <li>已完成：220</li>
                  <li>总数：350</li>
                </ol>
              </div>
            </li>
          </ul>
        </div>
      </Col>
      <Col span="6" class="news">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </Col>
    </Row>
  </div>
</template>

<script>
import dpHeader from '../../components/Header/dpHeader';
import BScroll from 'better-scroll';
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
        { name: '赵一', val: 2542 },
        { name: '钱二', val: 1412 },
        { name: '孙三', val: 894 },
        { name: '李四', val: 754 },
        { name: '王五', val: 645 },
        { name: '周六', val: 542 }
      ],
      userData: [
        { name: '赵一', val: 2542 },
        { name: '钱二', val: 1412 },
        { name: '孙三', val: 894 },
        { name: '李四', val: 754 },
        { name: '王五', val: 645 },
        { name: '周六', val: 542 }
      ]
    };
  },
  methods: {},
  mounted() {
    const chart = new G2.Chart({
      container: 'c1',
      forceFit: true,
      height: document.documentElement.clientHeight * 0.4,
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

    this.$nextTick(() => {
      const [_wrapper, _wrapperHeight] = [this.$refs.wrapper, this.$refs.wrapper.offsetHeight * 0.45];
      _wrapper.childNodes[0].childNodes.forEach((e, i) => {
        e.style.width = _wrapper.offsetWidth / 3 + 'px';
      });
      document.getElementsByClassName('container').forEach((e) => {
        e.style.width = _wrapperHeight + 'px';
        e.style.height = _wrapperHeight + 'px';
      });
      document.getElementsByClassName('wave-mask').forEach((e) => {
        e.style.width = _wrapperHeight * 2 + 'px';
        e.style.height = _wrapperHeight * 2 + 'px';
      });

      //      wave-mask
      // 先允许滚动组件加载
      this.scroll = new BScroll(_wrapper, {
        scrollX: true,
        mouseWheel: true
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.order {
  background-color: rgb(15, 17, 30);
  padding: 0 20px;
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  #c1 {
    background-color: #f7f7f7;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .main {
    background-color: #1e2651;
    border: 1px solid #59618c;
    border-radius: 5px;
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
    // 员工生产数量排行
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
            margin: 5px 20px;
          }
          ol {
            height: inherit;
            font-size: 18px;
            overflow: hidden;
            li {
              height: 16.66%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              p {
                display: flex;
                align-items: center;
              }
              .icon {
                height: 20px;
                width: 20px;
                text-align: center;
                background-color: #ffc950;
                color: #000;
                border-radius: 50%;
                line-height: 20px;
                display: inline-block;
                font-size: 18px;
                margin-right: 10px;
                border: 1px solid #ffc950;
              }
              .light {
                background-color: transparent;
                color: #ffc950;
              }
            }
          }
        }
      }
    }
  }
  // 底部信息
  .footer {
    flex: 1;
    & > div {
      height: 100%;
    }
    .wrapper {
      overflow: hidden;
      height: 100%;
      .content {
        display: inline-flex;
        white-space: nowrap;
        height: 100%;
        padding: 10px 0;
        li {
          & > div {
            background-color: #13182b;
            border: 1px solid #454c6f;
            border-radius: 5px;
            margin-right: 10px;
            padding: 10px 10px 10px 10px;
            height: 100%;
            font-size: 18px;
            color: #fff;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            // 波形图
            .container {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              border: 3px solid #4fb0ff;
              background-color: #fff;
              padding: 5px;
              overflow: hidden;
              box-sizing: content-box;
              .wave {
                height: inherit;
                background-image: linear-gradient(-180deg, #4fb0ff 13%, #4fb0ff 91%);
                border-radius: 50%;
              }
              .text {
                position: absolute;
                z-index: 21;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                color: #666;
              }
              .wave-mask {
                position: absolute;
                left: 50%;
                border-radius: 40%;
                transform: translate(-50%, -70%);
                animation: toRotate 10s linear -5s infinite;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    .news {
      padding: 10px 0;
      ul {
        height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          height: 48%;
          border: 1px solid #454c6f;
          border-radius: 5px;
        }
      }
    }
  }
  @keyframes toRotate {
    50% {
      transform: translate(-50%, -70%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -70%) rotate(360deg);
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
