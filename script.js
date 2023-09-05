// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lowercase = window.confirm("Do you want a lowercase character?")

var uppercase = window.confirm("Do you want an uppercase character?")
var numeric = window.confirm("Do you want numeric character?")
var special = window.confirm("Do you want special character?")
var length = window.prompt("Choose between 8 and 128 characters")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
