import { config } from '../config/config'

import { portalQueryConfig } from '../portal/config'
import { getPortalSelf } from '../portal/portals'
import { getCommunity, createGroup } from '../portal/community/community'
import { groupSearch, getGroup, updateGroup, getGroupUser, addUserToGroup } from '../portal/community/groups'
import { userSearch } from '../portal/community/users'

import cookie from '../utils/cookie'
import { formatTime, subString } from '../utils/auxiliary'

const PAGESIZE = 100

// $(function() {
let $pagination = $('.pagination')
var defaultOpts = {
  first: '首页',
  prev: '上一页',
  next: '下一页',
  last: '尾页'
}
$pagination.twbsPagination(defaultOpts)
// })

getMyGroupList(1)
getPublicGroupList(1)

$('#multiselect_rightAll').on('click', function() {
  var multiSelectHtml = $('#multiselect_to').html()

  $('#multiselect_to').html(multiSelectHtml + $('#user_select').html())
  $('#user_select').html('')
})

$('#multiselect_rightSelected').on('click', function() {
  var selected = $('#user_select').find("option:selected")
  var unselected = $('#user_select option').not(':selected')

  var selectedHtml = $('#multiselect_to').html()
  for (var i = 0; i < selected.length; i++) {
    selectedHtml += selected[i].outerHTML;
  }
  $('#multiselect_to').html(selectedHtml)

  var unselectedHtml = '';
  for (var i = 0; i < unselected.length; i++) {
    unselectedHtml += unselected[i].outerHTML;
  }
  $('#user_select').html(unselectedHtml)
})

$('#multiselect_leftSelected').on('click', function() {
  var selected = $('#multiselect_to').find("option:selected")
  var unselected = $('#multiselect_to option').not(':selected')

  var selectedHtml = $('#user_select').html()
  for (var i = 0; i < selected.length; i++) {
    selectedHtml += selected[i].outerHTML;
  }
  $('#user_select').html(selectedHtml)

  var unselectedHtml = '';
  for (var i = 0; i < unselected.length; i++) {
    unselectedHtml += unselected[i].outerHTML
  }
  $('#multiselect_to').html(unselectedHtml)
})

$('#multiselect_leftAll').on('click', function() {
  var userSelectHtml = $('#user_select').html()

  $('#user_select').html(userSelectHtml + $('#multiselect_to').html())
  $('#multiselect_to').html('')
})

$('.save-invite').on('click', function() {
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  let groupid = $('#current-groupid').val()
  let selectedUsers = $('#multiselect_to').find("option")

  let users = []
  for (let i = 0; i < selectedUsers.length; i++) {
    let username = selectedUsers[i].value
    users.push(username)
  }

  addUserToGroup(groupid, users.join(',') , token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          return
        }

        $('#inviteUserModal').modal('hide')

        $('#my-group-list').html('')
        $('#public-group-list').html('')
        getMyGroupList(1)
        getPublicGroupList(1)
      })
    }
  }).catch(err => {
    console.log(err)
  })
})

$('.add-group').on('click', function() {
  $('#groupModal .modal-title').text('新建群组')
  $('#current-edittype').val('add')
  $('#current-groupid').val('')
  $('#group-name').val('')
  $('#group-summary').val('')
})

$('.save-group').on('click', function() {
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  let groupName = $('#group-name').val()
  let groupSummary = $('#group-summary').val()
  let tags = '组织'
  let access = 'public'

  let edittype = $('#current-edittype').val()
  if (edittype === 'add') {
    createGroup(groupName, groupSummary, tags, access, token).then(response => {
      if (response.ok) {
        response.json().then(json => {
          if (json.error) {
            return
          }

          if (json.success) {
            $('#groupModal').modal('hide')
            $('.loading').show()

            getMyGroupList(1)
            getPublicGroupList(1)
          }
        })
      }
    }).catch(err => {
      console.log(err)
    })
  } else {
    let groupid = $('#current-groupid').val()

    updateGroup(groupid, groupName, groupSummary, tags, access, token).then(response => {
      if (response.ok) {
        response.json().then(json => {
          if (json.error) {
            return
          }

          if (json.success) {
            $('#groupModal').modal('hide')
            $('.loading').show()

            getMyGroupList(1)
            getPublicGroupList(1)
          }
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }


})

function getMyGroupList(page) {
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  getCommunity(token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        $('.loading').hide()
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let myGroups = json.groups
        for (let i = 0; i < myGroups.length; i++) {
          let group = myGroups[i];

          (function(group, insertNode) {
            showGroupList(group, insertNode)
          })(group, 'my-group-list')
        }
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function getPublicGroupList(page) {
  let orgid = window.dipper.orgid
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  let query = 'ispublic:true'
  let start = page * PAGESIZE - (PAGESIZE - 1)

  if (orgid !== undefined) {
    query = `${query} orgid:${orgid}`

    queryGroup(query, start)
  } else {
    getPortalSelf(cookie('dipper_token')).then(response => {
      if (response.ok) {
        response.json().then(json => {
          query = `${query} orgid:${json.id}`

          queryGroup(query, start)
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

function queryGroup(query, start) {
  groupSearch(query, start, PAGESIZE, 'created', 'asc', cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let publicGroups = json.results
        for (let i = 0; i < publicGroups.length; i++) {
          let group = publicGroups[i];

          (function(group, insertNode) {
            showGroupList(group, insertNode)
          })(group, 'public-group-list')
        }
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function showGroupList(group, insertNode) {
  getGroupUser(group.id, cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let admins = json.admins
        let memberHtml = '组内成员：'
        for (let i = 0; i < admins.length; i++) {
          if (memberHtml === '') {
            memberHtml += admins[i];
          } else {
            memberHtml += '、' + admins[i];
          }
        }

        let users = json.users;
        for (let j = 0; j < users.length; j++) {
          if (memberHtml === '') {
            memberHtml += users[j]
          } else {
            memberHtml += '、' + users[j]
          }
        }

        let tags = group.tags
        let tagHtml = ''
        for (let k = 0; k < tags.length; k++) {
          tagHtml += '<a href="#" class="label label-default">' + tags[k] + '</a>'
        }

        let groupHtml = `<div class="col-md-6 group-item group-${group.id}">
          <div class="channel-item">
            <div class="bd">
              <div class="row" style="padding-bottom: 10px">
                <div class="col-md-7"><a href="groupItem.html?groupid=${group.id}">${group.title}</a></div>
                <div class="col-md-5 group-operation">
                  <a class="invite-user" data-groupid="${group.id}" data-toggle="modal" data-target="#inviteUserModal">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>邀请
                  </a>
                  <a class="edit-group" data-groupid="${group.id}" data-toggle="modal" data-target="#groupModal">
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 编辑
                  </a>
                  <a class="delete-group" data-groupid="${group.id}" href="#">
                    <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> 删除
                  </a>
                </div>
              </div>
              <div class="block">
                <a href="groupItem.html?groupid=${group.id}"></a>
                <div class="pic">
                  <a href="groupItem.html?groupid=${group.id}"></a>
                  <div class="pic-wrap">
                    <a href="groupItem.html?groupid=${group.id}"></a>
                    <a href="groupItem.html?groupid=${group.id}">
                      <img src="assets/images/icons/group-no-image.jpg">
                    </a>
                  </div>
                </div>
                <p class="group">${memberHtml}</p>
              </div>
              <div class="row" style="padding: 10px 0 0 0">
                <div class="col-md-6 tags"></div>
                <div class="col-md-6 createinfo">${group.owner} 创建于 ${formatTime(group.created)}</div>
              </div>
            </div>
          </div>
        </div>`

        $(`#${insertNode}`).append(groupHtml)

        $(`#${insertNode} .invite-user`).unbind('click').on('click', function(e) {
          let orgid = window.dipper.orgid
          let token = cookie('dipper_token')
          if (token === undefined) {
            return
          }

          let groupid = $(e.target).data('groupid')
          $('#current-groupid').val(groupid)

          getPortalSelf(cookie('dipper_token')).then(response => {
            if (response.ok) {
              response.json().then(json => {
                let query = `orgid:${json.id} -username:"${json.user.username}" -username:esri_nav -username:system_publisher`

                queryUser(query, 1)
              })
            }
          }).catch(err => {
            console.log(err)
          })
        })

        $(`#${insertNode} .edit-group`).unbind('click').on('click', function(e) {
          let token = cookie('dipper_token')
          if (token === undefined) {
            return
          }

          let groupid = $(e.target).data('groupid')
          $('#current-edittype').val('edit')
          $('#current-groupid').val(groupid)

          getGroup(groupid, token).then(response => {
            if (response.ok) {
              response.json().then(json => {
                if (json.error) {
                  return
                }

                $('#groupModal .modal-title').text('修改群组')
                $('#group-name').val(json.title)
                $('#group-summary').val(json.snippet)

              })
            }
          }).catch(err => {
            console.log(err)
          })
        })
      })
    }
  }).catch(err => {
    console.log(err)
  })
}

function queryUser(query, start) {
  userSearch(query, start, 100, 'fullname', 'asc', cookie('dipper_token')).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let users = json.results
        let userListHtml = '';
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          userListHtml += `<option value="${user.username}">${user.fullName}</option>`
        }

        $('#user_select').html(userListHtml)
      })
    }
  }).catch(err => {
    console.log(err)
  })
}
