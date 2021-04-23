const onError = function (err) {
  console.error(err)

  $('#bike-msg').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#bike-msg').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onAddBikeSuccess = function () {
  $('#bike-msg').text('A bike was added!')
  setTimeout(() => {
    $('#bike-msg').text('')
  }, 2000)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onAddBikeSuccess
}
