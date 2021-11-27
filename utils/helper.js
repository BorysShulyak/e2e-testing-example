const chance = require('chance').Chance()

const getPhoneNumber = function () {
  return chance.phone()
}

const getRandomNumber = function () {
  return Date.now().toString().slice(0, 10);
}

module.exports = {
  getPhoneNumber,
  getRandomNumber
}
