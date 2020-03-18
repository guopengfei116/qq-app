import { entries2dict } from "qq/qq-core/object/recombination";

export default class Enums {
  constructor(enums = {}, tuple = []) {
    this.enums = enums;
    this.tuple = tuple;
  }

  /**
   * @method 对外统一工厂接口
   */
  static create(...arg) {
    if (arg.length === 1) {
      return this.createByV(...arg);
    }
    if (arg.length === 2) {
      return this.createByK(...arg);
    }
    if (arg.length === 3) {
      return this.createByKV(...arg);
    }
  }

  /**
   * @method 工厂
   *
   * 从一个对象列表中提取枚举成员和枚举值。
   *
   * @param source         Array<Object> 数据源
   * @param nameKey        string 从source中提取枚举成员时所用的key
   * @param [valueKey]     string 从source中提取枚举值时所用的key
   *
   * @return Enums         Enums 实例
   * */
  static createByKV(source, nameOfKey, valueOfKey) {
    if (!Array.isArray(source)) {
      const errorMsg = `参数不是Array: ${source}`;
      console.error(errorMsg);
    }

    const tuple = source.map(item => [item[nameOfKey], item[valueOfKey]]);
    const enums = entries2dict(tuple);
    Object.freeze(tuple);
    Object.freeze(enums);

    return new this(enums, tuple);
  }

  /**
   * @method 工厂
   *
   * 从一个对象列表中提取枚举成员，数据项作为枚举值。
   *
   * @param source         Array<Object> 数据源
   * @param nameKey        string 从source中提取枚举成员时所用的key
   *
   * @return Enums         Enums 实例
   * */
  static createByK(source, nameOfKey) {
    if (!Array.isArray(source)) {
      const errorMsg = `参数不是Array: ${source}`;
      console.error(errorMsg);
    }

    const tuple = source.map((item, i) => [item[nameOfKey], item]);
    const enums = entries2dict(tuple);
    Object.freeze(tuple);
    Object.freeze(enums);

    return new this(enums, tuple);
  }

  /**
   * @method 工厂
   *
   * 字符串列表转为枚举成员和枚举值相同的枚举数据结构。
   *
   * @param source       Array<string> 数据源
   *
   * @return Enums       Enums 实例
   * */
  static createByV(source) {
    if (!Array.isArray(source)) {
      const errorMsg = `参数不是Array: ${source}`;
      console.error(errorMsg);
    }

    const tuple = source.map(val => [val, val]);
    const enums = entries2dict(tuple);
    Object.freeze(tuple);
    Object.freeze(enums);

    return new this(enums, tuple);
  }
}
