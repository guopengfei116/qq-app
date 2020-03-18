import MainLayout from "qq/qq-test/view/MainLayout";

export default [
  {
    name: "qqTest",
    path: "/qq/test",
    component: MainLayout,
    children: [
      {
        name: "qqTestHttp",
        path: "http",
        component: () =>
          import(/* webpackChunkName: "qqHttp" */ "qq/qq-test/view/HttpMain")
      },
      {
        name: "qqTestUi",
        path: "ui",
        component: () =>
          import(/* webpackChunkName: "qqTestUi" */ "qq/qq-test/view/UiMain")
      }
    ]
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "qqNotFound" */ "qq/qq-ui/view/page/404")
  }
];
