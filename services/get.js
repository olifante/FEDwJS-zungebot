import fetch from "isomorphic-unfetch"
import { api, init } from './config'

export default path => fetch(`${api}${path}`, init)
