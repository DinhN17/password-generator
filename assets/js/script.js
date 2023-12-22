// Assignment code here
function generatePassword() {
  //Object password;
  var password = {
    //Char Set
    lowercaseSet: "abcdefghijklmnopqrstuvwxyz",
    uppercaseSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbericSet: "0123456789",
    specialCharSet: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    criteria: passwordCriteria,
    setCriteria: function(criteriaObj){
      this.criteria = criteriaObj;
    }
  }

  //password criteria object
  var passwordCriteria = {
    length: 8,
    isLowercase: true,
    isUppercase: true,
    isNumeric: true,
    isSpecialCharacters: true,
    validate: function(){
      if((length>8 && length<128) && 
      (isLowercase || isUppercase || isNumeric || isSpecialCharacters)) {
        return true;
      } else {
        return false;
      }
    }
  }

  //get criteria from user

  //validate criteria: 8 < length < 128 characters and at least one character type.

  //generate the random password

  //display password

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
