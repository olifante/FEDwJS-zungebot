import fetch from "isomorphic-unfetch"
import { api, init } from './config'

const method = 'POST'

export default (path, data) => fetch(`${api}${path}`, {
  ...init,
  method,
  headers: {
    ...init.headers,
    'Content-Type': 'application/json'
  }
  body: data !== undefined
    ? JSON.stringify(data)
    : undefined
})
