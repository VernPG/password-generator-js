// DO NOT TOUCH Assignment Code
var generateBtn = document.querySelector("#generate");

// <!--ONLY TOUCH HERE-->
function generatePassword(){

  // this is called a prompt
  
  // var name = prompt("What is your name");

  // and this is called a confirm
  // var areThePackersAwesome =confirm("Are the Packers awesome?")
}



// DO NOT TOUCHWrite password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// DO NOT TOUCH Add event listener to generate button
generateBtn.addEventListener("click", writePassword);