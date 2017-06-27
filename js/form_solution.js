$(document).ready(function() {
  $('#credit-card-form').on('submit', function(e) {
    e.preventDefault();
    var url, result;
    var $firstName = $('#first-name');
    var $lastName = $('#last-name');
    var $email = $('#email');
    var $occupation = $('#occupation');
    var $creditRating = $('#credit-rating');
    
    var firstName = $firstName.val();
    var lastName = $lastName.val();
    var email = $email.val();
    var occupation = $occupation.val();
    var creditRating = $creditRating.val();
    
    var errors = [];
    if (stringIsValid(firstName) === false) {
      errors.push('FIRST NAME');
    }
    if (stringIsValid(lastName) === false) {
      errors.push('LAST NAME');
    }
    if (emailIsValid(email) === false) {
      errors.push('EMAIL');
    }
    if (stringIsValid(occupation) === false) {
      errors.push('OCCUPATION');
    }
    if (creditRatingIsValid(creditRating) === false || 
    creditRatingIsGoodEnough(creditRating)  === false) {
      errors.push('CREDIT RATING');
    }
    
    if (errors.length > 0) {
      showFormErrors(errors);
      return;
    }
    hideFormErrors();
    url = 'www.FrankCard.com/apply?' +
      'firstName=' + firstName + 
      '&lastName=' + lastName +
      '&email=' + email +
      '&occupation=' + occupation +
      '&creditRating=' + creditRating;
    result = sendRequest(url);
    if (result.response === 'ERROR') {
      showServerError();
    }
    if (result.response === 'SUCCESS') {
      showSuccess();
    }
    
  });
});

function stringIsValid(str) {
  if (str.length > 0 && str.length < 256) {
    return true;
  }
  return false;
}

function emailIsValid(email) {
  var splitEmail = email.split('@');
  if (splitEmail.length > 1) {
    return true;
  }
  return false;
}

function creditRatingIsValid(rating) {
  var ratingAsNumber = parseInt(rating, 10);
  if (rating >= 300 && rating <= 850) {
    return true;
  }
  return false;
}

function creditRatingIsGoodEnough(rating) {
  var ratingAsNumber = parseInt(rating, 10);
  if (rating > 550) {
    return true;
  }
  return false;
}

function showFormErrors(errors) {
  $('.errors-list').empty();
  for (var i = 0; i < errors.length; i++) {
    $('.errors-list').append(
      '<li> There is an error with: ' + errors[i] + '.</li>');
  }
  $('.form-error').removeClass('hidden');
}

function hideFormErrors() {
  $('.errors-list').empty();
  $('.form-error').addClass('hidden');
}

function showSuccess() {
  $('.errors-list').empty();
  $('.form-error').addClass('hidden');
  $('.server-error').addClass('hidden');
  $('.form-success').removeClass('hidden');
}

function showServerError() {
  $('.errors-list').empty();
  $('.form-error').addClass('hidden');
  $('.form-success').addClass('hidden');
  $('.server-error').removeClass('hidden');
}

function sendRequest(url) {
  // normall we'd do an AJAX request to a URL...
  // but instead let's just "send" a url, and get a random response back.
  console.log('sending to url: ' + url + '...');
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  var result = { response: null, message: null };
  if (diceRoll === 1 || diceRoll === 6) {
    result.response = 'ERROR'
    result.message = 'Server Error!';
  } else if (diceRoll > 1 || diceRoll < 6) {
    result.response = 'SUCCESS';
    result.message = '';
  }
  console.log('result is: ', result)
  return result;
}