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
      <p><span>Brand:</span> ${bike.brand}</p>
      <p><span>Model:</span> ${bike.model}</p>
      <p><span>Type:</span> ${bike.type}</p>
      <p><span>Color:</span> ${bike.color}</p>
      <p><span>ID:</span> ${bike._id}</p>

      <form class='update-bike' data-id=${bike._id}>
      <input name='bike[color]' type='text' placeholder='Enter New Color' data-id=${bike.color} require>
      <button class='btn'>Update Bike</button>
      <button class='update-bike-cncl btn'>Cancel</button>
      </form>

      <button class='view-bike btn' data-id=${bike._id}>View</button>
      <button class='update-bike-btn btn'>Update Bike</button>

      <button class='delete-bike btn' data-id=${bike._id}>Delete</button>

    </div>
    `
  })
  $('#bikes-display').html(bikesHtml)
  $('.update-bike').hide()
  $('#close').show()
  $('#bikes-display').show()
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
      <p><span>Brand:</span> ${bike.brand}</p>
      <p><span>Model:</span> ${bike.model}</p>
      <p><span>Type:</span> ${bike.type}</p>
      <p><span>Color:</span> ${bike.color}</p>

      <form class='update-bike' data-id=${bike._id}>
      <input name='bike[color]' type='text' placeholder='Enter New Color' data-id=${bike.color} require>
      <button class='btn'>Update Bike</button>
      <button class='update-bike-cncl btn'>Cancel</button>
      </form>

      <button class='update-bike-btn btn'>Update Bike</button>

      <button class='delete-bike btn' data-id=${bike._id}>Delete</button>
    </div>
    `

  $('#bikes-display').html(bikeHtml)
  $('.update-bike').hide()
  $('form').trigger('reset')
  $('#close').show()
  $('#bikes-display').show()
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
