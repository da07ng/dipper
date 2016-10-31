import 'isomorphic-fetch'

import { config } from '../config/config'
import { searchParams } from './util'

function getAllGroup(token) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups'
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

function getGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId
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

function updateGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/update'
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

function reassignGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/reassign'
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

function deleteGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/delete'
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

function joinGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/join'
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

function inviteGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/invite'
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

function leaveGroup(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/leave'
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

function removeGroupMember(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/removeUsers'
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

function getGroupUser(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/users'
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

function getGroupAllApplication(groupId) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/applications'
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

function getGroupApplication(groupId, userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/applications/' + userName
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

function acceptGroupApplication(groupId, userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/applications/' + userName + '/accept'
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

function declineGroupApplication(groupId, userName) {
  if (token === undefined) {
    token = ''
  }

  let url = config.portal.url + '/sharing/rest/community/groups/' + groupId + '/applications/' + userName + '/decline'
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
  getAllGroup,
  getGroup,
  updateGroup,
  reassignGroup,
  deleteGroup,
  joinGroup,
  inviteGroup,
  leaveGroup,
  removeGroupMember,
  getGroupUser,
  getGroupAllApplication,
  getGroupApplication,
  acceptGroupApplication,
  declineGroupApplication
}