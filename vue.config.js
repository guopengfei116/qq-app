const path = require("path");

const isDevelopment = process.env.VUE_APP_ENV === "development";
const isProduction = process.env.VUE_APP_ENV === "production";

module.exports = {
  assetsDir: isDevelopment ? "" : "frontend",

  lintOnSave: true,

  productionSourceMap: isProduction ? false : true,

  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    host: "0.0.0.0",
    port: 7070,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true
      }
    }
  }
};
