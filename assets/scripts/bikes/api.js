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

const delBike = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/bikes/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateBike = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/bikes/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  showAll,
  addBike,
  singleBike,
  delBike,
  updateBike
}
