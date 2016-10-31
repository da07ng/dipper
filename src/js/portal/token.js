import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

/**
 * Generate Token
 * @param  {[type]} username   [description]
 * @param  {[type]} password   [description]
 * @param  {[type]} client     referer/ip
 * @param  {[type]} ip         [description]
 * @param  {[type]} referer    [description]
 * @param  {[type]} expiration [description]
 * @return {[type]}            [description]
 */
function generateToken(username, password, client, ip, referer, expiration) {
  let url = config.portal.url + '/sharing/rest/generateToken'
  let params = {
    username: username,
    password: password,
    client: client,
    ip: ip,
    referer: referer,
    expiration: expiration,
    f: 'json'
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: searchParams(params)
  })
}

export { generateToken }
