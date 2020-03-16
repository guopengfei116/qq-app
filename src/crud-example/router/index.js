import ModuleMain from "@/crud-example/view/Main";

export default [
  {
    path: "/crud",
    component: ModuleMain,
    redirect: "/crud/example",
    children: [
      {
        name: "crudExample",
        path: "example",
        component: () =>
          import(
            /* webpackChunkName: "crudExample" */ "@/crud-example/view/main/Index"
          )
      }
    ]
  }
];
