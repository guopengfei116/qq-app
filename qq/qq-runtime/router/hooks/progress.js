import "nprogress/nprogress.css";
import nprogress from "nprogress/nprogress";

const start = (to, from, next) => {
  nprogress.start();
  next();
};

const done = () => nprogress.done();

export default [
  {
    name: "progressStart",
    pointcut: "beforeEach",
    executors: start
  },
  {
    name: "progressDone",
    pointcut: "afterEach",
    executors: done
  }
];
