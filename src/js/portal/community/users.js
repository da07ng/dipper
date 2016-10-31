import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function getAllUser(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users'
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

function getUser(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName
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

function updateUser(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/update'
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

function deleteUser(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/delete'
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

function getAllNotification(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/notifications'
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

function getNotification(userName, notificationId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/notifications/' + notificationId
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

function deleteNotification(userName, notificationId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/notifications/' + notificationId + '/delete'
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

function getAllTag(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/tags'
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

function getAllInvitation(userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/invitations'
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

function getInvitation(userName, invitationId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/invitations/' + invitationId
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

function acceptInvitation(userName, invitationId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/invitations/' + invitationId + '/accept'
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

function declineInvitation(userName, invitationId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/users/' + userName + '/invitations/' + invitationId + '/decline'
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
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  getAllNotification,
  getNotification,
  deleteNotification,
  getAllTag,
  getAllInvitation,
  getInvitation,
  acceptInvitation,
  declineInvitation
}