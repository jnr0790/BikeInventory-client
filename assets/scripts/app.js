'use strict'
const authEvents = require('./auth/events')

const bikeEvents = require('./bikes/events')

$(() => {
  $('#change-pw').hide()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#add-bike').hide()
  $('#add-bike-btn').hide()

  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-btn').on('click', authEvents.onSignUpBtn)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-in-btn').on('click', authEvents.onSignInBtn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangeForm)
  $('#change-pw-btn').on('click', authEvents.onChangeBtn)
  $('#change-pw-cncl').on('click', authEvents.onChangeCncl)

  // Bikes events
  $('#add-bike').on('submit', bikeEvents.onAddBike)
  $('#add-bike-btn').on('click', bikeEvents.onAddBtn)
  $('#add-bike-cncl').on('click', bikeEvents.onAddCncl)
})
