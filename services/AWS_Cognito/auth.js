import { createGetServerSideAuth, createUseAuth } from 'aws-cognito-next'
import pems                                       from 'pems.json'

export *                                          from 'aws-cognito-next'
export const getServerSideAuth = createGetServerSideAuth({ pems })
export const useAuth = createUseAuth({ pems })
