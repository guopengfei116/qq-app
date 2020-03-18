<template>
  <mo-basic-layout :logo="logo" :header="header" :user="user" :menus="menus">
    <router-view></router-view>
  </mo-basic-layout>
</template>

<script>
export default {
  name: "CrudExample",

  provide: {},

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
