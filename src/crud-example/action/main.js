import { Message } from "element-ui";
import * as dao from "@/crud-example/dao/main";
import { types } from "@/crud-example/store/main";

export default {
  async getXxxList({ state, commit }, payload) {
    try {
      const data = await dao.getXxxList(payload);
      const { totalCount, results } = data;
      commit(types.SET_XXX_LIST, { total: totalCount, data: results });
    } catch (e) {
      console.error(e);
    }

    return state.xxxList;
  },

  async addXxx({ commit }, payload) {
    let result = false;

    try {
      const data = await dao.addXxx(payload);
      commit(types.ADD_APP_ALARM, data);
      commit(types.CLOSE_ADD_EDIT_DIALOG);

      result = true;
      Message.success("新增成功!");
    } catch (e) {
      console.error(e);
    }

    return result;
  },

  async updateXxx({ commit }, payload) {
    let result = false;

    try {
      const data = await dao.updateXxx(payload);
      commit(types.UPDATE_APP_ALARM, data);
      commit(types.CLOSE_ADD_EDIT_DIALOG);

      result = true;
      Message.success("修改成功!");
    } catch (e) {
      console.error(e);
    }

    return result;
  },

  async openAddDialog({ commit }, payload) {
    commit(types.OPEN_ADD_DIALOG);
  },

  async openEditDialog({ commit }, payload) {
    try {
      const host = await dao.getXxx(payload);
      commit(types.OPEN_EDIT_DIALOG, { data: host });
    } catch (e) {
      console.error(e);
    }
  },

  async submitAddEditDialog({ commit, dispatch, state }, payload) {
    const { mode } = state.addEditDialog;

    if (mode === "add") {
      await dispatch("addXxx", payload);
    } else {
      await dispatch("updateXxx", payload);
    }

    commit(types.CLOSE_ADD_EDIT_DIALOG);
  },

  async closeAddEditDialog({ commit }, payload) {
    commit(types.CLOSE_ADD_EDIT_DIALOG);
  }
};
