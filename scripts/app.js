const textInput = document.getElementById('textInput');
const errorMessage = document.getElementById('error');
let isValidInput = textInput.checkValidity();

$("#textInput").keyup(function() {
  if (!textInput.validity.valid) {
    event.preventDefault();
    errorMessage.innerHTML = "please enter a valid username";
  } else {
    errorMessage.innerHTML = "";
  }
});
