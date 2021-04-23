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

const addBike = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/bikes/`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

const singleBike = function (id) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/bikes/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  showAll,
  addBike,
  singleBike
}
