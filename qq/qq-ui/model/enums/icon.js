import { entries2enums } from "qq/qq-core/object/recombination";

// 颜色
export const iconTuple = [
  ["el-icon-loading", "loading", "加载中"],
  ["el-icon-success", "success", "成功"],
  ["el-icon-error", "error", "失败"],
  ["el-icon-warning", "warn", "警告"]
];
export const iconOptionalTuple = [["", "全部"], ...iconTuple];

// 全值枚举，不含描述
export const iconEnum = entries2enums(iconTuple);
