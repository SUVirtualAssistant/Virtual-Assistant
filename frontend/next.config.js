const withImages = require('next-images')
const Dotenv = require('dotenv-webpack')

module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new Dotenv({ silent: true }))
    return config
  },
  ignoreTypes: ["svg"],
  experimental: {
    jsconfigPaths: true
  },
  env: {
    BOT_NAME: process.env.BOT_NAME,
    BOT_ALIAS: process.env.BOT_ALIAS,
  },
  /*
  // Will only be available on the server side
  serverRuntimeConfig: {
  },
   */
  // Will be available on both server and client
  publicRuntimeConfig: {
    // These get set at runtime
    MERCURY_DEV_POOL_ID: process.env.MERCURY_DEV_POOL_ID,
    MERCURY_DEV_POOL_ARN: process.env.MERCURY_DEV_POOL_ARN,

    COGNITO_DOMAIN: process.env.COGNITO_DOMAIN,

    AWS_REGION: process.env.AWS_REGION,
    AWS_IDENTITY_POOL: process.env.AWS_IDENTITY_POOL,

    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY
  }
})
