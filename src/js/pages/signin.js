import { config } from '../config/config'

import { generateToken } from '../portal/token'
// import { getPortalSelf } from '../portal/portals'

import cookie from '../utils/cookie'

$('.signin-form').submit(function(e) {
  e.preventDefault()

  let username = $('#username').val()
  let password = $('#password').val()

  generateToken(username, password, 'referer', '', 'http://localhost/dipper/', 21600).then(response => {
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
