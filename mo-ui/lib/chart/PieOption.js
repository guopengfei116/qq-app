import BaseOption from "./BaseOption";

export default class PieOption extends BaseOption {
  title = {
    text: "",
    left: "center",
    top: 0,
    textStyle: {
      color: "#bbb"
    }
  };

  tooltip = {
    trigger: "item",
    formatter: "{a}</br>{b} : {c} ({d}%)"
  };

  legend = {
    orient: "vertical",
    right: 0,
    data: []
  };

  grid = {
    top: "10px",
    left: "10px",
    right: "10px",
    bottom: "10px"
  };

  series = [];

  constructor(...customOptions) {
    super();
    if (customOptions) {
      Object.assign(this, ...customOptions);
    }
  }
}
