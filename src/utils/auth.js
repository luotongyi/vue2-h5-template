

import Cookies from 'js-cookie'

const TOKEN_KEY_NAME = 'Accept-Token-vue2-55-template'

export function getToken() {
  return Cookies.get(TOKEN_KEY_NAME)
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY_NAME, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY_NAME)
}
