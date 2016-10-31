export default function cookie(name, value, options) {
  if (arguments.length < 2) return get(name)
  set(name, value, options)
}

function set(name, value, options = {}) {
  var str = `${encode(name)}=${encode(value)}`

  if (value == null) options.maxage = -1

  if (options.maxage) {
    options.expires = new Date(+new Date() + options.maxage)
  }

  if (options.path) str += '; path=' + options.path
  if (options.domain) str += '; domain=' + options.domain
  if (options.expires) str += '; expires=' + options.expires.toUTCString()
  if (options.secure) str += '; secure'

  document.cookie = str
}

function get(name) {
  var cookies = parse(document.cookie)
  return !!name ? cookies[name] : cookies
}

function parse(str) {
  var obj = {},
    pairs = str.split(/ *; */)

  if (!pairs[0]) return obj

  for (let pair of pairs) {
    pair = pair.split('=')
    obj[decode(pair[0])] = decode(pair[1])
  }
  return obj
}


function encode(value) {
  try {
    return encodeURIComponent(value);
  } catch (e) {
    return null
  }
}

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    return null
  }
}