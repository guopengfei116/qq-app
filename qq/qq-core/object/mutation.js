import { isArray, isObjectLike, forIn } from "lodash";
import { camelCase, snakeCase, kebabCase } from "lodash";

// 无副作用的对象变体

/**
 * 转驼峰命名 { a_b: 1, c-d: 2 } -> { aB: 1, cD: 2 }
 * @obj Array | Object
 * @return Array | Object
 */
export const keyCamelify = obj => {
  const result = isArray(obj) ? [] : {};

  forIn(obj, (val, key) => {
    if (isObjectLike(val)) {
      result[camelCase(key)] = keyCamelify(val);
    } else {
      result[camelCase(key)] = val;
    }
  });

  return result;
};

/**
 * 转蛇形命名 { aB: 1, c-d: 2 } -> { a_b: 1, c_d: 2 }
 * @obj Array | Object
 * @return Array | Object
 */
export const keySnakeify = obj => {
  const result = isArray(obj) ? [] : {};

  forIn(obj, (val, key) => {
    if (isObjectLike(val)) {
      result[snakeCase(key)] = keySnakeify(val);
    } else {
      result[snakeCase(key)] = val;
    }
  });

  return result;
};

/**
 * 转串形命名 { aB: 1, c-d: 2 } -> { a-b: 1, c-d: 2 }
 * @obj Array | Object
 * @return Array | Object
 */
export const keyKebabify = obj => {
  const result = isArray(obj) ? [] : {};

  forIn(obj, (val, key) => {
    if (isObjectLike(val)) {
      result[kebabCase(key)] = keyKebabify(val);
    } else {
      result[kebabCase(key)] = val;
    }
  });

  return result;
};
