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
    if (chars == ""){alert("You must select at least 1 criteria.");}
  }
}

// Write password to the #password input
function generatePassword() {
  
  criteria();
  for (var x = 0; x < (pwLength); x++)
  {
    var i = Math.floor(Math.random() * chars.length);
    buildpw += chars.charAt(i);
  }
  
  return buildpw;
}
function writePassword() {
  buildpw = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;
  
}

while(pwLength < 8 || pwLength > 128){
  pwLength = prompt ("Please choose password length from 8 to 128 characters.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
