module.exports = {
  root: true,

  // 运行环境
  env: {
    browser: true, // 需要浏览器 API
    es6: true,     // 需要 ES6 全局变量
    node: true
  },

  // 扩展规则与配置
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  // 解析器选项
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",   // 使用 ES 模块
    ecmaVersion: 10         // ES10 语法支持
  },

  // 扩展全局变量, false表示允许使用，但不允许覆盖它们
  globals: {
    process: false
  },

  // Lint规则: 忽略(0, off) 警告(1, warn) 报错(2, error)
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unsafe-finally": "off",
    "no-empty": "off",
    "no-unused-vars": "off",
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
