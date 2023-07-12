const path = require("path");
const Encore = require("@symfony/webpack-encore");

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

const outputPath = 'dist';

Encore.cleanupOutputBeforeBuild()
  .setOutputPath(outputPath)
  .setPublicPath(`/${outputPath}/`)
  .addEntry('webpacked.bundle', "./src/webpacked.js")
  .disableSingleRuntimeChunk()
  .enableVueLoader(() => {}, {
    runtimeCompilerBuild: true,
  })
  .enablePostCssLoader()
  .enableSassLoader(
    /** @param {import("sass-loader").Options} options */
    (options) => {
      options.prependData = (loaderContext) => {
        // More information about available properties https://webpack.js.org/api/loaders/
        const { resourcePath, rootContext } = loaderContext;
        const relativePath = path.relative(rootContext, resourcePath);

        if (!/\/design\//.test(relativePath)) {
          return '@import "@design";';
        }

        return "";
      };
    },
  )
  .autoProvidejQuery()
  .autoProvideVariables({
    BX: "BX",
    "window.BX": "BX",
  })
  .addExternals({
    BX: "BX",
    jquery: "jQuery",
  })
//  .enableSourceMaps(!Encore.isProduction())
//  .enableVersioning(!Encore.isDevServer());

const config = Encore.getWebpackConfig();

config.node = {
  setImmediate: false,
  process: "mock",
  fs: "empty",
  net: "empty",
  tls: "empty",
  child_process: "empty",
};

config.module.noParse = /^(vue|vue-router|vuex|vuex-router-sync)$/;

module.exports = config;
