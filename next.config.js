const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment variables for local development
        env: {
          IDP_DOMAIN: 'https://su-va-dev.auth.us-west-2.amazoncognito.com',
          USER_POOL_ID: 'us-west-2_pmpIkt4fs',
          USER_POOL_CLIENT_ID: '3qdm8afokrr3sh0hncl8fmded7',
          REDIRECT_SIGN_IN: 'http://localhost:3000/token',
          REDIRECT_SIGN_OUT: 'http://localhost:3000',
          AUTH_COOKIE_DOMAIN: 'localhost',
        },
        target : 'serverless',
        webpack: (config) => config
      }
  default:
      return {
        // environment variables for production
        env: {
          IDP_DOMAIN: 'https://su-va.auth.us-west-2.amazoncognito.com',
          USER_POOL_ID: 'us-west-2_FW5gvSf4b',
          USER_POOL_CLIENT_ID: '44om6p6r10gu7k4roc2q5lfgb1',
          REDIRECT_SIGN_IN: 'https://su-assistant.chat/token',
          REDIRECT_SIGN_OUT: 'https://su-assistant.chat',
          AUTH_COOKIE_DOMAIN: 'auth.su-assistant.chat',
        },
        target : 'serverless',
        webpack: (config) => config
      }
  }
}
