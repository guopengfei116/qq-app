<template>
  <!-- nav item -->
  <el-menu-item
    v-if="!menu.children || !menu.children.length"
    :index="menu.id.toString()"
  >
    <router-link :to="{ path: menu.url, query: { menuid: menu.id } }">
      <i class="el-icon-document" />
      <span>{{ menu.text }}</span>
    </router-link>
  </el-menu-item>

  <!-- recursion -->
  <el-submenu v-else :index="String(menu.id)">
    <template slot="title" class="icon-s-platform">
      <i class="el-icon-menu" />
      <span>{{ menu.text }}</span>
    </template>
    <qq-nav-item
      v-for="subMenu in menu.children"
      :menu="subMenu"
      :key="subMenu.id"
    ></qq-nav-item>
  </el-submenu>
</template>

<script>
import { Submenu, MenuItem } from "element-ui";

export default {
  name: "QqNavItem",

  components: {
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem
  },

  props: {
    menu: {
      type: Object,
      required: true,
      validator(prop) {
        return ["id", "text", "url"].every(property =>
          Object.prototype.hasOwnProperty.call(prop, property)
        );
      }
    }
  }
};
</script>
