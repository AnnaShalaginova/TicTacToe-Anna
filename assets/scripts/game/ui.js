'use strict'

const onIndexSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // empty book-display element so we can replace whatever was there with the
  // books we get back from the API
  $('#book-display').html('')

  // loop through API response data
  responseData.books.forEach(game => {
    // build HTML element with data
    const gameHTML = (`
      <p>ID: ${game.id}</p>
      <br>
    `)

    // append bookHTML to our book-display element
    $('#game-display').append(gameHTML)
  })
}

const onShowSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // build HTML element with data for one book
  const gameHTML = (`
    <h4>Game ID: ${responseData.game.id}</h4>
    <br>
  `)

  // replace whatever was in the game-display element with our gameHTML
  $('#game-display').html(bookHTML)

  // reset all forms
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  // add success message to our delete-game-message element
  $('#delete-game-message').html('Game successfully deleted!')

  // empty out the game-display element in case it was displaying information
  // about the game we just deleted, replace with a message for the user to get
  // all the books again.
  $('#game-display').html('Game records have changed! Click the button again to see the list of all the games!')

  // add class for success messaging
  $('#delete-game-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-game-message').html('')
    $('#delete-game-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

// const onUpdateSuccess = function (responseData) {
//   // add success message to our update-book-message element
//   $('#update-book-message').html('You successfully updated the book')

// empty out the game-display element in case it was displaying information
// about the book we just updated, replace with a message for the user to get
// all the books again.
// $('#book-display').html('Books have changed! Click "Get All Books" again to see all the books.')
//
// // add class for success messaging
// $('#update-book-message').addClass('success')

// use setTimeout to allow the success message to stay for 5 seconds before
// the message is replaced with '' and the 'success' class is removed
// setTimeout(() => {
//   $('#update-book-message').html('')
//   $('#update-book-message').removeClass('success')
// }, 5000)

// reset all forms
//   $('form').trigger('reset')
// }

const onCreateSuccess = function () {
  // add success message to content
  $('#create-game-message').html('You started a new game!')

  // check if the game-display element is NOT just an empty string
  // if (!($('#game-display').html() === '')) {
  //   // if the element is NOT empty it is probably displaying the book
  //   // information, but we just created a new book!
  //   // we can add a message to let the users know they should request all of
  //   // the books again to see the newly created book included
  //   $('#book-display').html('Books have changed! Click "Get All Books" again to see all the books.')
  // }
  // $('#book-display').html('')

  // add class for success messaging
  $('#create-book-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#create-game-message').html('')
    $('#create-game-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  // onUpdateSuccess,
  onCreateSuccess,
  onError
}
