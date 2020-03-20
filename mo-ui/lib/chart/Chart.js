import { debounce } from "lodash";
import echarts from "echarts";

export default class Chart {
  constructor(container, baseOption) {
    const containerNode =
      typeof target === "string"
        ? document.getElementById(container)
        : container;
    this.containerNode = containerNode;
    this.baseOption = baseOption;

    this.init();
  }

  init() {
    window.addEventListener(
      "resize",
      debounce(() => this.echart.resize(), 1000)
    );
    this.echart = echarts.init(this.containerNode);
    this.render(this.baseOption);
  }

  render(option) {
    this.echart.setOption(option);
  }

  destroy() {
    this.echart.dispose();
  }
}
