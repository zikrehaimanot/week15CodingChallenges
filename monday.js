// Implement the function validateData to return true if the input data string meets the following criteria, and false otherwise
// 1. Has at least 1 captial character
// 2. Is of minimum length of 8 and max length of 16
// 3. Has at least one of the following special characters: #, @, !, &, %
// 4. Contains no spaces.

// Example input
// data = "Ch@ng3m3"

function validateData(data) {
  let splitString = data.split('')
  let specialChar = ['#', '@', '!', '&', '%']
  let specialCharCheck = null
  let captialLetterCheck = null
  let hasNoSpaces = true

  if (data.length < 8 || data.length > 16){
    return false
  }

  for(let i = 0; i < splitString.length; i++){
    if(specialChar.includes(splitString[i])){
      specialCharCheck = true
    }
    if(splitString[i] === splitString[i].toUpperCase() && !specialChar.includes(splitString[i])){
      //           console.log(splitString[i])
      captialLetterCheck = true
    }
    if(splitString[i] === " "){
      hasNoSpaces = false
    }

  }
  //    console.log(specialCharCheck, captialLetterCheck, hasNoSpaces)

  return specialCharCheck && captialLetterCheck  && hasNoSpaces


  }
  console.log(validateData(''))
