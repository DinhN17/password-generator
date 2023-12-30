// Assignment code here
function generatePassword() {

  //Object: passwordCriteria : store criteria and validate criteria
  var passwordCriteria = {
    length: 8,
    includeLowercase: true,
    includeUppercase: true,
    includeNumeric: true,
    includeSpecialCharacters: true,
    
    // validate method check if the input of length is > 8 and < 128
    validateInputLength: function(){
      if (this.length>=8 && this.length<=128) {
        return true;
      } else {
        return false;
      }
    },
    
    // validate method check if at least one character type should be selected
    validateCharSet: function(){
      if(this.includeLowercase ||
        this.includeUppercase ||
        this.includeNumeric ||
        this.includeSpecialCharacters) {
        return true;
      } else {
        return false;
      }
    }
  }

  //Object: password : store password and create password which satifies the criteria.
  var password = {
    //Char Set
    lowercaseSet: "abcdefghijklmnopqrstuvwxyz",
    uppercaseSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbericSet: "0123456789",
    // specialCharSet: "~!@#$%^&*()_+<>•`{}",
    specialCharSet: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    criteria: passwordCriteria,
    passwd: "",

    //Create password with this.criteria.
    createPassword: function() {
      
      // create a string (charSet) which includes all of character satisfies the criteria.
      var charSet = "";
      if (this.criteria.includeLowercase) {
        charSet = charSet + this.lowercaseSet;        
      };
      if (this.criteria.includeNumeric) {
        charSet = charSet + this.numbericSet;        
      };
      if (this.criteria.includeSpecialCharacters) {
        charSet = charSet + this.specialCharSet;        
      };
      if (this.criteria.includeUppercase) {
        charSet = charSet + this.uppercaseSet;        
      };
      
      //create passwd with length and chars from random character of charSet,
      // and only return the passwd which is validated by the criteria.
      do {
        this.passwd = "";
        for (let index = 0; index < this.criteria.length; index++) {
          const element = charSet[index];
          this.passwd += charSet.charAt(Math.floor(Math.random()*charSet.length));
        }
      } while (!this.validatePassword());

      return this.passwd;
    },

    // Validate method check if the passwd satisfies this.criteria by using regex test.
    validatePassword: function(){
      
      // Check if the passwword satisfies the given criteria.
      if ((this.criteria.includeLowercase && (!/[a-z]/.test(this.passwd))) ||
          (this.criteria.includeNumeric && (!/\d/.test(this.passwd))) ||
          (this.criteria.includeSpecialCharacters && (!/[ !"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]/.test(this.passwd))) ||
          (this.criteria.includeUppercase && (!/[A-Z]/.test(this.passwd)))
          ) {
            return false;        
      } else {
        return true;        
      };
    }
  }

  // get criteria from user
  alert("Please choose criteria for password : length, lowercase, uppercase, numeric, and/or special characters.");
  
  // get length of password and validate if 8 < length < 128 characters
  do {
    passwordCriteria.length = Number(prompt("Please set the length of password. It should be between 8 and 128 characters.", ""));
  } while (!passwordCriteria.validateInputLength());

  // confirm if password include lowercase, uppercase, special characters and validate if at least one character type was chosen.
  do {
    alert("Please choose at least one type: lowercase, uppercase, numeric and/or special characters.");
    passwordCriteria.includeLowercase = confirm("Do you want to include lowercase?");
    passwordCriteria.includeUppercase = confirm("Do you want to include uppercase?");
    passwordCriteria.includeNumeric = confirm("Do you want to include number?");
    passwordCriteria.includeSpecialCharacters = confirm("Do you want to include special characters?");
  } while (!passwordCriteria.validateCharSet());

  
  // set criteria for password
  password.criteria = passwordCriteria;
  
  // return password 
  return password.createPassword();
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
