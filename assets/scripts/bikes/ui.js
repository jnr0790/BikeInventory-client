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
    <p>Brand: ${bike.brand}</p>
    <p>Model: ${bike.model}</p>
    <p>Type: ${bike.type}</p>
    <p>Color: ${bike.color}</p>
    <p>ID: ${bike._id}</p>
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

const onSingleBikeSuccess = function (responseData) {
  const bike = responseData.bike

  const bikeHtml = `
    <div id='bike-cont'>
    <p>Brand: ${bike.brand}</p>
    <p>Model: ${bike.model}</p>
    <p>Type: ${bike.type}</p>
    <p>Color: ${bike.color}</p>
    </div>`

  $('#bikes-display').html(bikeHtml)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onShowAllBikesSuccess,
  onAddBikeSuccess,
  onSingleBikeSuccess
}
