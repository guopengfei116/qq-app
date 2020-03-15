import { overwrite } from "qq/qq-core/object/upgrade";
import actions from "@/crud-example/action/main";

import SearchModel from "@/crud-example/model/vo/Search";
import AddEditModel from "@/crud-example/model/vo/AddEdit";

const addEditMode = ["add", "edit"];
const addEditTitle = ["创建XXX", "更新XXX"];

const defaultSearchModel = overwrite(new SearchModel(), {});
Object.freeze(defaultSearchModel);

const defaultAddEditModel = overwrite(new AddEditModel(), {});
Object.freeze(defaultAddEditModel);

const state = {
  defaultSearchModel,
  defaultAddEditModel,

  xxxList: {
    data: [],
    total: 0
  },

  addEditDialog: {
    visible: false,
    mode: addEditMode[0],
    title: addEditTitle[0],
    data: defaultAddEditModel
  }
};

const getters = {};

export const types = {
  UP_DEFAULT_SEARCH_MODEL: "UP_DEFAULT_SEARCH_MODEL",
  UP_DEFAULT_ADD_EDIT_MODEL: "UP_DEFAULT_ADD_EDIT_MODEL",
  SET_XXX_LIST: "SET_XXX_LIST",
  OPEN_ADD_DIALOG: "OPEN_ADD_DIALOG",
  OPEN_EDIT_DIALOG: "OPEN_EDIT_DIALOG",
  CLOSE_ADD_EDIT_DIALOG: "CLOSE_ADD_EDIT_DIALOG"
};

const mutations = {
  [types.UP_DEFAULT_SEARCH_MODEL](state, payload) {
    state.defaultSearchModel = payload;
  },

  [types.SET_XXX_LIST](state, payload) {
    state.xxxList = payload;
  },

  [types.OPEN_ADD_DIALOG](state, payload = {}) {
    state.addEditDialog = {
      ...state.addEditDialog,
      visible: true,
      mode: addEditMode[0],
      title: addEditTitle[0],
      ...payload
    };
  },

  [types.OPEN_EDIT_DIALOG](state, payload = {}) {
    state.addEditDialog = {
      ...state.addEditDialog,
      visible: true,
      mode: addEditMode[1],
      title: addEditTitle[1],
      ...payload
    };
  },

  [types.CLOSE_ADD_EDIT_DIALOG](state, payload = {}) {
    state.addEditDialog = {
      ...state.addEditDialog,
      visible: false,
      ...payload
    };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
