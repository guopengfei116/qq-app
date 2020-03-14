const unitChain = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
const unitDict = unitChain.reduce((dict, unit, index) => {
  dict[unit] = unitChain[index + 1];
  return dict;
}, {});

/**
 * 小于1024用本单位，大于1024升级单位
 * @param mb { number } 兆字节
 */
export const upgrade = (size, unit) => {
  const currentUnit = unit.toUpperCase();
  const upgradeUnit = unitDict[currentUnit];

  return size < 1024
    ? `${size}${upgradeUnit}`
    : `${Math.round((size / 1024) * 100) / 100}${upgradeUnit}`;
};
