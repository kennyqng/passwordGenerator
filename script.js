// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwLength = 0;
var chars = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOP";
var number = "1234567890";
var special = "!@#$%^&*()-+<>";

var buildpw = "";

function criteria(){
  
  // requesting user to choose password length at least 8 characters and no more than 128 characters
  while(pwLength < 8 || pwLength > 128){
    pwLength = prompt ("Please choose password length from 8 to 128 characters.");
  }
  // requesting criteria through prompt to choose lowercase, uppercase, numeric, and/or special characters
  while (chars == ""){
    var lowerSelected = confirm("Password criteria: lowercase?");
    if (lowerSelected == true){
        chars += lower;
    }
    var upperSelected = confirm("Password criteria: uppercase?");
    if (upperSelected == true){
      chars += upper;
    }
    var numberSelected = confirm("Password criteria: number?");
    if (numberSelected == true){
      chars += number;
    }
    var specialSelected = confirm("Password criteria: special characters?");
    if (specialSelected == true){
      chars += special;
    }
    // input should be validated and at least one character type should be selected
    if (chars == ""){alert("You must select at least 1 criteria.");}
  }
}

// generate password from criteria created
function generatePassword() {
  
  // calls for criteria
  criteria();
  // building password
  for (var x = 0; x < (pwLength); x++)
  {
    var i = Math.floor(Math.random() * chars.length);
    buildpw += chars.charAt(i);
  }
  
  return buildpw;
}

// Write password to the #password input
function writePassword() {
  // resets password
  buildpw = "";

  var password = generatePassword();
  // password is written to the page
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
