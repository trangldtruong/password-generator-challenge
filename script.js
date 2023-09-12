// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericCharacters = "0123456789";
    var specialCharacters =  '!@#$%^&*()_+-=[]{}|;:",./<>?';
    var passwordText = document.querySelector("#password"); 
    
  
    var passwordLength = window.prompt("Choose between 8 and 128 characters")
    if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter a number between 8 and 128.";
    } else {
    alert("Your password will have " + passwordLength + " characters");
    };
  
    var lowerCase = window.confirm("Do you want to include lowercase characters?");
    if (lowerCase === true) {
    passwordText += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
    } else 
  
    var upperCase = window.confirm("Do you want to include uppercase characters?");
    if (upperCase === true) {
    passwordText += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
    } else
  
    var numeric = window.confirm("Do you want to include numeric characters?");
    if (numeric === true) {
    passwordText += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    } else 
  
    var special = window.confirm("Do you want to include special characters?")
    if (special === true) {
    passwordText += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    } else if (lowerCase === false && upperCase === false && numeric === false && special === false) {
     return "Please select at least one character type"
  };
  //let passwordGenerated = ""
  //for (let i = 0, i < passwordLength.value, i++) {
      //passwordGenerated += password[Math.floor(Math.random()*(passwordLength.value))];
      //passwordText.value = password;}
  }
  

  


// Add event listener to generate button
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", generatePassword);

