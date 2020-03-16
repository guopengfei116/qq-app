<template>
  <article>
    <qq-body title="Main">
      <!-- search -->
      <search
        ref="searchRef"
        :default-data="defaultSearchModel"
        @search="onSearch($event)"
      >
        <qq-button type="secondary" @click="openAddDialog()">新增</qq-button>
      </search>

      <!-- table -->
      <contents :data="xxxList.data" v-loading="searchLoading">
        <template v-slot="{ row }">
          <!-- delete button -->
          <el-popconfirm title="确定删除吗？" @onConfirm="onDelete(row)">
            <template v-slot:reference>
              <qq-button type="text">删除</qq-button>
            </template>
          </el-popconfirm>
        </template>
      </contents>

      <!-- pagination -->
      <qq-pagination
        ref="paginationRef"
        :total="xxxList.total"
        @change="onPaginationChange"
      ></qq-pagination>
    </qq-body>

    <!-- add edit -->
    <add-edit-dialog></add-edit-dialog>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { overwrite } from "qq/qq-core/object/upgrade";

import SearchModel from "@/crud-example/model/vo/Search";
import AddEditModel from "@/crud-example/model/vo/AddEdit";

import QqBody from "qq/qq-ui/view/frame/Body";
import QqButton from "qq/qq-ui/view/base/Button";
import QqPagination from "qq/qq-ui/view/data/Pagination";
import Search from "./Search";
import Contents from "./Contents";
import AddEditDialog from "./AddEditDialog";

export default {
  name: "CrudExampleMainContainer",

  components: {
    QqBody,
    QqButton,
    QqPagination,
    Search,
    Contents,
    AddEditDialog
  },

  data() {
    return {
      searchLoading: false
    };
  },

  computed: {
    ...mapState("crudExample/main", ["defaultSearchModel", "xxxList"])
  },

  mounted() {
    this.search();
  },

  methods: {
    ...mapActions("crudExample/main", ["getXxxList", "openAddDialog"]),

    async search() {
      this.searchLoading = true;

      const keyword = this.$refs.searchRef.getData();
      const pagination = this.$refs.paginationRef.getData();
      const payload = { ...keyword, ...pagination };

      try {
        await this.getXxxList(payload);
      } finally {
        this.searchLoading = false;
      }
    },

    async onSearch() {
      this.search();
    },

    async onDelete(row) {
      try {
        await this.deleteXxx({ id: row.id });
        this.search();
      } catch {}
    },

    async onPaginationChange() {
      this.search();
    }
  }
};
</script>
