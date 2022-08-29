import JSEncrypt from 'jsencrypt'

/**
 * RSA公钥加密
 * @param {*} pupblicKey
 * @param {*} data
 */
export function rsaEncrypt(pupblicKey, data) {
  var jse = new JSEncrypt()
  jse.setPublicKey(pupblicKey)
  return jse.encrypt(data)
}

/**
 * RSA公钥加密
 * @param {*} pupblicKey
 * @param {*} data
 */
export function rsaDecrypt(privateKey, data) {
  var jse = new JSEncrypt()
  jse.setPrivateKey(privateKey)
  return jse.decrypt(data)
}
