import BaseOption from "./BaseOption";

export default class LineOption extends BaseOption {
  tooltip = {
    trigger: "axis"
  };

  legend = {
    data: []
  };

  grid = {
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px"
  };

  dataZoom = [
    {
      show: false,
      start: 0,
      end: 100
    },
    {
      type: "inside",
      start: 0,
      end: 100
    }
  ];

  xAxis = {
    type: "category",
    boundaryGap: false,
    data: []
  };

  yAxis = {
    type: "value"
  };

  series = [];

  constructor(...customOptions) {
    super();
    if (customOptions) {
      Object.assign(this, ...customOptions);
    }
  }
}
