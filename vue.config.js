const path = require("path");
const resolve = dir => path.join(__dirname, dir);

const isDevelopment = process.env.VUE_APP_ENV === "development";
const isProduction = process.env.VUE_APP_ENV === "production";

module.exports = {
  assetsDir: isDevelopment ? "" : "frontend",

  lintOnSave: true,

  productionSourceMap: isProduction ? false : true,

  configureWebpack: {
    resolve: {
      alias: {
        qq: resolve("qq")
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve("qq/qq-ui/assets/style/var.less")]
    }
  },

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
