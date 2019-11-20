<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {
    let timeout = '';
    window.onresize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.$nextTick(() => {
          this.bus.$emit('onresize');
        });
      }, 300); //页面大小变化，重新加载页面以刷新MAP
    };
  }
};
</script>
<style lang="scss">
#app {
  height: inherit;
}
</style>
