const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // outputDir: "./www/",
  lintOnSave: true,
  publicPath: "./",
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    // const oneOfsMap = config.module.rule("scss").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("sass-resources-loader")
    //     .loader("sass-resources-loader")
    //     .options({
    //       resources: ["./src/styles/variable.scss"]
    //     })
    //     .end();
    // });
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://10.0.0.221:10010",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  }
};
