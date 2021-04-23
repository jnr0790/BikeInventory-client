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

      <button class='update-bike-btn'>Update Bike</button>
      <form class='update-bike' data-id=${bike._id}>
        <input name='bike[brand]' type='text' placeholder='Enter New Brand' data-id=${bike.brand}>
        <input name='bike[model]' type='text' placeholder='Enter New Model' data-id=${bike.model}>
        <input name='bike[type]' type='text' placeholder='Enter New Type' data-id=${bike.type}>
        <input name='bike[color]' type='text' placeholder='Enter New Color' data-id=${bike.color}>
        <button class='btn'>Update Bike</button>
        <button class='update-bike-cncl' class='btn'>Cancel</button>
      </form>

      <button class='delete-bike' data-id=${bike._id}>Delete</button>

    </div>
    `
  })
  $('#bikes-display').html(bikesHtml)
  $('.update-bike').hide()
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

      <button class='update-bike-btn'>Update Bike</button>
      <form class='update-bike' data-id=${bike._id}>
        <input name='bike[brand]' type='text' placeholder='Enter New Brand' data-id=${bike.brand}>
        <input name='bike[model]' type='text' placeholder='Enter New Model' data-id=${bike.model}>
        <input name='bike[type]' type='text' placeholder='Enter New Type' data-id=${bike.type}>
        <input name='bike[color]' type='text' placeholder='Enter New Color' data-id=${bike.color}>
        <button class='btn'>Update Bike</button>
        <button class='update-bike-cncl' class='btn'>Cancel</button>
      </form>

      <button class='delete-bike' data-id=${bike._id}>Delete</button>
    </div>
    `

  $('#bikes-display').html(bikeHtml)
  $('.update-bike').hide()
  $('form').trigger('reset')
}

const onDelBikeSuccess = function (responseData) {
  $('#bike-msg').text('Bike successfully deleted')
  setTimeout(() => {
    $('#bike-msg').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateBikeSuccess = function () {
  $('#bike-msg').text('Bike successfully updated')
  setTimeout(() => {
    $('#bike-msg').text('')
  }, 2000)
  $('form').trigger('reset')
  $('.update-bike').hide()
  $('.update-bike-btn').show()
}

module.exports = {
  onError,
  onShowAllBikesSuccess,
  onAddBikeSuccess,
  onSingleBikeSuccess,
  onDelBikeSuccess,
  onUpdateBikeSuccess
}
