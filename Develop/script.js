// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthpassword = prompt("How many characters in your password?");
console.log(lengthpassword);
if (lengthpassword > 128) { 
  alert ("Must be less than 128 characters");
}
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
