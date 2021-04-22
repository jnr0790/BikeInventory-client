// require store
const store = require('./../store')

// onError function for message when form doesn't go through properly
const onError = function (err) {
  // log any errors that occur
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

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess
}
