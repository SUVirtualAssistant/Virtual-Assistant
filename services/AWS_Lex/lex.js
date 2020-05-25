import AWS        from 'aws-sdk/global'
import LexRuntime from 'aws-sdk/clients/lexruntime'

AWS.config = {
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.NEXT_PUBLIC_LEX_IDENTITY_POOL_ID
  }),
  region: process.env.NEXT_PUBLIC_LEX_REGION,
  apiVersions: {
    lexruntime: process.env.NEXT_PUBLIC_LEX_RUNTIME
  },
  lexruntime: {
    params: {
      botAlias: process.env.NEXT_PUBLIC_BOT_ALIAS,
      botName: process.env.NEXT_PUBLIC_BOT_NAME,
      accept: 'text/plain; charset=utf-8'
    }
  }
}

const lexInstance = new LexRuntime()

const _getSessionDetails = params =>
  new Promise((res, rej) => {
    lexInstance.getSession(params, (err, data) => {
      if (err) return rej(err)
      res(data)
    })
  })

const _startSession = params =>
  new Promise((res, rej) => {
    lexInstance.putSession(params, (err, data) => {
      if (err) return rej(err)
      res(data)
    })
  })

const _postText = params =>
  new Promise((res, rej) => {
    lexInstance.postText(params, (err, data) => {
      if (err) return rej(err)
      res(data)
    })
  })

export default {
  _getSessionDetails,
  _startSession,
  _postText
}
