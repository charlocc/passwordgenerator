// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacter = ["!", "#", "%", "$", "&", "+", "@", "(", ")"]
var finalArray = [];

// Generate a password according to a set of boundaries
function generatePassword() {
  // How many characters do you want in your password? 
  var passwordLength = prompt("How many characters do you want in your password?");
  // The number typed by the user becomes the length variable as a number (instead of a string)
  var length = Number (passwordLength);
    // If the user types a number lower than 8 or greater than 128, they will be redirected to type a new number according to these parameters.
    if (length < 8 || length > 128) {
      alert("Password must be longer than 8 characters and shorter than 128 characters.");
      generatePassword();
    } 
  // Do you want to use lower case letters in your password? 
  var lower = confirm("Do you want to use lower case letters in your password?");
  // Do you want to use upper case letters in your password? 
  var upper = confirm("Do you want to use upper case letters in your password?");
  // Do you want to use numbers in your password? 
  var numbers = confirm("Do you want to use numbers in your password?");
  // Confirm user special characters in your password 
  var special = confirm("Do you want to use special characters in your password?");

    if (lower){
      finalArray = finalArray.concat(lowerCase);
    }
    if (upper){
      finalArray = finalArray.concat(upperCase); 
    } 
    if (numbers){
      finalArray = finalArray.concat(numeric);
    }
    if (special){
      finalArray = finalArray.concat(specialCharacter);
    }

  // Specify that user must choose at least one specification
    if (!lower && !upper && !numbers && !special){
      alert("Please select at least one specification for the password")
      generatePassword();    
    } 

  // Produce a random password according to the user specifications
    var string = "";
    for (var i = 0; i < length; i++) {
      string = string + finalArray[Math.floor(Math.random()*finalArray.length)];
    }
  return string
}




