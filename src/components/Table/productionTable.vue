<template>
  <div class="mt-10" :style="{ height: height + '%' }">
    <Table :columns="columns" :data="data" border class="diablo" ellipsis="true"></Table>
  </div>
</template>

<script>
export default {
  name: 'productionTable',
  data() {
    return {
      columns: [
        { title: '订单号', key: 'serialNo', width: 150, ellipsis: true, tooltip: true },
        { title: '产品编号', key: 'name' },
        { title: '产品名称', key: 'name' },
        { title: '产品规格', key: 'name' },
        { title: '生产日期', key: 'name' },
        { title: '计划数量', key: 'name' },
        { title: '生产数量', key: 'name' },
        { title: '剩余', key: 'name' }
      ],
      data: []
    };
  },
  props: {
    height: Number
  },
  components: {},
  computed: {
    productionTableChildrenDom() {
      return document.querySelectorAll('.diablo .ivu-table td, .ivu-table th');
    }
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        let _height = (document.querySelector('html').clientHeight * this.height) / 100 / 6; // 这里6是表格一共6行来计算的
        this.productionTableChildrenDom.forEach((r) => {
          r.style.height = _height + 'px';
        });
      });
    }
  },
  mounted() {
    this.$post('tracking/GetBusinessManageRpt', {
      filterName: '',
      pageIndex: 1,
      pageSize: 5,
      progressTemplateId: 0
    }).then((data) => {
      this.data = data.data.result.items;
      this.refresh();
    });
    let that = this;
    this.bus.$on('onresize', () => {
      that.refresh.bind(that)();
    });
  }
};
</script>
<style lang="sass"></style>
