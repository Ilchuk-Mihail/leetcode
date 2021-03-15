
// https://leetcode.com/problems/encode-and-decode-tinyurl/


const map = new Map()
const origin = 'http://tinyurl.com/'

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
  const code = Math.random().toString(36).substring(7)
  map.set(code, longUrl)

  return `${origin}${code}`
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
  const key = shortUrl.split(origin)

  return map.get(key[1])
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')))
