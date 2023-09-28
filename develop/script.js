
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var allLettersNumbersSymbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz123456789@#$%^&*-+=";
  var passwordLength = 10;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(
      Math.random() * allLettersNumbersSymbols.length
    );
    password += allLettersNumbersSymbols.substring(
      randomNumber,
      randomNumber + 1
    );
  }
  return password

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
