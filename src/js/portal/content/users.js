import 'isomorphic-fetch'

import { config } from '../../config/config'
import { searchParams } from '../util'

function getContent(userName, folderId, start, num, token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/'
  if (folderId === '/') {
    url += userName
  } else {
    url += userName + '/' + folderId
  }

  let params = {
    start: start,
    num: num,
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

function addRelationship(userName, folderId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/addRelationship'
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

function deleteRelationship(userName, folderId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/deleteRelationship'
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

function createFolder(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/createFolder'
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

function createService(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/createService'
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

function deleteFolder(userName, folderId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + folderId + '/delete'
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

function addItem(userName, folderId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + folderId + '/addItem'
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

function addPart(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + itemId + '/addPart'
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

function Parts(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + itemId + '/Parts'
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

function commit(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + itemId + '/commit'
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

function cancel(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + itemId + '/cancel'
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

function publishItem(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/publish'
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

function exportItem(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/export'
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

function shareItems(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/shareItems'
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

function unshareItems(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/unshareItems'
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

function moveItems(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/moveItems'
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

function deleteItems(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/moveItems'
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

function getItemStatus(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/' + itemId + '/status'
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

function getItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId
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

function updateItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/update'
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

function reassignItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/reassignitem'
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

function deleteItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/delete'
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

function moveItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/move'
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

function shareItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/share'
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

function unshareItem(userName, itemId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/content/users/' + userName + '/items' + itemId + '/unshare'
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
  getContent,
  addRelationship,
  deleteRelationship,
  createFolder,
  createService,
  deleteFolder,
  addItem,
  addPart,
  Parts,
  commit,
  cancel,
  publishItem,
  exportItem,
  shareItems,
  unshareItems,
  moveItems,
  deleteItems,
  getItemStatus,
  getItem,
  updateItem,
  reassignItem,
  deleteItem,
  moveItem,
  shareItem,
  unshareItem
}