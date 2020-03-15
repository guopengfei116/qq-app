<template>
  <qq-search>
    <template v-slot:default>
      <el-form ref="form" :model="formModel" :inline="true">
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="dateEntries"
            type="daterange"
            :clearable="false"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
    </template>

    <template v-slot:toolbar>
      <qq-button type="primary" @click="onSearch()">搜索</qq-button>
      <qq-button type="danger" @click="onReset()">重置</qq-button>
      <slot></slot>
    </template>
  </qq-search>
</template>

<script>
import moment from "moment";
import { mapActions, mapState } from "vuex";
import { overwriteAll } from "qq/qq-core/object/upgrade";

import BaseForm from "qq/qq-ui/mixins/BaseForm";
import QqSearch from "qq/qq-ui/view/frame/Search";
import QqButton from "qq/qq-ui/view/base/Button";

import SearchModel from "@/crud-example/model/vo/Search";

export default {
  name: "StatisticResourceXxxSearch",

  mixins: [BaseForm],

  components: {
    QqSearch,
    QqButton
  },

  props: {
    defaultData: {
      type: SearchModel,
      required: true
    }
  },

  data() {
    this.defaultDataCache = null;

    return {
      dateEntries: null,
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
      this.formModel = overwriteAll(new SearchModel(), this.defaultDataCache);
      const { beginTime, endTime } = this.formModel;

      if (beginTime && endTime) {
        this.dateEntries = [beginTime, endTime];
      } else {
        this.dateEntries = [];
      }
    },

    reset() {
      this.initModel();
      this.$nextTick(() => this.clearValidate());
    },

    getData() {
      let beginTime = null;
      let endTime = null;

      if (this.dateEntries) {
        [beginTime, endTime] = this.dateEntries;
      }

      return overwriteAll(this.formModel, {
        beginTime,
        endTime
      });
    },

    onSearch() {
      this.$emit("search", this.formModel);
    },

    onReset() {
      this.reset();
    }
  }
};
</script>
