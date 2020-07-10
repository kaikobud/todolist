//tell webpack to only output a single javascript bundle(chunk js + app js)
module.exports = {
  chainWebpack: (config) => {
    // Disable splitChunks plugin, all the code goes into one bundle.

    config.optimization.splitChunks().clear();
    config.module
      .rule("css")
      .oneOf("vue")
      .uses.delete("extract-css-loader");
  },
};
