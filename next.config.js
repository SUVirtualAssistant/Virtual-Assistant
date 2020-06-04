const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment variables for local development
        env: {
          IDP_DOMAIN: 'su-va-dev.auth.us-west-2.amazoncognito.com',
          USER_POOL_ID: 'us-west-2_pmpIkt4fs',
          USER_POOL_CLIENT_ID: '3qdm8afokrr3sh0hncl8fmded7',
          REDIRECT_SIGN_IN: 'http://localhost:3000/token',
          REDIRECT_SIGN_OUT: 'http://localhost:3000/',
          AUTH_COOKIE_DOMAIN: 'localhost',
        },
        target : 'serverless',
        webpack: (config) => {
          return config
        }
      }
  default:
      return {
        // environment variables for production
        env: {
          IDP_DOMAIN: 'auth.su-assistant.chat',
          USER_POOL_ID: 'us-west-2_fxRt1SBrY',
          USER_POOL_CLIENT_ID: '9u63af3khdtg86dnenaqc9lrn',
          REDIRECT_SIGN_IN: 'https://su-assistant.chat/token',
          REDIRECT_SIGN_OUT: 'https://su-assistant.chat/',
          AUTH_COOKIE_DOMAIN: '.su-assistant.chat',
        },
        target : 'serverless',
        webpack: config => {
          return config
        }
      }
  }
}
