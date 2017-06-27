// 1. Add a document ready

  // 2. Add an event on the submit of the form

    // 3. Since form submit's refresh the page, preventDefault
    
    // 4. Get every <input /> tag you want to validate
    
    // 5. Get the value of each <input /> with jQuery's .val() function

    // 6. Check each text value one by one, yes this tedious!
    
    // 7. If we have even one error, let's show our errors then RETURN
    
    // 8. If we don't have errors, hide the erros block, then let's
    //    send our request!
    
    // 9. Depending on if we get an error or success, let's 
    //    show the appropriate markup

    // END OF FUNCTION IN DOCUMENT READY
  });
});

// 6A - Write a function to check if a string is valid!
function stringIsValid(str) {

}

// 6B - Write a function to check if an email is valid!
function emailIsValid(email) {

}

// 6C - Write a function to check if a credit rating is valid
function creditRatingIsValid(rating) {
  var ratingAsNumber = parseInt(rating, 10);
  // code goes below here...
}

// 6D - Write a function to check if a credit rating is good enough


// 7A - Write a function tos how form errors
function showFormErrors(errors) {

}

// 8A - Write a function to hide form errors
function hideFormErrors() {

}

// 9A - Write a function to show the success block
function showSuccess() {

}

// 9B - Write a function to show the server error block
function showServerError() {

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