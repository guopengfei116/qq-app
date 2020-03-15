<template>
  <qq-basic-layout :logo="logo" :header="header" :user="user" :menus="menus">
    <router-view></router-view>
  </qq-basic-layout>
</template>

<script>
import QqBasicLayout from "qq/qq-ui/view/layout/BasicLayout";

export default {
  name: "CrudExample",

  provide: {},

  components: {
    QqBasicLayout
  },

  data() {
    return {
      logo: "QQ",
      header: {
        app: "CRUD Example"
      },
      user: {
        name: "crud",
        tooltip: "example"
      },
      menus: [
        {
          id: 1,
          text: "baidu",
          url: "/baidu.com"
        },
        {
          id: 2,
          text: "163",
          url: "/163.com"
        },
        {
          id: 3,
          text: "example",
          url: "/crud"
        }
      ]
    };
  }
};
</script>
