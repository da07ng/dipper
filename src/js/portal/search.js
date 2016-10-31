import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function search(q, start, num, sortField, sortOrder) {
  let url = config.portal.url + '/sharing/rest/search'
  let params = {
    q: q,
    start: start,
    num: num,
    sortField: sortField,
    sortOrder: sortOrder,
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

export { search }