import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

/**
 * The Portal Self resource is used to return the view of the portal as seen by the current user, anonymous or logged in.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getPortalSelf(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/self'
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

/**
 * Lists available languages.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getAllLanguage(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/languages'
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

/**
 * Lists the available regions.
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
function getAllRegion(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/regions'
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

function getPortal(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId
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

function updatePortal(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/update'
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

function updateUserRole(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/updateUserRole'
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

function removeUsers(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/removeUsers'
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

function addResource(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/addResource'
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

function removeResource(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/removeResource'
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

function getAllUser(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/users'
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

function getAllResource(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/resources'
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

function checkServiceName(portalId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/isServiceNameAvailable'
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

function registerServer(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/portals/' + portalId + '/servers/register'
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
  getPortalSelf,
  getAllLanguage,
  getAllRegion,
  getPortal,
  updatePortal,
  updateUserRole,
  removeUsers,
  addResource,
  removeResource,
  getAllUser,
  getAllResource,
  checkServiceName,
  registerServer
}
