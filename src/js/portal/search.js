import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

/**
 * Search
 * @param  {[type]} q         [description]
 * @param  {[type]} start     [description]
 * @param  {[type]} num       [description]
 * @param  {[type]} sortField [description]
 * @param  {[type]} sortOrder [description]
 * @param  {[type]} token     [description]
 * @return {[type]}           [description]
 */
function search(q, start, num, sortField, sortOrder, token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/search'
  let params = {
    q: q,
    start: start,
    num: num,
    sortField: sortField,
    sortOrder: sortOrder,
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

export { search }
