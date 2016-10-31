import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function getItem(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId
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

function addComment(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/addComment'
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

function getAllComment(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/comments'
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

function getComment(itemId, commentId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/comments/' + commentId
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

function updateComment(itemId, commentId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/comments/' + commentId + '/update'
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

function deleteComment(itemId, commentId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/comments/' + commentId + '/delete'
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

function addRating(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/addRating'
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

function deleteRating(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/deleteRating'
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

function getRating(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/rating'
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

function relateditems(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/relateditems'
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

function shareItem(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/shareItem'
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

function unshareItem(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/unshareItem'
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

function getItemGroups(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/groups'
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

function getItemData(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/data'
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

function getItemPkinfo(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/item.pkinfo'
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

function getItemFileName(itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/items/' + itemId + '/info/fileName'
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
  getItem,
  addComment,
  getAllComment,
  getComment,
  updateComment,
  deleteComment,
  addRating,
  deleteRating,
  getRating,
  relateditems,
  shareItem,
  unshareItem,
  getItemGroups,
  getItemData,
  getItemPkinfo,
  getItemFileName
}