import "nprogress/nprogress.css";
import nprogress from "nprogress/nprogress";

const progressStart = (to, from, next) => {
  nprogress.start();
  next();
};

const progressDone = () => nprogress.done();

export default [
  {
    pointcut: "beforeEach",
    executors: progressStart
  },
  {
    pointcut: "afterEach",
    executors: progressDone
  }
];
