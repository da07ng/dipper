import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function features(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/features'
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

function analyze(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/features/analyze'
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

function generate(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/features/generate'
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
  features,
  analyze,
  generate
}