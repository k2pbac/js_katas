const urlDecode = function(text) {
  
  const objs = text.split("&") || text;
  let val = false;
  let key = "";
  let value = "";
  let keyVal = {}

  for(var x =0; x < objs.length; x++ ) {
    for (var y = 0; y < objs[x].length; y++) {
        if(objs[x][y] === "=") {
          val = true;
        }
        else if(objs[x][y] === "0"){
          value += " ";
        }
        else if(val === false) {
          key += objs[x][y];
        }
        else if(objs[x][y] !== "%" && objs[x][y] !== "2") {
          value += objs[x][y];
        }
    }
    keyVal[key] = value;
    key = "";
    value = "";
    val = false;
  }
  
  return keyVal;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);