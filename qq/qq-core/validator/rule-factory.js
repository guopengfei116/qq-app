import ruleDict from "./rule-dict";

const ruleFactory = (matter, message, ...arg) => {
  if (!ruleDict[matter]) {
    const errorMsg = `This type of rule is not supported: ${matter}`;
    console.error(errorMsg);
  }

  return ruleDict[matter](message, ...arg);
};

export default ruleFactory;
