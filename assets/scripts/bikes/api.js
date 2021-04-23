const config = require('../config')
const store = require('../store')

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
  add
}
