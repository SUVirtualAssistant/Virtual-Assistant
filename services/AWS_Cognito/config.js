export const authConfig = {
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ['email', 'openid'],
    
    // we need the /autologin step in between to set the cookies properly,
    // we don't need that when signing out though
    redirectSignIn : process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType   : "token"
  }
}

export const cognitoConfig = {
  Auth: {
    region             : process.env.NEXT_PUBLIC_LEX_REGION,
    userPoolId         : process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    
    // Optional - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires
    //       a secure protocol.
    // example taken from https://aws-amplify.github.io/docs/js/authentication
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      // This should be the subdomain in production as the cookie should only
      // be present for the current site
      domain : process.env.AUTH_COOKIE_DOMAIN,
      // Optional - Cookie path
      path   : "/",
      // Optional - Cookie expiration in days
      expires: 7,
      // Optional - Cookie secure flag
      // Either true of false, indicating whether the cookie
      // transmission requires a secure protocol (https).
      secure : true
    }
  }
}
