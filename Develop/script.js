// Assignment code here
var lowerchar
var upperchar
var numchar
var specialchar
var passwordchar

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  passwordchar = ""

  var lengthpassword = prompt("How many characters in your password?");
  console.log(lengthpassword);
  if (lengthpassword > 128) {
    alert("Must be less than 128 characters");
  } else if (lengthpassword < 8) {
    alert("Must be more than 8 characters");
  }
  lowerchar = confirm("Would you like to use lowercase?");
  upperchar = confirm("Would you like to use uppercase?");
  numchar = confirm("Would you like to use numeric?");
  specialchar = confirm("Would you like to use special characters?");
  if (!lowerchar && !upperchar && !numchar && !specialchar) {
    alert("Must be lowercase, uppercase, numeric or special characters");
  }
  if (lowerchar === true) {
    passwordchar += "abcdefghijklmnopqrstuvwxyz"
  }
  if (upperchar === true) {
    passwordchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (numchar === true) {
    passwordchar += "0123456789"
  }
  if (specialchar === true) {
    passwordchar += "!@#$%^&*"
    console.log(passwordchar);
  }

  var retVal = "";
  for (let i = 0, n = passwordchar.length; i < lengthpassword; i++) {
    retVal += passwordchar.charAt(Math.floor(Math.random() * n));

  }
  console.log(retVal);
  password.innerHTML = retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
