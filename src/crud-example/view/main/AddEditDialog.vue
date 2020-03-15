<template>
  <el-dialog
    v-bind="addEditDialog"
    :close-on-click-modal="false"
    @opened="onOpend"
    @close="onClose"
    width="600px"
  >
    <!-- Form -->
    <add-edit-form
      ref="form"
      :default-data="addEditDialog.data"
    ></add-edit-form>

    <!-- Toolbar -->
    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button @click="onClose">
          取 消
        </el-button>
        <el-button @click="onSubmit" type="primary">
          确 定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";

import AddEditModel from "@/crud-example/model/vo/AddEdit";
import AddEditForm from "./AddEditForm";

export default {
  name: "CrudExampleAddEditDialog",

  components: {
    AddEditForm
  },

  data() {
    this.addEditForm = null;

    return {};
  },

  computed: {
    ...mapState("crudExample/main", ["addEditDialog"])
  },

  methods: {
    ...mapActions("crudExample/main", [
      "closeAddEditDialog",
      "submitAddEditDialog"
    ]),

    onOpend() {
      this.addEditForm = this.$refs["form"];
    },

    onClose() {
      this.addEditForm.clearValidate();
      this.closeAddEditDialog();
      this.$emit("close");
    },

    async onSubmit() {
      await this.$confirm(
        "本次修改数据仅从该年度本月开始生效，请确认是否提交？"
      );
      await this.addEditForm.validate();
      console.log("数据校验通过，准备提交数据");

      const data = this.addEditForm.getData();
      await this.submitAddEditDialog(data);

      this.closeAddEditDialog();
      this.$emit("submit-successful", data);
    }
  }
};
</script>
