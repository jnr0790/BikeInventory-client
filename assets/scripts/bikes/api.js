const config = require('../config')
const store = require('../store')

const showAll = function () {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/bikes`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const add = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/bikes/`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  showAll,
  add
}
