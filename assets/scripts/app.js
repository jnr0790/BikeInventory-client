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
  $('#all-bikes').hide()
  $('#show-bike').hide()
  $('#close').hide()

  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-btn').on('click', authEvents.onSignUpBtn)
  $('#sign-up-cncl').on('click', authEvents.onSignUpCncl)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-in-btn').on('click', authEvents.onSignInBtn)
  $('#sign-in-cncl').on('click', authEvents.onSignInCncl)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangeForm)
  $('#change-pw-btn').on('click', authEvents.onChangeBtn)
  $('#change-pw-cncl').on('click', authEvents.onChangeCncl)

  // Bikes events
  $('#all-bikes').on('click', bikeEvents.onAllBikes)
  $('#add-bike').on('submit', bikeEvents.onAddBike)
  $('#add-bike-btn').on('click', bikeEvents.onAddBtn)
  $('#add-bike-cncl').on('click', bikeEvents.onAddCncl)
  $('#show-bike').on('submit', bikeEvents.onSingleBike)
  $('#bikes-display').on('click', '.delete-bike', bikeEvents.onDelBike)
  $('#bikes-display').on('submit', '.update-bike', bikeEvents.onUpdateBike)
  $('#bikes-display').on('click', '.update-bike-btn', bikeEvents.onUpdateBtn)
  $('#bikes-display').on('click', '.update-bike-cncl', bikeEvents.onUpdateCncl)
  $('#close').on('click', bikeEvents.onClose)
})
