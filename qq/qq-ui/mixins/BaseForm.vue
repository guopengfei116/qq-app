<script>
export default {
  methods: {
    // private: 缓存Props传入的表单默认值，数据浅隔离
    cacheDefaultData() {
      this.defaultDataCache = { ...this.defaultData };
    },

    // private: 初始化自身数据模型
    initModel() {},

    // public: 重置表单
    reset() {
      this.initModel();
      this.$nextTick(() => this.clearValidate());
    },

    // public: 表单校验
    validate() {
      return this.$refs.form.validate();
    },

    // public: 清除表单校验错误提示
    clearValidate() {
      this.$refs.form.clearValidate();
    },

    // public: 提取表单数据
    getData() {
      return this.formModel;
    },

    // event: 监听表单变化，并向外传播
    onchange(key, value) {
      this.$emit("change", {
        data: this.formModel,
        key,
        value
      });
    }
  }
};
</script>
