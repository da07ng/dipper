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

        cookie('dipper_token', token, {
          // path: '/',
          expires: new Date(expires)
        })
        
        $('.account').show()
        $('.dashboard').hide()
      })
    }
  }).catch(err => {
    console.log(err)
  })
})