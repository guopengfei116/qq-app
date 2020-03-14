import validatorFactory from "./validator-factory";

const ruleTemplate = {
  inputRequired: {
    required: true,
    message: "请输入",
    trigger: "blur"
  },
  selectRequired: {
    required: true,
    message: "请选择",
    trigger: "change"
  },
  arrayRequired: {
    type: "array",
    required: true,
    message: "请至少选择一个",
    trigger: "change"
  },
  stringRange: {
    message: "超出数量限制",
    trigger: "blur"
  },
  numberRange: {
    type: "number",
    message: "超出数值范围",
    trigger: "blur"
  }
};

// 校验规则 => 符合 Element 规范
const ruleDist = {
  inputRequired(message) {
    return { ...ruleTemplate.inputRequired, message };
  },
  selectRequired(message) {
    return { ...ruleTemplate.selectRequired, message };
  },
  arrayRequired(message) {
    return { ...ruleTemplate.arrayRequired, message };
  },
  stringRange(min, max, message) {
    return { ...ruleTemplate.stringRange, min, max, message };
  },
  numberRange(min, max, message) {
    return { ...ruleTemplate.numberRange, min, max, message };
  },
  domainValidator(message) {
    const validator = validatorFactory("domain", message);
    return { validator, trigger: "blur" };
  },
  ipValidator(message = "x.x.x.x(0~255)") {
    const validator = validatorFactory("ip", message);
    return { validator, trigger: "blur" };
  },
  pathValidator(message = "请填写合法的Path") {
    const validator = validatorFactory("path", message);
    return { validator, trigger: "blur" };
  },
  portValidator(message = "0~65535") {
    const validator = validatorFactory("port", message);
    return { validator, trigger: "blur" };
  }
};

export default ruleDist;
