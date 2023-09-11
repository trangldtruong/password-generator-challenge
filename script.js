// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText = lowerCaseCharacters + upperCaseCharacters + numericCharacters + specialCharacters;

  var passwordLength = window.prompt("Choose between 8 and 128 characters")
  for (let i=8; i<=128; i++); 
  passwordLength = Math.floor(Math.random()*passwordLength.length);

  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var lowerCase = window.confirm("Do you want to include lowercase characters?");
  if (lowerCase == true) {
  password += lowerCase[Math.floor(Math.random() * lowerCaseCharacters.length)];
  }
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCase = window.confirm("Do you want to include uppercase characters?");
  if (upperCase == true) {
  password += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
  }
  var numericCharacters = "0123456789";
  var numeric = window.confirm("Do you want to include numeric characters?");
  if (numeric == true) {
  password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }
  var specialCharacters =  "!@#$%^&*()";
  var special = window.confirm("Do you want to include special characters?")
  if (special == true) {
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
