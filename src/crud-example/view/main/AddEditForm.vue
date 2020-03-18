<template>
  <el-form
    ref="form"
    :model="formModel"
    :rules="modelRules"
    label-width="120px"
    label-position="left"
  >
    <el-form-item label="时间(年)" prop="year">
      <el-date-picker
        type="year"
        v-model="formModel.year"
        value-format="yyyy"
        align="right"
        placeholder="时间"
      >
      </el-date-picker>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ruleFactory } from "mo/validator";
import { overwrite } from "mo/object";
import { BaseForm } from "mo-ui/mixin";

import AddEditModel from "@/crud-example/model/vo/AddEdit";

const modelRules = {
  year: ruleFactory("selectRequired", "请选择有效年份")
};

export default {
  name: "CrudExampleAddEditForm",

  mixins: [BaseForm],

  props: {
    defaultData: {
      type: AddEditModel,
      default: () => Object.create(null)
    }
  },

  data() {
    this.modelRules = modelRules;
    this.defaultDataCache = null;

    return {
      formModel: null
    };
  },

  watch: {
    defaultData() {
      if (this.defaultData === this.formModel) return;

      this.cacheDefaultData();
      this.reset();
    }
  },

  created() {
    this.cacheDefaultData();
    this.initModel();
  },

  methods: {
    cacheDefaultData() {
      this.defaultDataCache = { ...this.defaultData };
    },

    initModel() {
      this.formModel = overwrite(new AddEditModel(), this.defaultDataCache);
    },

    reset() {
      this.initModel();
      this.$nextTick(() => this.clearValidate());
    },

    getData() {
      return this.formModel;
    }
  }
};
</script>
