import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function getCommunity(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/self'
  let params = {
    culture: 'zh-cn',
    f: 'json',
    token: token
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: searchParams(params)
  })
}

function createGroup(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/createGroup'
  let params = {
    culture: 'zh-cn',
    f: 'json',
    token: token
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: searchParams(params)
  })
}

export {
  getCommunity,
  createGroup
}