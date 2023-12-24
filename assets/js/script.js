// Assignment code here
function generatePassword() {
  //Object password;
  var password = {
    //Char Set
    lowercaseSet: "abcdefghijklmnopqrstuvwxyz",
    uppercaseSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbericSet: "0123456789",
    specialCharSet: "~!@#$%^&*()_+<>•`{}",
    criteria: passwordCriteria,
    passwd: "",

    //Create password with the given criteria.
    createPassword: function() {
      // create a string which includes all of character satisfies the criteria.
      var charSet = "";
      if (this.criteria.includeLowercase) {
        charSet = charSet + this.lowercaseSet;        
      }
      if (this.criteria.includeNumeric) {
        charSet = charSet + this.numbericSet;        
      }
      if (this.criteria.includeSpecialCharacters) {
        charSet = charSet + this.specialCharSet;        
      }
      if (this.criteria.includeUppercase) {
        charSet = charSet + this.uppercaseSet;        
      }
      
      console.log(charSet);

      //make password from random character of charSet.
      do {
        this.passwd = "";
        console.log("genPass");
        for (let index = 0; index < this.criteria.length; index++) {
          const element = charSet[index];
          this.passwd += charSet.charAt(Math.floor(Math.random()*charSet.length));
        };
        console.log(this.passwd);
      }while (!this.validatePassword());
      console.log(this.passwd);
      return this.passwd;
    },

    // Validate if the password satisfy the given criteria.
    validatePassword: function(){
      if (this.passwd.length < 8 || this.passwd.length > 128) {
        return false
      };
      
      if (this.criteria.includeNumeric) {
        if (!(/\d/.test(this.passwd))) { 
          return false;
        };
      };

      if (this.criteria.includeLowercase) {
        if (!/[a-z]/.test(this.passwd)) {
          return false;          
        }        
      };

      if (this.criteria.includeUppercase) {
        if (!/[A-Z]/.test(this.passwd)) {
          return false;          
        }        
      };

      if (this.criteria.includeSpecialCharacters) {
        var regexp = /[~!@#$%^&*()_+<>•`{}]/;
        if (!(regexp.test(this.passwd))) {
          return false;          
        }        
      }

     
      return true; 
    }
  }

  //password criteria object
  var passwordCriteria = {
    length: 8,
    includeLowercase: true,
    includeUppercase: true,
    includeNumeric: true,
    includeSpecialCharacters: true,
    
    // validate if 8 < length < 128
    validateLength: function(){
      if (this.length>=8 && this.length<=128) {
        return true;
      } else {
        return false;
      }
    },
    
    // validate if at least one character type should be selected
    validateCharSet: function(){
      if(this.includeLowercase || this.includeUppercase || this.includeNumeric || this.includeSpecialCharacters) {
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
    passwordCriteria.includeLowercase = confirm("Do you want to include lowercase?");
    passwordCriteria.includeUppercase = confirm("Do you want to include uppercase?");
    passwordCriteria.includeNumeric = confirm("Do you want to include number?");
    passwordCriteria.includeSpecialCharacters = confirm("Do you want to include special charaters?");
  } while (!passwordCriteria.validateCharSet());
  // console.log(passwordCriteria);

  //set criteria for password
  password.criteria = passwordCriteria;
  
  //return password 
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
