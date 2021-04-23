const onError = function (err) {
  console.error(err)

  $('#bike-msg').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#bike-msg').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onShowAllBikesSuccess = function (responseData) {
  const bikes = responseData.bikes

  let bikesHtml = ''

  bikes.forEach(bike => {
    bikesHtml += `
    <div id='bike-cont'>
    <h5>Brand: ${bike.brand}</h5>
    <h5>Model: ${bike.model}</h5>
    <p>Type: ${bike.type}</p>
    <p>Color: ${bike.color}</p>
    </div>`
  })
  $('#bikes-display').html(bikesHtml)
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
  onShowAllBikesSuccess,
  onAddBikeSuccess
}
