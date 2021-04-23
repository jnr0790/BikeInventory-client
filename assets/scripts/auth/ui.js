// require store
const store = require('./../store')

const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  const email = store.user.email

  $('#message').text(`${email} is signed in!`)
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#add-bike-btn').show()
  $('#sign-in').hide()
  $('#sign-in-btn').hide()
  $('#sign-up').hide()
  $('#sign-up-btn').hide()
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('You signed out!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
  $('form').trigger('reset')
  $('#change-pw').hide()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#sign-in-btn').show()
  $('#sign-up-btn').show()
}

const onChangeFormSuccess = function (response) {
  $('#message').text('You sucessfully changed your password!')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  $('form').trigger('reset')
  $('#change-pw').hide()
  $('#change-pw-btn').show()
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangeFormSuccess
}
