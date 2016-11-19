import { config } from '../config/config'

import { getPortalSelf } from '../portal/portals'
import { getUser } from '../portal/community/users'

import cookie from '../utils/cookie'
import { formatTime } from '../utils/auxiliary'

getProfile()

function getProfile() {
  let token = cookie('dipper_token')
  if (token === undefined) {
    return
  }

  getPortalSelf(token).then(response => {
    if (response.ok) {
      response.json().then(json => {
        if (json.error) {
          if (json.error.code === 498) {
            window.location.href='signin.html'
          }
          return
        }

        let username = json.user.username

        getUser(username, token).then(response => {
          if (response.ok) {
            response.json().then(json => {
              let profileThumb = json.thumbnail || 'assets/images/icons/no-user-thumb.jpg'
              let username = json.username
              let fullname = json.firstName + json.lastName
              let email = json.email
              let role = json.role
              let created = formatTime(json.created)
              let lastLogin = formatTime(json.lastLogin)
              let groups = json.groups

              let profileHtml = `<div class="media">
                <a class="pull-left" href="#">
                  <img class="thumb media-object" src="${profileThumb}" alt="">
                </a>
                <div class="media-body">
                  <div class="container-fluid">
                    <div class="row">
                      <p class="text-overflow col-md-6">用户名：${username}</p>
                    </div>
                    <div class="row">
                      <p class="text-overflow col-md-6">姓名：${fullname}</p>
                    </div>
                    <div class="row">
                      <p class="text-overflow col-md-6">E-mail：${email}</p>
                    </div>
                    <div class="row">
                      <p class="text-overflow col-md-6">用户角色：${role}</p>
                    </div>
                    <div class="row">
                      <p class="text-overflow col-md-6">创建时间：${created}</p>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                      <p class="text-overflow col-md-6">最近登录时间：${lastLogin}</p>
                    </div>
                  </div>
                </div>
              </div>`

              let groupHtml = ''
              for (let i = 0; i < groups.length; i++) {
                let group = groups[i]
                let groupThumb = group.thumbnail || 'assets/images/icons/group-no-image.png'

                groupHtml += `<div class="media">
                  <div class="pull-left">
                    <a href="group.html?groupid=${group.id}" target="_blank">
                      <img id="null" class="media-object center-block small-object img-rounded" style="width:65px;height:65px" src="${groupThumb}"
                        alt="" />
                    </a>
                  </div>
                  <div class="media-body">
                    <div class="container-fluid">
                      <div class="row">
                        <p class="text-overflow col-md-6">群组名称：<a href="group.html?groupid=${group.id}" target="_blank">${group.title}</a></p>
                        <p class="text-overflow col-md-6">创建者：${group.owner}</p>
                      </div>
                      <div class="row">
                        <p class="text-overflow col-md-6">创建时间：${formatTime(group.created)}</p>
                        <p class="text-overflow col-md-6">更新时间：${formatTime(group.modified)}</p>
                      </div>
                      <div class="row">
                        <p class="text-overflow col-md-12">描述：${group.description}</p>
                      </div>
                    </div>
                  </div>
                </div>`
              }

              $('.profile-body').html(profileHtml)
              $('.group-body').html(groupHtml)
            }).catch(err => {
              console.log(err)
            })
          }
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }).catch(err => {
    console.log(err)
  })
}