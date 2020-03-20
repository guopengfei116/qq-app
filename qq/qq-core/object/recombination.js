// 无副作用的对象结构重组

/**
 * [[v1, v2]] -> { v1: v2, v2: v1 }
 * @entries Array<tuple(v1, v2)>
 * @return Object
 */
export const entries2enums = entries => {
  return entries.reduce((enums, entry) => {
    enums[(enums[entry[0]] = entry[1])] = entry[0];
    return enums;
  }, {});
};

/**
 * [[v1, v2, v3]] -> { v1: v2 } || { v1: v3 } || { v2: v3 } || 任意两值映射
 * @entries Array<tuple(v1, v2, v3, ...)>
 * @return Object
 */
export const entries2dict = (entries, keyIndex = 0, valueIndex = 1) => {
  return entries.reduce((enums, entry) => {
    enums[entry[keyIndex]] = entry[valueIndex];
    return enums;
  }, {});
};

/**
 * [{id: 1, ...}, {id: 2, ...}] -> {1: {id: 1, ...}, 2: {id: 2, ...}}
 * @list Array<Object>
 * @primaryKey string
 * @return Object
 */
export const list2dict = (list, primaryKey) => {
  return list.reduce((dict, item) => {
    dict[item[primaryKey]] = item;
    return dict;
  }, {});
};

export const toArray = arr => (Array.isArray(arr) ? arr : [arr]);
