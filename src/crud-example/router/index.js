import { overwrite } from "mo/object";

import ModuleMain from "@/crud-example/view/Main";
import SearchModel from "@/crud-example/model/vo/Search";

export default [
  {
    path: "/crud",
    component: ModuleMain,
    redirect: "/crud/example",
    children: [
      {
        name: "crudExample",
        path: "example",
        component() {
          return import(
            /* webpackChunkName: "crudExample" */
            "@/crud-example/view/main/Index"
          );
        },
        props({ query }) {
          const app = overwrite(new SearchModel(), query);
          return { app };
        }
      }
    ]
  }
];
