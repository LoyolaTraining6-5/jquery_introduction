// 1. Add a document ready
$(document).ready(function() {
  // 2. Add an event on the submit of the form
  $('#credit-card-form').on('submit', function(e) {
    // 3. Since form submit's refresh the page, preventDefault
    e.preventDefault();
    
    // 4. Get every <input /> tag you want to validate
    var url, result;
    var $firstName = $('#first-name');
    var $lastName = $('#last-name');
    var $email = $('#email');
    var $occupation = $('#occupation');
    var $creditRating = $('#credit-rating');
    
    // 5. Get the value of each <input /> with jQuery's .val() function
    var firstName = $firstName.val();
    var lastName = $lastName.val();
    var email = $email.val();
    var occupation = $occupation.val();
    var creditRating = $creditRating.val();
    
    // 6. Check each text value one by one, yes this tedious!
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
    
    // 7. If we have even one error, let's show our errors then RETURN
    if (errors.length > 0) {
      showFormErrors(errors);
      return;
    }
    
    // 8. If we don't have errors, hide the erros block, then let's
    //    send our request!
    hideFormErrors();
    url = 'www.FrankCard.com/apply?' +
      'firstName=' + firstName + 
      '&lastName=' + lastName +
      '&email=' + email +
      '&occupation=' + occupation +
      '&creditRating=' + creditRating;
    result = sendRequest(url);
    
    // 9. Depending on if we get an error or success, let's 
    //    show the appropriate markup
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