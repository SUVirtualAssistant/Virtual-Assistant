require('dotenv').config()

const withImages = require('next-images')
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  distDir: 'build',
  env    : {
    // BOT_NAME: 'Hermes',
    // BOT_START_INTENT: 'BOT_BeginConversation',
    BOT_NAME        : 'Mercury',
    BOT_START_INTENT: 'Greeting',
    BOT_VERSION     : process.env.BOT_VERSION,

    LEX_RUNTIME: process.env.LEX_RUNTIME,
    LEX_REGION : process.env.LEX_REGION,

    LEX_IDENTITY_POOL_ID: process.env.LEX_IDENTITY_POOL_ID
  },
  webpack: (config) => {
    return config
  }
}

module.exports = withPlugins(
  [[withImages], [withFonts]],
  nextConfig
)
