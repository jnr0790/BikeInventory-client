const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onAllBikes = function (event) {
  event.preventDefault()
  api.showAll()
    .then(ui.onShowAllBikesSuccess)
    .catch(ui.onError)
}

const onAddBike = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.add(formData)
    .then(ui.onAddBikeSuccess)
    .catch(ui.onError)
}

const onAddBtn = function (event) {
  event.preventDefault()

  $('#add-bike').show()
  $('form').trigger('reset')
}

const onAddCncl = function (event) {
  event.preventDefault()

  $('#add-bike').hide()
  $('form').trigger('reset')
}

module.exports = {
  onAllBikes,
  onAddBike,
  onAddBtn,
  onAddCncl
}
