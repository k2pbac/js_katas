const makeCase = function(input,settings) {
    
    if(!Array.isArray(settings)){
      switch (settings) {
        case "camel":
          input = applyCamel(input,settings);
          break;
         case "pascal":
          input = applyPascalTitle(input,settings);
          break;
        case "snake":
          input = applySnakeKebab(input, settings);
          break;
        case "kebab":
          input = applySnakeKebab(input, settings);
          break;
        case "title":
          input = applyPascalTitle(input, settings);
          break;
        case "vowel":
          input = applyVowelConst(input, settings);
          break;
        case "consonant":
          input = applyVowelConst(input, settings);
          break;
        case "upper":
          input = applyUpperLower(input, settings);
          break;
        case "lower":
          input = applyUpperLower(input, settings);
          break;
      }
    }
    else {
    for (let setting of settings) {
      switch (setting) {
        case "camel":
          input = applyCamel(input,setting);
          break;
         case "pascal":
          input = applyPascalTitle(input,setting);
          break;
        case "snake":
          input = applySnakeKebab(input, setting);
          break;
        case "kebab":
          input = applySnakeKebab(input, setting);
          break;
        case "title":
          input = applyPascalTitle(input, setting);
          break;
        case "vowel":
          input = applyVowelConst(input, setting);
          break;
        case "consonant":
          input = applyVowelConst(input, setting);
          break;
        case "upper":
          input = applyUpperLower(input, setting);
          break;
        case "lower":
          input = applyUpperLower(input, setting);
          break;
      }
    }
   }
    return input;
};

const applyCamel = function(string,setting){
  let newString = "";  
  let camel = false;
    for(let i=0; i < string.length; i++) {
      if(string[i] == " " && (setting == "camel" || setting == "pascal")){
        camel = true;
      }
      else if(string[i] == " " && setting == "title"){
        camel = true;
        newString += string[i];
      }
      else if(camel == true) {
        newString += string[i].toUpperCase();
        camel = false;
      }
      else {
        newString += string[i];
      }
    }
    return newString;
};

const applyPascalTitle = function(string, setting) {
  return string[0].toUpperCase()+ applyCamel(string.slice(1,string.length),setting);
}

const applySnakeKebab = function(string, setting) {
  let newString = "";

  for(var i = 0; i < string.length; i++) {
    if(string[i].match(/[a-z]/i)){
      newString += string[i];
    }
    else if(string[i] == " " && setting == "snake") {
      newString += "_";
    }
    else if(string[i] == " " && setting == "kebab"){
      newString += "-";
    }
  }
  return newString;
}

const applyVowelConst = function(string, setting){

  let newString = "";

  for(var i = 0; i < string.length; i++) {
    switch(setting) {
      case "vowel":
        if(string[i].match(/[a,e,i,o,u]/)){
          newString += string[i].toUpperCase();
        }
        else {
          newString += string[i];
        }
        break;
      case "consonant":
        if(!string[i].match(/[a,e,i,o,u]/)){
          newString += string[i].toUpperCase();
        }
        else {
          newString += string[i];
        }
        break;
    }
  }
return newString;
}

const applyUpperLower = function(string, setting) {
let newString = "";
if (setting == "upper") {
  for (let el of string) {
    if(el.match(/[a-z]/i)){
     newString += el.toUpperCase();
    }
    else{ 
      newString += el;
    }
  }
}
else {
  for (let el of string) {
    if(el.match(/[a-z]/i)){
     newString += el.toLowerCase();
    }
    else{ 
      newString += el;
    }
  }
}

return newString;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));