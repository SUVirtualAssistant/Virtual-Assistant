import { Config as AWSconfig } from 'aws-sdk'
import LexRuntime              from 'aws-sdk/clients/lexruntime'
import getConfig               from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION } = publicRuntimeConfig

const config = new AWSconfig({
  accessKeyId    : AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region         : AWS_REGION,
  apiVersions    : {
    lexruntime: '2016-11-28'
  }
})

const lexInstance = new LexRuntime({
  region     : AWS_REGION,
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
