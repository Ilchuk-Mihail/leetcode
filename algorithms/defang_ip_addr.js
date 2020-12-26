
// https://leetcode.com/problems/defanging-an-ip-address/


/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
  // return address.split('.').join('[.]')
  return address.replace(/\./g, '[.]')
}


console.log(defangIPaddr('1.1.1.1')) // '1[.]1[.]1[.]1'
console.log(defangIPaddr('255.100.50.0')) // '255[.]100[.]50[.]0'
