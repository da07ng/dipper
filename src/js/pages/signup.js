import { config } from '../config/config'

import { generateToken } from '../portal/token'
// import { getPortalSelf } from '../portal/portals'

import cookie from '../utils/cookie'

$('.signup-form').submit(function(e) {
  e.preventDefault()

  let lastname = $('#lastname').val()
  let firstname = $('#firstname').val()
  let username = $('#username').val()
  let email = $('#email').val()
  let password = $('#password').val()

  let host = window.location.host
  let pathRegex = new RegExp(/\/[^\/]+$/);
  let locationPath = window.location.pathname.replace(pathRegex, '');
  let rootPath = host + locationPath;

  generateToken(username, password, 'referer', '', rootPath, 21600).then(response => {
    if (response.ok) {
      response.json().then(json => {
        let expires = json.expires
        let token = json.token
        let esriAuth=`{"portalApp":true,"email":"${username}","token":"${token}","culture":"zh-cn","region":null,"expires":${expires},"allSSL":false}`

        cookie('dipper_token', token, {
          // path: '/',
          expires: new Date(expires)
        })
        cookie('esri_auth', esriAuth, {
          // path: '/',
          expires: new Date(expires)
        })

        window.location.href='index.html'
      })
    }
  }).catch(err => {
    console.log(err)
  })
})
