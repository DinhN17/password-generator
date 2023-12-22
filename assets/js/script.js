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
    
    // validate if 8 < length < 128
    validateLength: function(){
      if (this.length>8 && this.length<128) {
        return true;
      } else {
        return false;
      }
    },
    
    // validate if at least one character type should be selected
    validateCharSet: function(){
      if(this.isLowercase || this.isUppercase || this.isNumeric || this.isSpecialCharacters) {
        return true;
      } else {
        return false;
      }
    }
  }

  //get criteria from user
  alert("Please choose criteria for password : length, lowercase, uppercase, numeric, and/or special characters ");
  //get length of password and validate if 8 < length < 128 characters
  do {
    passwordCriteria.length = Number(prompt("Please set the length of password. It should be between 8 and 128 characters", ""));
  } while (!passwordCriteria.validateLength());

  //confirm if password include lowercase, uppercase, special characters and validate if at least one character type was chosen.
  do {
    alert("Please choose at least one type: lowercase, uppercase, numeric and/or special charaters.");
    passwordCriteria.isLowercase = confirm("Do you want to include lowercase?");
    passwordCriteria.isUppercase = confirm("Do you want to include uppercase?");
    passwordCriteria.isNumeric = confirm("Do you want to include number?");
    passwordCriteria.isSpecialCharacters = confirm("Do you want to include special charaters?");
  } while (!passwordCriteria.validateCharSet());

  console.log(passwordCriteria);



  //confirm if password include uppercase
  //confirm if password include special characters

  // and at least one character type.

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
