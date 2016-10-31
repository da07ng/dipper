// import 'babel-polyfill'
import { config } from '../config/config'

import { generateToken } from '../portal/token'
import { getPortalSelf } from '../portal/portals'

import cookie from '../utils/cookie'

generateToken(config.portal.user, config.portal.password, 'referer', '', 'http://localhost/dipper/', 21600).then(response => {
  if (response.ok) {
    response.json().then(json => {
      let expires = json.expires
      let token = json.token

      cookie('dipper_token', token, {
        // path: '/',
        expires: new Date(expires)
      })
    })
  }
}).catch(err => {
  console.log(err)
})

getPortalSelf(cookie('dipper_token')).then(response => {
  if (response.ok) {
    response.json().then(json => {
      let a = json;
    })
  }
}).catch(err => {
  console.log(err)
})