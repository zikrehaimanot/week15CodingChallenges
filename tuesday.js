// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:


function XO(str) {
    console.log(str, 'hello')
    let xcounter = 0;
    let ocounter = 0;
    for(let i = 0 ; i < str.length ; i++){
      if(str[i].toLowerCase() === "x"){
        xcounter ++;
      }
      if(str[i].toLowerCase() === "o"){
        ocounter ++;
      }
      else{xcounter += 0; ocounter += 0;}
    }
    if(xcounter === ocounter){
      return true;
    }
    if(xcounter === undefined || ocounter === undefined){
     return false;
    }
    else{return false}
}
