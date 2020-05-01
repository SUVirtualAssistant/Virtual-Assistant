const withImages = require('next-images')
const withFonts = require('next-fonts')
const path = require('path')

module.exports = withFonts(
  withImages({
    ignoreTypes: ["svg"],
    experimental: {
      jsconfigPaths: true
    },
    env: {
      // BOT_NAME: ,
      // BOT_ALIAS: ,
    },
    // Will only be available on the server side
    serverRuntimeConfig: {
    },
    // Will be available on both server and client
    publicRuntimeConfig: {
    },
    // analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    // analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    // bundleAnalyzerConfig: {
    //   server: {
    //     analyzerMode: 'static',
    //     reportFilename: './bundles/server.html'
    //   },
    //   browser: {
    //     analyzerMode: 'static',
    //     reportFilename: './bundles/client.html'
    //   }
    // }
    webpack(config, options) {
      return config
    }
  })
)
