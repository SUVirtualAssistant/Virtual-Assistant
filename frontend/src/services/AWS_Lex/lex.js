import AWS from 'aws-sdk'
import LexRuntime                                          from 'aws-sdk/clients/lexruntime'

AWS.config.region = process.env.LEX_REGION
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.LEX_IDENTITY_POOL_ID
});

// const botConfig = new AWSconfig({
//   region     : process.env.LEX_REGION,
//   apiVersions: {
//     lexruntime: process.env.LEX_RUNTIME
//   },
//   lexruntime: {
//     region: process.env.LEX_REGION,
//     credentials: botCredentials
//   }
// })

const lexInstance = new LexRuntime({
  apiVersion: process.env.LEX_RUNTIME,
  region     : process.env.LEX_REGION,
})

const _startSession = params => (
  new Promise((res, rej) => {
    lexInstance.putSession(params, (err, data) => {
      if (err)
        return rej(err)
      res(data)
    })
  })
)

const _postText = params => (
  new Promise((res, rej) => {
    lexInstance.postText(params, (err, data) => {
      if (err)
        return rej(err)
      res(data)
    })
  })
)

export default {
  _startSession,
  _postText
}
