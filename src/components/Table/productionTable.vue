<template>
  <div class="productionTable" ref="productionTable">
    <Table :columns="columns" :data="data" border class="diablo"></Table>
  </div>
</template>

<script>
export default {
  name: 'productionTable',
  data() {
    return {
      columns: [
        { title: '订单号', key: 'serialNo' },
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
  components: {},
  computed: {},
  methods: {
    refresh() {
      this.$nextTick(() => {
        let dom = document.querySelector('.productionTable');
        let domArr = dom.querySelectorAll('.ivu-table-border td, .ivu-table-border th');
        let _height = (document.querySelector('html').clientHeight * 0.4) / 6;
        dom.querySelector('.diablo .ivu-table th').style.height = _height + 'px';
        domArr.forEach(r => {
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
    }).then(data => {
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
