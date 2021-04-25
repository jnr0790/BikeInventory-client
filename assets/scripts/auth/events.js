// require information from other files
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  // stop default page refresh after click
  event.preventDefault()
  // select the form that will be submitted with click of button
  const form = event.target
  // creating a javascript object from the forms values
  const data = getFormFields(form)
  // pass forms data to API
  api.signUp(data)
    // perform onSignInSuccess if successful
    .then(ui.onSignUpSuccess)
    // perform onError if not successful
    .catch(ui.onError)
}

const onSignUpBtn = function (event) {
  event.preventDefault()

  $('#sign-in').hide()
  $('#sign-up').show()
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignInBtn = function (event) {
  event.preventDefault()

  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onChangeForm = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changeForm(data)
    .then(ui.onChangeFormSuccess)
    .catch(ui.onError)
}

const onChangeBtn = function (event) {
  event.preventDefault()

  $('#change-pw').show()
}

const onChangeCncl = function (event) {
  event.preventDefault()

  $('#change-pw').hide()
  $('form').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangeForm,
  onChangeBtn,
  onChangeCncl,
  onSignUpBtn,
  onSignInBtn
}
