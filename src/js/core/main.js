// // import 'babel-polyfill'
import { config } from '../config/config'

import { generateToken } from '../portal/token'
import { getPortalSelf } from '../portal/portals'

import cookie from '../utils/cookie'

let token = cookie('dipper_token')
if (token === undefined || token === '') {
  $('.account').show()
  $('.dashboard').hide()
} else {
  $('.account').hide()
  $('.dashboard').show()
}

getPortalSelf(token).then(response => {
  if (response.ok) {
    response.json().then(json => {
      window.dipper.orgid = json.id
    })
  }
}).catch(err => {
  console.log(err)
})

$('#signout').on('click', function(e) {
  e.preventDefault()
  
  cookie('dipper_token', '')
  window.location.href='index.html'
})

// generateToken(config.portal.user, config.portal.password, 'referer', '', 'http://localhost/dipper/', 21600).then(response => {
//   if (response.ok) {
//     response.json().then(json => {
//       let expires = json.expires
//       let token = json.token

//       cookie('dipper_token', token, {
//         // path: '/',
//         expires: new Date(expires)
//       })
//     })
//   }
// }).catch(err => {
//   console.log(err)
// })

// getPortalSelf(cookie('dipper_token')).then(response => {
//   if (response.ok) {
//     response.json().then(json => {
//       let a = json;
//     })
//   }
// }).catch(err => {
//   console.log(err)
// })