import { isNil, has } from "lodash";

// 有副作用的原对象增强

export const overwrite = (target, ...sources) => {
  sources.forEach(source => {
    for (let key in source) {
      if (!isNil(source[key]) && has(target, key)) {
        target[key] = source[key];
      }
    }
  });

  return target;
};

export const overwriteLikeTrue = (target, ...sources) => {
  sources.forEach(source => {
    for (let key in source) {
      if (source[key] && has(target, key)) {
        target[key] = source[key];
      }
    }
  });

  return target;
};

export const overwriteLikeFalse = (target, ...sources) => {
  sources.forEach(source => {
    for (let key in source) {
      if (!source[key] && has(target, key)) {
        target[key] = source[key];
      }
    }
  });

  return target;
};

export const overwriteAll = (target, ...sources) => {
  sources.forEach(source => {
    for (let key in source) {
      if (has(target, key)) {
        target[key] = source[key];
      }
    }
  });

  return target;
};
