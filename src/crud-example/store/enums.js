import actions from "@/crud-example/action/enums";

const state = {
  menus: []
};

const getters = {};

export const types = {
  SET_ENUMS: "SET_ENUMS"
};

const mutations = {
  [types.SET_ENUMS](state, payload) {
    state.menus = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
