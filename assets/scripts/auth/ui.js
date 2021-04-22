// require store
const store = require('./../store')

const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
  }, 2000)
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  const email = store.user.email

  $('#message').text(`${email} is signed in!`)
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('You signed out!')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess
}
