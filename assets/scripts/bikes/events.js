const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onAllBikes = function (event) {
  api.showAll()
    .then(ui.onShowAllBikesSuccess)
    .catch(ui.onError)
}

const onAddBike = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.addBike(formData)
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

const onSingleBike = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.singleBike(formData.bike.id)
    .then(ui.onSingleBikeSuccess)
    .catch(ui.onError)
}

const onDelBike = function (event) {
  const id = $(event.target).data('id')

  api.delBike(id)
    .then(onAllBikes)
    .then(ui.onDelBikeSuccess)
    .catch(ui.onError)
}

const onUpdateBike = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).data('id')

  api.updateBike(id, formData)
    .then(ui.onUpdateBikeSuccess)
    .catch(ui.onError)
}

const onUpdateBtn = function (event) {
  event.preventDefault()

  $('.update-bike').show()
  $('.update-bike-btn').hide()
  $('form').trigger('reset')
}

const onUpdateCncl = function (event) {
  event.preventDefault()

  $('.update-bike-btn').show()
  $('.update-bike').hide()
  $('form').trigger('reset')
}

const onClose = function (event) {
  event.preventDefault()
  $('#bikes-display').hide()
  $('#close').hide()
}

const onViewBike = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.singleBike(id)
    .then(ui.onSingleBikeSuccess)
    .catch(ui.onError)
}

module.exports = {
  onAllBikes,
  onAddBike,
  onAddBtn,
  onAddCncl,
  onSingleBike,
  onDelBike,
  onUpdateBike,
  onUpdateBtn,
  onUpdateCncl,
  onClose,
  onViewBike
}
