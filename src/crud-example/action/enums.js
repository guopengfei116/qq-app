import * as dao from "@/crud-example/dao/enums";
import { types } from "@/crud-example/store/enums";

export default {
  async getNavMenus({ commit }, payload) {
    try {
      const menus = await dao.getNavMenus(payload);
      commit(types.SET_ENUMS, menus);
    } catch (e) {
      console.error(e);
    }
  }
};
