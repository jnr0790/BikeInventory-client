'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-pw').hide()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-btn').on('click', authEvents.onSignUpBtn)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-in-btn').on('click', authEvents.onSignInBtn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangeForm)
  $('#change-pw-btn').on('click', authEvents.onChangeBtn)
  $('#change-pw-cncl').on('click', authEvents.onChangeCncl)
})
