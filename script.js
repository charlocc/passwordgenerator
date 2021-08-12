// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacter = ["!", "#", "%", "$", "&", "+", "@", "(", ")"]
var finalArray = [];

// Generate a password according to a set a boundaries
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
  // Do you want to use special characters in your password? 
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
  // User must choose at least two specifications
    if (!lower && !upper && !numbers && !special){
      alert("Must select at least two specifications for the password (example: upper and lower case letters allowed")
      generatePassword();    
    } 
    if (lower && !upper && !numbers && !special){
      alert("Must select at least two specifications for the password (example: upper and lower case letters allowed")
      generatePassword();  
    } 
    if (!lower && upper && !numbers && !special){
      alert("Must select at least two specifications for the password (example: upper and lower case letters allowed")
      generatePassword();
    }  
    if (!lower && !upper && numbers && !special){
      alert("Must select at least two specifications for the password (example: upper and lower case letters allowed")
      generatePassword();
    } 
    if (!lower && !upper && !numbers && special){
      alert("Must select at least two specifications for the password (example: upper and lower case letters allowed")
      generatePassword();
    }
  // return string
}



// use a for loop index with the number for finalArray



// for (var i = length; i < 5; i++) {
  // This is the block of code that will run each time
//   console.log("This is the current value of i: " + i + ".");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



