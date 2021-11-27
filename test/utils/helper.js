const chance = require('chance').Chance()

const getRandomUserName = function () {
  let userName = chance.name() + (new Date().getMilliseconds() + '').slice(-8)
  userName = userName.length > 15 ? userName.slice(0, 14) : userName
  return userName
}

const getPhoneNumber = function () {
  return chance.phone()
}

const getRandomNumber = function () {
  return chance.natural({ min: 100000, max: 999999 })
}

module.exports = {
  getPhoneNumber,
  getRandomUserName,
  getRandomNumber
}
