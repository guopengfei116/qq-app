<template>
  <article>
    <mo-body title="Main">
      <!-- search -->
      <search
        ref="searchRef"
        :default-data="defaultSearchModel"
        @search="onSearch($event)"
      >
        <mo-button type="secondary" @click="openAddDialog()">新增</mo-button>
      </search>

      <!-- table -->
      <contents :data="xxxList.data" v-loading="searchLoading">
        <template v-slot="{ row }">
          <!-- delete button -->
          <el-popconfirm title="确定删除吗？" @onConfirm="onDelete(row)">
            <template v-slot:reference>
              <mo-button type="text">删除</mo-button>
            </template>
          </el-popconfirm>
        </template>
      </contents>

      <!-- pagination -->
      <mo-pagination
        ref="paginationRef"
        :total="xxxList.total"
        @change="onPaginationChange"
      ></mo-pagination>
    </mo-body>

    <!-- add edit -->
    <add-edit-dialog></add-edit-dialog>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { overwrite } from "mo/object";

import SearchModel from "@/crud-example/model/vo/Search";
import AddEditModel from "@/crud-example/model/vo/AddEdit";

import Search from "./Search";
import Contents from "./Contents";
import AddEditDialog from "./AddEditDialog";

export default {
  name: "CrudExampleIndex",

  components: {
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
