import { Config as AWSconfig } from 'aws-sdk'
import LexRuntime              from 'aws-sdk/clients/lexruntime'

const config = new AWSconfig({
  accessKeyId    : process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region         : process.env.AWS_REGION,
  apiVersions    : {
    lexruntime: '2016-11-28'
  }
})

const lexInstance = new LexRuntime({
  region     : process.env.AWS_REGION,
  credentials: config.credentials
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
