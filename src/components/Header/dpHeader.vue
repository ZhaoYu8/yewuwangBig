<template>
  <div class="dp-header p-r">
    <ul class="d-f a-i-c j-c-s-b">
      <li>
        <template v-if="[1, 2].includes(type)">
          <Select v-model="model" class="select">
            <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </template>
      </li>
      <li class="f-36 d-f p-center p-a">
        <template v-if="type === 1">
          <p>{{ company[0] }}-</p>
          <p @click="branchType = true">{{ name || company[1] }}</p>
          <p class="ml-20">生产看板</p>
        </template>
        <template v-else>
          <p @click="branchType = true">{{ name || company[0] }}</p>
        </template>
      </li>
      <li class="f-24">{{ newDate }}</li>
    </ul>
    <Modal v-model="branchType" draggable class-name="vertical-center-modal" width="360">
      <p class="mb-20">请选择部门</p>
      <Select v-model="branchModel" class="select">
        <Option v-for="item in branchList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div slot="footer" class="t-c">
        <Button @click="cancel">取消</Button>
        <Button type="primary" @click="branchOk">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'dpHeader',
  data() {
    return {
      list: [
        { value: 1, label: '选项一' },
        { value: 2, label: '选项二' }
      ],
      branchList: [
        { value: 1, label: '部门一' },
        { value: 2, label: '部门二' }
      ],
      model: '',
      branchModel: 1,
      branchType: false,
      company: ['企业名称', '部门名称'],
      newDate: this.moment().format('YYYY年MM月DD日 HH:mm:ss'),
      name: ''
    };
  },
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  components: {},
  computed: {},
  methods: {
    cancel() {
      this.branchType = false;
    },
    branchOk() {
      this.name = this.branchList.filter((r) => r.value === this.branchModel)[0].label;
      this.cancel();
      this.$emit('branch', this.branchModel);
    }
  },
  mounted() {
    setInterval(() => {
      this.newDate = this.moment().format('YYYY年MM月DD日 HH:mm:ss');
    }, 1000);
  }
};
</script>
<style lang="sass" scoped>
.dp-header
  padding: 10px 0
</style>
<style lang="sass">
@import '../../assets/common.sass'
.dp-header
  color: #fff
  .select
    width:240px
    .ivu-select-selection
      @include darkColor()
      height: 36px
      line-height: 36px
      .ivu-select-placeholder, .ivu-select-selected-value
        height: 36px
        line-height: 36px
.vertical-center-modal
  .ivu-modal
    width: 300px
    top: 30%
    .ivu-select-selection
      @include darkColor()
      height: 36px
      line-height: 36px
      .ivu-select-placeholder, .ivu-select-selected-value
        height: 36px
        line-height: 36px
    .ivu-modal-content
      width: 100%
      @include darkColor()
</style>
