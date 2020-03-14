import validatorDict from "./validator-dict";

const validatorFactory = (matter, message, ...arg) => {
  return (rule, value, callback) => {
    if (!validatorDict[matter]) {
      const errorMsg = `This type of validator is not supported: ${matter}`;
      console.error(errorMsg);
    }

    if (validatorDict[matter](value, ...arg)) callback();
    else callback(new Error(message));
  };
};

export default validatorFactory;
